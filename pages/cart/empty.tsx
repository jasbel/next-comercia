import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layouts";

const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito Vacio" description="No hay articulos ene el carrito de compras">
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Typography>Su carrito esta vacio</Typography>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
