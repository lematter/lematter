import { redirect } from "@/i18n/navigation";

export default async function LegalIndexPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;

  // The legal root has no content of its own; send visitors to the Terms page.
  redirect({ href: "/legal/terms", locale });
}
