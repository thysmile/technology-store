import React from 'react'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(()=>({

}))
export default function BestSelling() {
    const classes = useStyles();
    return (
        <div style={{width:"100%",display:'flex',justifyContent:"center",height:"300px"}}>
            <h2 style={{ width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: " Odibee Sans, cursive",
          letterSpacing: "0.2rem",
          textTransform: "uppercase",
          fontSize: "30px"}}>Best Selling</h2>          
        </div>
    )
}
