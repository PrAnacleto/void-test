"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie"; 

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
   
    Cookies.remove("authToken");
    router.push("/login");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer variant="permanent" anchor="left">
        <Toolbar /> 
        <List>
          <ListItem disablePadding selected={pathname === "/dashboard/insumos"}>
            <ListItemButton onClick={() => router.push("/dashboard/insumos")}>
              <ListItemText primary="Insumos" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            selected={pathname === "/dashboard/analise-progresso"}
          >
            <ListItemButton
              onClick={() => router.push("/dashboard/analise-progresso")}
            >
              <ListItemText primary="Análise de Progresso" />
            </ListItemButton>
          </ListItem>
          {/* Botão Logout */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}> 
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* Conteúdo Principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: 24, 
        }}
      >
        <Toolbar /> 
        <Typography variant="h5" gutterBottom>
          Distribuição Viveiros
        </Typography>
        {children} 
      </Box>
    </Box>
  );
}