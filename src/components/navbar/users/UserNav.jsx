import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogoutUser } from "../../../store/auth/authThunk";
import { MenuItem, Typography } from "@mui/material";
import { useAuth } from "../../../providers/hooks/auth/useAuth";

export const UserNav = ({ id, handleCloseUserMenu }) => {
  const { logout } = useAuth();

  const onClickLogout = () => {
    logout();
  };

  return (
    <>
      <MenuItem onClick={handleCloseUserMenu}>
        <NavLink to={`/users/${id}`} className="dropdown-item">
          <Typography sx={{ textAlign: "center" }}>Profile</Typography>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleCloseUserMenu}>
        <NavLink to={`/users/${id}/edit`} className="dropdown-item">
          <Typography sx={{ textAlign: "center" }}>Settings</Typography>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleCloseUserMenu}>
        <NavLink to="/users" className="dropdown-item">
          <Typography sx={{ textAlign: "center" }}>All Users</Typography>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleCloseUserMenu}>
        <Link onClick={onClickLogout} className="dropdown-item">
          <Typography sx={{ textAlign: "center" }}>Logout</Typography>
        </Link>
      </MenuItem>
    </>
  );
};
