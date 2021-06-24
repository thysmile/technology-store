import React,{useEffect,useState} from 'react'
import {useProductsContext} from '../context/productsContext'
import {Grid,ListItem,Paper} from '@material-ui/core'
import ListItems from '../Component/ListItems'
import Filter from '../Component/Filter'
import Monitor from '../Component/Monitor'
import {makeStyles} from  '@material-ui/core'
import Carousel from  '../Component/Carousel'

const useStyles = makeStyles(()=>({

}))
export default function Productpage() {
    const classes = useStyles();
    const {fetchfromcontentful,laptop,loading,fetchMonitor,monitor,filteredItems,fetchPhone,phone} = useProductsContext();
    //const combinedItems = laptop?.items.concat(monitor?.items);
    const combinedItems = [laptop,monitor,phone];
    //console.log(laptop.items)
    useEffect(()=>{
       fetchfromcontentful()
    },[])
    useEffect(()=>{
        fetchMonitor()
    },[])
    useEffect(()=>{
        fetchPhone()
    },[])
    return (
        <Grid container fluid>
          <Carousel />
          {loading?<h1>loading...</h1> : <Grid container>
            <Grid  item lg={3}>
              <Filter />
            </Grid>
            <Grid  item  lg={9} spacing={3}>
              <ListItems items={combinedItems} loading={loading}/>
            </Grid>
          </Grid>
        }
        </Grid>
    )
}
