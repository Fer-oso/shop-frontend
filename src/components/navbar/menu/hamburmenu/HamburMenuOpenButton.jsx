import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HamburMenu } from "./HamburMenu";

export const HamburMenuOpenButton = ({ generalRoutes, productRoutes }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="absolute left-1/3 top-2 -translate-x-1/2 flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
