import { getTranslations } from "next-intl/server";
import { FaqsAccordion, type FaqItem } from "./faqs-accordion";

export async function Faqs() {
  const t = await getTranslations("Home.faqs");

  const keys = [
    "whatIs",
    "different",
    "openSource",
    "selfHost",
    "who",
    "free",
  ] as const;

  const items: FaqItem[] = keys.map((key) => ({
    value: key,
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section
      id="faqs"
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center"
    >
      <h2 className="text-3xl font-semibold tracking-tight">{t("heading")}</h2>

      <div className="mt-12 w-full">
        <FaqsAccordion items={items} />
      </div>
    </section>
  );
}
