import { RepeatRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/productsContext";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Table from "../Component/Table";
import { Link } from "react-router-dom";
import ImageSingleProduct from "../Component/ImageSingleProduct";
import Button from "@material-ui/core/Button";
import AmountButton from '../Component/AmountButton'
const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down(599)]: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: "10%",
    },
  },
}));

export default function SingleProductPage() {
  const [singleProductItem, setSingleProductItem] = useState();
  const [amount,setAmount] = useState(1)
  const classes = useStyles();
  const  increase = () =>{
    setAmount((oldAmount)=>{
      let stock = 99
      let tempAmount = oldAmount + 1
      if(tempAmount > stock){
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () =>{
      setAmount((oldAmount)=>{
        let tempAmount = oldAmount -1
        if(tempAmount < 1){
          tempAmount = 1
        }
        return tempAmount
      })
  }
  const {
    singleProduct,
    handleAddtoCart,
    singleProductLoading,
    handleSingleProduct,
    allProducts,
    cart,
  } = useProductsContext();
  console.log(singleProduct);
  const { id } = useParams();
  useEffect(() => {
    handleSingleProduct(id);
  }, []);
  useEffect(() => {
    setSingleProductItem(singleProduct);
  }, [singleProduct]);
  if (!singleProductItem || singleProductItem.length === 0) {
    return <div>no product</div>;
  }

  const {
    productName,
    productSpecSummary,
    productImages,
    productPrice,
    productSpecs,
    productDescription,
  } = singleProductItem.fields;
  const subImages = productImages?.slice(1, productImages.length);
  return (
    <Grid container align="center">
      {singleProductLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {" "}
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ backgroundColor: "#343A40" }}
          >
            <h3>
              {productName} || {productSpecSummary} || {productPrice}$
            </h3>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <div style={{ marginTop: "5%" }}>
              <ImageSingleProduct subImages={subImages ? subImages : {}} />
            </div>
          </Grid>
          <Grid item align="center" lg={6} md={12} sm={12} xs={12}>
            <div
              style={{
                width: "70%",
                height: "15rem",
                border: "2px solid black",
                borderRadius: "25px",
                marginTop: "10%",
              }}
            >
              <h3
                style={{
                  fontFamily: "odibee Sans,cursive",
                  letterSpacing: "0.1rem",
                  textTransform: "uppercase",
                }}
              >
                Description
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#41444B",
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                {productDescription?.content[0].content[0].value}
              </p>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Table productSpecs={productSpecs ? productSpecs : {}} />
          </Grid>
          <Grid
            item
            align="center"
            style={{ marginLeft: "20%" }}
            className={classes.button}
          >
            <AmountButton amount={amount} increase={increase} decrease={decrease}/>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleAddtoCart(id,amount)}
            >
              Add to cart
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}

// {subImages.map((image,index)=>{
//   const {url } = image.fields.file;
// return <img src={url} style={{width:"200px",height:"150px"}}/>
//  })}
