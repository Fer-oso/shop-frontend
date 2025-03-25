import React from "react";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { userRoutesProducts } from "../../utils/routesProduct";

export const NormalMenu = ({ generalRoutes, productRoutes }) => {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-10">
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          Product
          <ChevronDownIcon
            aria-hidden="true"
            className="size-5 flex-none text-gray-400"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-2.5 w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="p-4">
            {productRoutes.map(({ name, href, description }) => (
              <div
                key={name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <Link to={href} className="block font-semibold text-gray-900">
                    {name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      {generalRoutes.map(({ name, href }, key) => (
        <Link
          key={key}
          to={href}
          className="text-sm/6 font-semibold text-gray-900"
        >
          {name}
        </Link>
      ))}
    </PopoverGroup>
  );
};
