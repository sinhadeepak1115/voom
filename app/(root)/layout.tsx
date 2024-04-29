import React, { ReactNode } from "react";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voom",
  description: "Video calling app",
  icons: {
    icon: "../public/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
