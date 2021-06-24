import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Grid,Paper} from '@material-ui/core'

const useStyles = makeStyles(()=>({
    paper:{
        width:"250px",
        height:"200px"
    },
    img:{
        width:175,
        height:120,
        objectFit:"cover"
    }
}))
export default function Monitor ({monitor,loading}) {
    console.log(monitor)
const classes = useStyles();
 return <Grid container>
     {monitor?.items.map((item)=>{
        const {productName,productImages,productSummary,productPrice} = item.fields
        const mainImage = productImages[0].fields.file.url
        return <Grid  item lg={4}>
            <Grid item>
                <Paper elevation={3} className={classes.paper}>
                    <div>
                        <div><img src={mainImage} className={classes.img}/></div>
                        <h5>{productName}</h5>
                        <p>{productSummary}</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
     })}
    </Grid>
}