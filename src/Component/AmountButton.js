import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { useProductsContext } from "../context/productsContext";
export default function AmountButton({id,amount,increase,decrease}) {
  const{toggleAmount} = useProductsContext();
  

 
  return (
    <Grid container align="center">
      <Grid item>
        <IconButton onClick={decrease}>
          <RemoveCircleIcon />
        </IconButton>
      </Grid>
      <h4>{amount}</h4>
      <IconButton onClick={increase}>
      <AddCircleIcon />
      </IconButton>
    </Grid>
  );
}
