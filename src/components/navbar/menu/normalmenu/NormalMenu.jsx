import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const NormalMenu = ({ pages }) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={Link}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};
