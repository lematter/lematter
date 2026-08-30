import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  return (
    <section
      id="faqs"
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {t("heading")}
      </h2>

      <div className="mt-8 w-full sm:mt-12">
        <Accordion className="w-full text-left">
          {keys.map((key) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(`items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
