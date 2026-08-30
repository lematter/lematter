import type { ReactNode } from "react";
import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

type AppLayoutProps = {
  children: ReactNode;
};

export async function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </>
  );
}
