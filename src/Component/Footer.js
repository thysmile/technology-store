import React from 'react'
import {makeStyles} from '@material-ui/core'
import { textAlign } from '@material-ui/system'

const useStyles = makeStyles((theme)=>({
    root:{
        height:"5rem",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"#000",
        textAlign:"center",
        [theme.breakpoints.down(776)]:{
            flexDirection:"row",
        }
    },
    h5:{
        color:"#fff",
        margin:"0.1rem",
        fontWeight:400,
        textTransform:"none",
        lineHeight:"1.25"
    }
}))
export default function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <h5 className={classes.h5}>
            &copy; {new Date().getFullYear}
            <span style={{color:"#BF1363"}}>TechnologyStore</span>      
        </h5>  
        <h5 className={classes.h5}>All right reserverd</h5>
        </div>
    )
}
