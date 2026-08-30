import { getTranslations } from "next-intl/server";

export async function Cta() {
  const t = await getTranslations("Home.cta");

  return (
    <section id="cta" className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/40 px-6 py-12 text-center sm:px-8 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {t("heading")}
        </h2>
      </div>
    </section>
  );
}
