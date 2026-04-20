"use client";

import { usePathname } from "next/navigation";

// Pages with a full-bleed/dark hero at top should flow under the transparent header.
// All other pages get top padding so content isn't obscured.
const OVERLAY_ROUTES = ["/", "/home2", "/about"];

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOverlay = OVERLAY_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <main className={`flex-1 ${isOverlay ? "" : "pt-[56px] md:pt-[64px]"}`}>
      {children}
    </main>
  );
}
