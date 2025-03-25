import * as React from "react";

import { NormalMenu } from "./menu/normalmenu/NormalMenu";
import { Logo } from "./menu/logo/Logo";
import { HamburMenuOpenButton } from "./menu/hamburmenu/HamburMenuOpenButton";
import { LoginButton } from "./menu/login/LoginButton";
import { SearchButton } from "../../pages/products/components/form/SearchButton";
import { adminRoutesProducts, userRoutesProducts } from "./utils/routesProduct";
import ShoppingCartList from "./shoppincart/ShoppingCartList";
import { UserIcon } from "./users/UserIcon";
import { navBarGeneralRoutes } from "./utils/routes/navbarRoutes";
import { Link } from "react-router-dom";

export const NavBar = ({ roles }) => {
  const productsRoutes = roles.includes("ADMIN")
    ? adminRoutesProducts
    : userRoutesProducts;

  return (
    <header className="bg-gradient-to-br from-indigo-50 to-purple-50 top-0">
      <nav
        aria-label="Global"
        className="mx-auto  flex max-w-full items-center justify-between lg:px-8 "
      >
        <div className="flex lg:flex-1 h- ">
          <Link className="p-1">
            <Logo width={"w-40"} height={"h-16"} />
          </Link>
        </div>

        <div className="flex items-center m-auto">
          <HamburMenuOpenButton
            generalRoutes={navBarGeneralRoutes}
            productRoutes={productsRoutes}
          />
          <NormalMenu
            generalRoutes={navBarGeneralRoutes}
            productRoutes={productsRoutes}
          />
          <SearchButton />

          <ShoppingCartList />
        </div>
        {roles ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <UserIcon />
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LoginButton />
          </div>
        )}
      </nav>
    </header>
  );
};
