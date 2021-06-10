import React from "react";
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cooling from "../Images/Cooling.png";
import monitor from "../Images/monitor.png";
import motherboard from "../Images/motherboards.png";
import phone from '../Images/phone.png'
import Cases from '../Images/Cases.png'
import Chair from '../Images/chair.png'
import graphicCard from '../Images/graphicscard.png'
import laptop from '../Images/laptop.png'
import desktop from '../Images/desktop.png'


const images = [
  {
    id:1,
    src : laptop,
    text: "Laptop",
    url:"",
  },
  {
    id:2,
    src : desktop,
    text:"Desktop",
    url:"",
  },
  {
    id:3,
    src:monitor,
    text:"Monitors",
    url:"",
  },
  {
    id:4,
    src: phone,
    text:"Phone",
    url:"",
  },
  {
    id:5,
    src:Chair,
    text:"Chair",
    url:"",
  },
  {
    id:6,
    src : graphicCard,
    text:"GraphicCard",
    url:"",
  },
  {
    id:7,
    src: Cases,
    text:"Cases",
    url:"",
  },
  {
    id:8,
    src:motherboard,
    text:"Motherboards",
    url:"",
  }
]
export default function Showing() {
  return (
    <div style={{widh:"100%",}}>
      <h2
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: " Odibee Sans, cursive",
          letterSpacing: "0.1rem",
          textTransform: "uppercase",
          fontSize: "30px",
        }}
      >
        Explore my feature
      </h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={4}
        swipeable
      >
       
         {images.map((image,index)=>{
           const {src,text} = image
           return <div key={index} style={{widh:"25%",textAlign:"center",fontWeight:"100",letterSpacing:"0.1rem"}}>
             <Link style={{textDecoration:"none",color:"#000"}}>
              <img src={src}/>
              <h3 style={{fontFamily: "Raleway, sans-serif",}}>{text}</h3>
             </Link>
           </div>
         })}
      </Carousel>
    </div>
  );
}
