import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import img1 from "../Images/laptop/Dou15SE.png";
import img2 from "../Images/laptop/FlowX13Gv301.png";
import img3 from "../Images/laptop/M16GU603.png";
import img4 from "../Images/laptop/ROGZs17GX703M.png";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/productsContext";
import { ControlCamera } from "@material-ui/icons";
import { Grid, Paper } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  itemsname: {
    fontFamily:"odibee Sans,cursive",
    letterSpacing:"0.1rem",
    textTransform:"uppercase",
    "&:hover": {
      color: "red",
    },
  },
  img:{
    width:175,
    height:150,
    objectFit:"cover"
  },
}));
export default function NewItems() {
  const { laptop, fetchfromcontentful } = useProductsContext();
  console.log(laptop);
  const hotProduct = laptop?.items.filter(
    (item) => item.fields.featuredProduct
  );
  const classes = useStyles();
  return (
    <Grid container style={{ width: "100%", marginTop: "5%" }}>
      <h2
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: " Odibee Sans, cursive",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
          fontSize: "30px",
        }}
      >
        Hot products
      </h2>
      {hotProduct?.map((item) => {
        const {id} = item.sys
        const { productName, productImages, productSpecSummary } = item.fields;
        const mainImage = productImages[0].fields.file.url;
        return (
          <Grid item lg={3} md={4} sm={6} xs={12} align="center">
           
              <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "#000" }}>
                <img src={mainImage} className={classes.img}/>
                <h4 className={classes.itemsname}>{productName}</h4>
              </Link>
              <div
                style={{
                  fontSize: "13px",
                  color: "#41444B",
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                {productSpecSummary}
              </div>
          
          </Grid>
        );
      })}
    </Grid>
  );
}
