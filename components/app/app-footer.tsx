import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function AppFooter() {
  const t = await getTranslations("App");

  const legalLinks = [
    { href: "/legal/terms", label: t("footer.terms") },
    { href: "/legal/privacy", label: t("footer.privacy") },
    { href: "/legal/cookies", label: t("footer.cookies") },
  ] as const;

  const socialLinks = [
    { href: "https://www.linkedin.com/company/lematter", label: t("footer.linkedin") },
    { href: "https://x.com/lematterhq", label: t("footer.x") },
    { href: "https://github.com/lematter", label: t("footer.github") },
  ] as const;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: app logo */}
          <Link
            href="/"
            className="flex h-fit items-center gap-2 font-semibold tracking-tight"
          >
            <Image
              src="/icons/app/dark.png"
              alt={t("brand")}
              width={28}
              height={28}
              className="size-7"
            />
            {t("brand")}
          </Link>

          {/* Column 2: intentionally empty */}
          <div className="hidden md:block" />

          {/* Column 3: legal */}
          <nav>
            <h2 className="text-sm font-medium text-foreground">
              {t("footer.legal")}
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: social */}
          <nav>
            <h2 className="text-sm font-medium text-foreground">
              {t("footer.social")}
            </h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {socialLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: centered copyright */}
        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {t("footer.rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
