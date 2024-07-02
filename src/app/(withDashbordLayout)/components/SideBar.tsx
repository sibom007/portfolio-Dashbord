import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { drawerItems } from "@/utils/drawerItems";

type TUser = {
  id: string;
  email: string;
  role: string;
  name: string;
  int: number;
};

const SideBar = () => {
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/">
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
            color: "black",
            fontWeight: "400",
          }}>
          Portfolio Dashbord
        </Typography>
      </Stack>
      <List>
        <Divider />
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
