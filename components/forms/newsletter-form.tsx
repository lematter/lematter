"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type NewsletterFormValues = {
  email: string;
};

type Status = "idle" | "success" | "duplicate" | "error";

type NewsletterFormProps = {
  className?: string;
};

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  // Auto-dismiss the status message after a few seconds.
  React.useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [status, message]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json().catch(() => null)) as {
        status?: Status;
        message?: string;
      } | null;

      const nextStatus: Status = data?.status ?? (res.ok ? "success" : "error");
      setStatus(nextStatus);
      setMessage(
        data?.message ??
          (res.ok
            ? "Thanks for subscribing!"
            : "Couldn't subscribe right now. Please try again in a moment."),
      );

      if (nextStatus === "success") {
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't subscribe right now. Please check your connection.");
    } finally {
      setPending(false);
    }
  }

  const messageClass =
    status === "success"
      ? "text-primary"
      : status === "duplicate"
        ? "text-muted-foreground"
        : "text-destructive";

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <div className="w-full sm:max-w-56">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email
          </Label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
        </div>
        <Button type="submit" disabled={pending} className="h-11 w-full sm:w-auto">
          {pending ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>

      {status !== "idle" ? (
        <p role="status" className={`mt-3 text-sm ${messageClass}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
