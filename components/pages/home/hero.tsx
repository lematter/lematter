import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section
      id="hero"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center"
    >
      <h1 className="text-4xl font-semibold tracking-tight">{t("heading")}</h1>
    </section>
  );
}
