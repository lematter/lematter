import { getTranslations } from "next-intl/server";

export async function Faqs() {
  const t = await getTranslations("Home.faqs");

  return (
    <section id="faqs" className="mx-auto w-full max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight">{t("heading")}</h2>
    </section>
  );
}
