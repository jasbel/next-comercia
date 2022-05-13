import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { ISize } from "../../interfaces";

interface Props {
  selectedSize: string;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button key={size} size="small">
          {size}
        </Button>
      ))}
    </Box>
  );
};
