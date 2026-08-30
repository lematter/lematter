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
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {t("heading")}
      </h2>

      <div className="mt-8 w-full sm:mt-12">
        <FaqsAccordion items={items} />
      </div>
    </section>
  );
}
