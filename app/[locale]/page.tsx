import { setRequestLocale } from "next-intl/server";
import { AppLayout } from "@/components/app";
import { Hero, Features, Faqs, Cta } from "@/components/pages/home";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  // Enable static rendering for this request.
  setRequestLocale(locale);

  return (
    <AppLayout>
      <Hero />
      <Features />
      <Faqs />
      <Cta />
    </AppLayout>
  );
}
