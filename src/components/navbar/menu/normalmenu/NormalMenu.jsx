import React from "react";

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { userRoutesProducts } from "../../utils/routesProduct";

export const NormalMenu = ({routes}) => {


  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
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
            {routes.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    to={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      <a href="#" className="text-sm/6 font-semibold text-gray-900">
        Features
      </a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">
        Marketplace
      </a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">
        Company
      </a>
    </PopoverGroup>

    
  );
};
