import * as React from "react";

import { NormalMenu } from "./menu/normalmenu/NormalMenu";
import { Logo } from "./menu/logo/Logo";
import { HamburMenuOpenButton } from "./menu/hamburmenu/HamburMenuOpenButton";
import { SearchButton } from "../../pages/products/components/form/SearchButton";
import { adminRoutesProducts, userRoutesProducts } from "./utils/routesProduct";

import { UserIcon } from "./users/UserIcon";
import { navBarGeneralRoutes } from "./utils/routes/navbarRoutes";
import { Link } from "react-router-dom";
import ShoppingCartList from "../shoppincart/ShoppingCartList";

export const NavBar = ({ roles }) => {
  const productsRoutes = roles.includes("ADMIN")
    ? adminRoutesProducts
    : userRoutesProducts;

  return (
    <header className="bg-gradient-to-br from-indigo-50 to-purple-50 top-0 w-full shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-1"
      >
        <div className="flex flex-1">
          <Link className="ml-0">
            <Logo width={"w-24 md:w-40"} height={"h-12 md:h-16"} />
          </Link>
        </div>

        {/* Menú normal solo en pantallas grandes */}

        <NormalMenu
          generalRoutes={navBarGeneralRoutes}
          productRoutes={productsRoutes}
        />

        <HamburMenuOpenButton
          generalRoutes={navBarGeneralRoutes}
          productRoutes={productsRoutes}
        />

        <SearchButton />
        <ShoppingCartList />
        {/* Ícono de usuario */}
        <div className=" md:flex md:flex-1 justify-end">
          {roles && <UserIcon />}
        </div>
      </nav>
    </header>
  );
};
