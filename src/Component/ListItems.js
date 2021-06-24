import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  img:{
    width:175,
    height:150,
    objectFit:"cover"
  },

  itemsname: {
    fontFamily:"odibee Sans,cursive",
    letterSpacing:"0.1rem",
    textTransform:"uppercase",
    "&:hover": {
      color: "red",
    },
  },
  paper: {
    width: "250px",
    height: "250px",
  },
}));
export default function ListItems({ items, loading }) {
  const [displayedItems, setDisplayedItems] = useState(items);
  const classes = useStyles();
  const { search } = useLocation();
  const query = search ? search.split("=")[1] : null;
  console.log(displayedItems);
  useEffect(() => {
    let tempArr = [];
    const combineItems = () => {
      items?.map((eachType) => {
        eachType?.items.map((item) => tempArr.push(item));
      });
    };
    combineItems();
    console.log(tempArr);
    setDisplayedItems(tempArr);
  }, [items]);
  useEffect(() => {
    console.log("i got call");
    let tempArr = [];
    const combineItems = () => {
      items?.map((eachType) => {
        eachType?.items.map((item) => tempArr.push(item));
      });
    };
    combineItems();
    const filteredItems =
      query === "all"
        ? tempArr
        : tempArr.filter((item) => item?.fields?.type === query);
    setDisplayedItems(filteredItems);
  }, [query]);
  return (
    <Grid container fluid>
      {displayedItems?.map((item, index) => {
        const id  = item?.sys.id
        const productName = item?.fields?.productName;
        const productImages = item?.fields?.productImages;
        const productSpecSummary = item?.fields?.productSpecSummary;
        //  const { productName, productImages,productSpecSummary } = item.fields;
        const mainImages = productImages && productImages[0]?.fields?.file.url;
        return (
          <Grid lg={3} md={4} sm={6} xs={12} align="center">
            <Grow in="true" {...(!loading ? { timeout: 1000 } : {})}>
              <div
              >
               
                  <Link to={`/product/${id}`} style={{textDecoration:"none",color:"#000"}}>
                    <img src={mainImages} className={classes.img} />
                    <h5 className={classes.itemsname}>{productName}</h5>
                  </Link>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#d4d4d4",
                    fontFamily: "Raleway, sans-serif",
                  }}
                >
                  {productSpecSummary}
                </div>
              </div>
            </Grow>
          </Grid>
        );
      })}
    </Grid>
  );
}
// const { productName, productImages,productSpecSummary } = item.fields;
// const mainImages = productImages[0].fields?.file.url;
// return (
//   <Grid items lg={3} spacing={1}>
//     <Grow in="true" {...(!loading? {timeout:1000} : {})}>
//       <Paper elevation={3} className={classes.paper}>
//        <div style={{width:"100%",alignItems:"center",textAlign:"center"}}>
//        <div
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <img src={mainImages} className={classes.img} />
//         </div>
//         <h5>{productName}</h5>
//         <p style={{fontSize:"13px",color:"#c4c4c4",fontFamily:"Raleway, sans-serif"}}>{productSpecSummary}</p>
//        </div>
//       </Paper>
//     </Grow>
//   </Grid>
// );
