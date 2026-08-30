import { getTranslations } from "next-intl/server";
import {
  FlaskConical,
  GitFork,
  Network,
  Search,
  ShieldCheck,
  Lock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function Features() {
  const t = await getTranslations("Home.features");

  const items = [
    { key: "knowledgeGraph", Icon: Network },
    { key: "semanticSearch", Icon: Search },
    { key: "dataSovereignty", Icon: Lock },
    { key: "openSource", Icon: GitFork },
    { key: "complianceControls", Icon: ShieldCheck },
    { key: "labIntegration", Icon: FlaskConical },
  ] as const;

  return (
    <section
      id="features"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center"
    >
      <h2 className="text-3xl font-semibold tracking-tight">{t("heading")}</h2>

      <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ key, Icon }) => (
          <Card key={key} className="text-left">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle>{t(`items.${key}.title`)}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="space-y-2">
                <span className="block">{t(`items.${key}.line1`)}</span>
                <span className="block">{t(`items.${key}.line2`)}</span>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
