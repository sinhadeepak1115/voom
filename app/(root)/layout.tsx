import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      Navabr
      {children}
      Footer
    </main>
  );
};

export default RootLayout;
