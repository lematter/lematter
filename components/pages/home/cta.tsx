import { getTranslations } from "next-intl/server";

export async function Cta() {
  const t = await getTranslations("Home.cta");

  return (
    <section id="cta" className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/40 px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{t("heading")}</h2>
      </div>
    </section>
  );
}
