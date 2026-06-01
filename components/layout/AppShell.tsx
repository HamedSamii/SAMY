"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const FULL_PAGE_LANDINGS = ["/", "/features"];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  const isFullPageLanding = FULL_PAGE_LANDINGS.includes(pathname);
  const isFullWidth =
    pathname === "/pricing" ||
    pathname === "/automation" ||
    pathname === "/cases" ||
    pathname === "/academy" ||
    pathname === "/integrations" ||
    pathname === "/contact" ||
    pathname.startsWith("/academy/") ||
    pathname.startsWith("/cases/");
  const flushUnderNav =
    pathname === "/cases" ||
    pathname.startsWith("/cases/") ||
    pathname === "/academy" ||
    pathname.startsWith("/academy/") ||
    pathname === "/integrations" ||
    pathname === "/contact";

  return (
    <>
      <Nav />
      {isFullPageLanding ? (
        children
      ) : (
        <main
          className={`mx-auto w-full flex-1 ${flushUnderNav ? "pt-0" : "pt-24"} ${
            isFullWidth ? "max-w-none px-0" : "max-w-7xl px-4"
          }`}
        >
          {children}
        </main>
      )}
      <Footer />
    </>
  );
}
