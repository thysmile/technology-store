import React,{useEffect} from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import {Divider} from '@material-ui/core'
import { useProductsContext } from '../context/productsContext'
import AmountButton from '../Component/AmountButton'

const useStyles = makeStyles((theme)=>({
    img:{
        width:"90px"
    },
}))
const categories = [
    {
        id:1,
        text:"Items"
    },
    {
        id:2,
        text:"price",
    },
    {
        id:3,
        text:"QTY"
    },
    {
        id:4,
        text:"Total"
    }
]
export default function Cart({cart,amount}) {
    const classes = useStyles();
    const {removeCart, toggleAmount} = useProductsContext();
    const increase = () =>{

    }
    const decrease = () =>{

    }
    useEffect(() => {
    }, [cart])
    return (
        <Grid container>
            {categories.map((item)=>{
                const {id,text} = item
                return <Grid align="center" item lg={3} md={3} key={id}>
                    <h6>{text}</h6>
                    <Divider />
            </Grid> 
            })}
            {cart.map((item)=>{
                const id = item.sys.id
                console.log(id)
                const {productName,productImages,productPrice,productSpecSummary} = item?.fields
                const image = productImages[0].fields?.file.url
                return <Grid container>
                            <Grid item lg={3} align="center"  style={{display:"flex"}}>
                    <img src={image} className={classes.img}/>
                    <h6>{productName}</h6>
                            </Grid>
                            <Grid item lg={3} align="center">
                                <h5>
                                   {productPrice}$ 
                                </h5> 
                            </Grid>
                            <Grid item lg={3} align="center">
                                <AmountButton amount={amount} increase={increase} decrease={decrease}/>
                                
                            </Grid>
                            <Grid item lg={3} align="center">
                            <h5>{productPrice * amount}$</h5>
                            </Grid>
                            <button onClick={()=>removeCart(id)}>remove</button>
                        </Grid>
            })}
        </Grid>
    )  
}
