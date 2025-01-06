import * as React from "react";

import { useState } from "react";

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { HamburMenu } from "./menu/hamburmenu/HamburMenu";
import { NormalMenu } from "./menu/normalmenu/NormalMenu";
import { Logo } from "./menu/logo/Logo";
import { HamburMenuOpenButton } from "./menu/hamburmenu/HamburMenuOpenButton";
import { LoginButton } from "./menu/login/LoginButton";

export const NavBar = () => {
  const products = [
    {
      name: "Products",
      description: "Get at products page to see all colection",
      href: "/products",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Logo />

        <HamburMenuOpenButton setMobileMenuOpen={setMobileMenuOpen} />

        <NormalMenu products={products} />

        <LoginButton />
      </nav>

      <HamburMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        products={products}
        callsToAction={callsToAction}
      />
    </header>
  );
};
