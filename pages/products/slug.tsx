import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import Flex from "../../common/atoms/Flex";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow } from "../../components/products";
import { SizeSelector } from "../../components/products/SizeSelector";
import { ItemCounter } from "../../components/ui";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const ProducPage = () => {
  return (
    <ShopLayout title={product.title} description={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow  images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}> 
          <Flex flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>

            <Typography variant="subtitle1" component="h2">
              $ {product.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SizeSelector selectedSize={product.sizes[0]} sizes={product.sizes} />
            </Box>

            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            <Chip label="No hay disponibles" color="error" variant='outlined' />

            <Box sx={{mt: 3}}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography >{product.description}</Typography>
            </Box>
          </Flex>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProducPage;
