import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles(() => ({
  img: {
    width: "175px",
    height: "100px",
    objectFit: "cover",
  },
  paper: {
    width: "250px",
    heigh: "150px",
  },
}));
export default function ListItems({ product,loading }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {product?.items.map((item) => {
        const { productName, productImages } = item.fields;
        const mainImages = productImages[0].fields.file.url;
        return (
          <Grid items lg={3} spacing={1}>
            <Grow in="true" {...(!loading? {timeout:1000} : {})}>
              <Paper elevation={3} className={classes.paper}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={mainImages} className={classes.img} />
                </div>
                <h5>{productName}</h5>
              </Paper>
            </Grow>
          </Grid>
        );
      })}
    </Grid>
  );
}
