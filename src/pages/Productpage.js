import React,{useEffect,useState} from 'react'
import {useProductsContext} from '../context/productsContext'
import {Grid,ListItem,Paper} from '@material-ui/core'
import ListItems from '../Component/ListItems'
import Filter from '../Component/Filter'
import {makeStyles} from  '@material-ui/core'

const useStyles = makeStyles(()=>({

}))
export default function Productpage() {
    const classes = useStyles();
    const {fetchfromcontentful,product,loading} = useProductsContext();
    useEffect(()=>{
       fetchfromcontentful()
    },[])
    return (
        <div>
          {loading?<h1>loading...</h1> : <Grid container>
            <Grid lg={3}>
              <Filter />
            </Grid>
            <Grid lg={9}>
              <ListItems product={product} loading={loading}/>
            </Grid>

          </Grid>
        }
        </div>
    )
}
