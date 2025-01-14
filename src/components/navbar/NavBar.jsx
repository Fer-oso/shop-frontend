import * as React from "react";

import { NormalMenu } from "./menu/normalmenu/NormalMenu";
import { Logo } from "./menu/logo/Logo";
import { HamburMenuOpenButton } from "./menu/hamburmenu/HamburMenuOpenButton";
import { LoginButton } from "./menu/login/LoginButton";
import { SearchButton } from "../../pages/products/components/form/SearchButton";
import { useSelector } from "react-redux";
import { adminRoutesProducts, userRoutesProducts } from "./utils/routesProduct";

export const NavBar = () => {

  const { userAuthenticated} = useSelector(state => state.authentication);

  const roles = userAuthenticated?.roles.map(role => role.roleName);

  const routes = roles.includes("ADMIN") ? adminRoutesProducts : userRoutesProducts;

  return (
    <header className="bg-white top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Logo />
        <HamburMenuOpenButton routes = {routes} />
        <NormalMenu routes = { routes} />
        <SearchButton />
        <LoginButton />
      </nav>
    </header>
  );
};
