import React from "react";
import { makeStyles } from "@material-ui/core";
import img1 from "../Images/laptop/Dou15SE.png";
import img2 from "../Images/laptop/FlowX13Gv301.png";
import img3 from "../Images/laptop/M16GU603.png";
import img4 from "../Images/laptop/ROGZs17GX703M.png";
import { Link } from "react-router-dom";
import {useProductsContext} from '../context/productsContext'



const laptops = [
  {
    id: 1,
    src: img1,
    text: "ROG Zephyrus Dou 15 SE GX551",
    GPU: " GeForce RTX™ 3080",
    CPU: " Windows 10 Pro AMD Ryzen™ 9",
    HDD: "1TB + 1TB M.2 NVMe™ PCIe® 3.0 x4 SSD (RAID 0) ",
    Screen: ' 15.6" ',
  },
];

const useStyles = makeStyles(() => ({
    itemsname:{
         '&:hover':{
             color:"red"
         }
    }
}));
export default function NewItems() {
  const {product} = useProductsContext()
  const hotProduct = product?.items.filter((item)=>item.fields.featuredProduct)
  console.log(hotProduct)
  const classes = useStyles();
  return (
    <div style={{ width: "100%",marginTop:"5%" }}>
        <h2 style={{ width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: " Odibee Sans, cursive",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
          fontSize: "30px"}}>Hot products</h2>
      {laptops.map((laptop, index) => {
        const { src, text, GPU, CPU, HDD, Screen } = laptop;
        return (
          <div style={{ width: "25%", textAlign: "center" }}>
            <Link style={{ textDecoration: "none", color: "#000" }}>
              <img src={src} />
              <h3 className={classes.itemsname}  >{text}</h3>
            </Link>
            <div style={{fontSize:"13px",color:"#c4c4c4",fontFamily:"Raleway, sans-serif"}}>
              <h4>{CPU}</h4>
              <h4>{GPU}</h4>
              <h4>{Screen}</h4>
              <h4>{HDD}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
