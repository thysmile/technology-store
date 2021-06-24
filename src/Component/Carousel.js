import React from 'react'
import img1 from '../Images/g15.jpg'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    img:{
        width:"100%",
        height: "31.25rem",
        position: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        display: "block",
        overflow: "hidden",
        [theme.breakpoints.down(600)]:{
          height:"19rem"
        }
    }
}))
export default function Carousel() {
    const classes = useStyles();
    return (
        <div style={{width:"100%",height:"100%"}}>
          <img src={img1} className={classes.img}/>
        </div>
    )
}
