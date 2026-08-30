import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section id="hero" className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("heading")}</h1>
    </section>
  );
}
