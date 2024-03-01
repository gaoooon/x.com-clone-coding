import { ReactNode } from "react";
import { SideMenuBar } from "@/components";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <SideMenuBar />
      {children}
    </div>
  );
}
