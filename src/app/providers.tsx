"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
};

export default Providers;
