import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { UserIcon } from "./users/UserIcon";
import { HamburMenu } from "./menu/hamburmenu/HamburMenu";
import { NormalMenu } from "./menu/normalmenu/NormalMenu";

const pages = ["Products", "Pricing", "Blog"];

export const NavBar =() => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HamburMenu pages={pages} />

          <NormalMenu pages={pages} />

          <UserIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

