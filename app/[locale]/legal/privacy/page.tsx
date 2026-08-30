import type { Metadata } from "next";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";

const LAST_UPDATED = new Date("2026-08-30");

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/legal/privacy">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.privacy" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/legal/privacy">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Legal");
  const tt = await getTranslations("Legal.privacy");
  const format = await getFormatter();

  const keys = ["collection", "use", "sharing", "rights", "contact"] as const;

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">{tt("title")}</h1>
        <p className="mt-3 text-muted-foreground">{tt("intro")}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("lastUpdated", {
            date: format.dateTime(LAST_UPDATED, { dateStyle: "long" }),
          })}
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {keys.map((key) => (
          <section key={key}>
            <h2 className="text-lg font-medium">{tt(`${key}.heading`)}</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              {tt(`${key}.body`)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
