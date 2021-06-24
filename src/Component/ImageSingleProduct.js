import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.down(776)]: {
      width: "80%",
      height: "15rem",
    },
  },
  dotListClass: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  CarouselImage: {
    width: "100%",
    height: "4rem",
    objectFit: "cover",
    [theme.breakpoints.down(776)]: {
      height: "3.5rem",
    },
  },
  activeImage: {
    border: "2px solid #d4d4d4",
  },
  imageContainer: {
    width: "100%",
    height: "20rem",
    objectFit: "cover",
    [theme.breakpoints.down(776)]: {
      height: "15rem",
    },
  },
}));
export default function ImageSingleProduct({ subImages }) {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };
  const ImageAsDot = ({ onClick, index, active, onMove }) => {
    const images = subImages[index]?.fields.file.url;
    return (
      <div
        className={`${classes.CarouselImage} ${active && classes.activeImage}`}
        onClick={() => onClick()}
      >
        <img src={images} width={80} height={60} />
      </div>
    );
  };
  return (
    <div style={{ paddingBottom: "60px", position: "relative" }}>
      <Carousel
        responsive={responsive}
        infinite
        showDots
        arrows
        renderDotsOutside
        containerClass="container"
        customDot={<ImageAsDot />}
        dotListClass={classes.dotListClass}
      >
        {subImages?.map((item, index) => {
          const { url } = item?.fields.file;
          return (
            <Grid
              align="center"
              className={classes.imageContainer}
              index={index}
            >
              <img src={url} className={classes.img} width={500} height={320} />
            </Grid>
          );
        })}
      </Carousel>
    </div>
  );
}
