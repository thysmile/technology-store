import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import { useProductsContext } from '../context/productsContext';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(()=>({
    img:{
        width:"200px",
        height:"150px"
    },
    itemsname: {
        fontFamily:"odibee Sans,cursive",
        letterSpacing:"0.1rem",
        textTransform:"uppercase",
        "&:hover": {
          color: "red",
        },
      },
}))
export default function BestSelling() {
    const {laptop} = useProductsContext();
    const classes = useStyles();
   const bestSelling = laptop?.items.filter((item)=>item.fields.recommendedProduct)
   console.log(bestSelling)
    return (
        <Grid container>

            <h2 style={{ width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: " Odibee Sans, cursive",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
          fontSize: "30px"}}>Best Selling</h2>
              {bestSelling?.map((item)=>{
                  const id = item.sys.id
                  const {productName,productImages,productSpecSummary} = item.fields
                  const mainImages = productImages[0].fields.file.url
                  return <Grid item lg={3} md={4} sm={6} xs={12} align="center">
                      <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "#000"}}>
                      <img src={mainImages} className={classes.img}/>
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
              })}
        </Grid>
    )
}
