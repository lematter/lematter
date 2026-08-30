import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function AppFooter() {
  const t = await getTranslations("App");

  const links = [
    { href: "/legal/terms", label: t("nav.terms") },
    { href: "/legal/privacy", label: t("nav.privacy") },
    { href: "/legal/cookies", label: t("nav.cookies") },
  ] as const;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-foreground">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
