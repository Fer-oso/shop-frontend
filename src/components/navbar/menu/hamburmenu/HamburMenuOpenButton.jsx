import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HamburMenu } from "./HamburMenu";

export const HamburMenuOpenButton = ({ generalRoutes, productRoutes }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex lg:hidden ">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <HamburMenu
        productRoutes={productRoutes}
        generalRoutes={generalRoutes}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
};
