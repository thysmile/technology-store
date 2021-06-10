import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Images/g15.jpg";
import img2 from "../Images/ZephyrusDou15.jpg";
import img3 from "../Images/ZephyrusG14.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "31.25rem",
    position: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    display: "block",
    overflow: "hidden",
    [theme.breakpoints.down(600)]:{
      height:"20rem"
    }
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3500}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
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
            items: 1,
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
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <img src={img1} className={classes.img} />
        </div>
        <div>
          <img src={img2} className={classes.img} />
        </div>
        <div>
          <img src={img3} className={classes.img} />
        </div>
      </Carousel>
    </div>
  );
}
