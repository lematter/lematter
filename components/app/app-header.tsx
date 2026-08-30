import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function AppHeader() {
  const t = await getTranslations("App");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src="/icons/app/dark.png"
            alt={t("brand")}
            width={28}
            height={28}
            className="size-7"
            priority
          />
          {t("brand")}
        </Link>
      </div>
    </header>
  );
}
