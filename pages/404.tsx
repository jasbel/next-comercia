import { Box, Typography } from "@mui/material";
import React from "react";
import Flex from "../common/atoms/Flex";
import { ShopLayout } from "../components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout title="Page Not Found" description="No hay nada que mostrar en esta" urlImg="">
      <Flex justifyContent={'center'} alignItems='center' height={'calc(100vh - 200px)'}>
        <Typography variant="h1" component={'h1'} fontSize={{sm: 50, lg: 100}}>404 |</Typography>
        <Typography marginLeft={0.5} >No encontramos ninguna pagina aqui</Typography>
      </Flex>
    </ShopLayout>
  );
};

export default Custom404;
