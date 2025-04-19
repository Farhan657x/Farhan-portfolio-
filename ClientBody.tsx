"use client";

import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-[#040404] text-[#eaeaea] dark";
  }, []);

  return (
    <body className="antialiased bg-[#040404] text-[#eaeaea] dark cursor-none" suppressHydrationWarning>
      <CustomCursor />
      {children}
    </body>
  );
}
