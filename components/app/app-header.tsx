import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function AppHeader() {
  const t = await getTranslations("App");

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/legal/terms", label: t("nav.terms") },
    { href: "/legal/privacy", label: t("nav.privacy") },
    { href: "/legal/cookies", label: t("nav.cookies") },
  ] as const;

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          {t("brand")}
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
