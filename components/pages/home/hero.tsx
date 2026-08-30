import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section
      id="hero"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32"
    >
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {t("heading")}
      </h1>
    </section>
  );
}
