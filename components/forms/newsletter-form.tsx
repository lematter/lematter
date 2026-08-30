"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type NewsletterFormValues = {
  email: string;
};

type NewsletterFormProps = {
  onSubmit?: (values: NewsletterFormValues) => void | Promise<void>;
  className?: string;
};

export function NewsletterForm({ onSubmit, className }: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const [pending, setPending] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    try {
      await onSubmit?.({ email });
    } finally {
      setPending(false);
    }
  }

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
    </form>
  );
}
