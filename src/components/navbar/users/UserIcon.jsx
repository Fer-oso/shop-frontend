import { Avatar, Box, IconButton, Menu, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { UserNav } from "./UserNav";
import { useSelector } from "react-redux";

export const UserIcon = () => {
  const { id, username } = useSelector(
    (state) => state.authentication.userAuthenticated
  );

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={"Open settings"} >
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={username} src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <UserNav id={id} handleCloseUserMenu={handleCloseUserMenu} />
      </Menu>
    </Box>
  );
};
