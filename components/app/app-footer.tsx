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
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <ul className="flex items-center gap-6">
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
