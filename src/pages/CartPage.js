import React,{useState} from 'react'
import { useProductsContext } from '../context/productsContext'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import Cart from '../Component/Cart'
import Divider from '@material-ui/core/Divider'
import CartTotal from '../Component/CartTotal'

const useStyles = makeStyles(()=>({

}))
export default function CartPage({}) {
    const classes = useStyles();
    const [amount,setAmount] = useState(1)
    const {cart,clearCart} = useProductsContext();
    const id  = cart?.sys?.id
    console.log(cart)
    if(cart?.length < 1){
        return <Grid align="center">
            <h3>Your cart is empty</h3>
            <Link to ='/product'>get some</Link>
        </Grid>
    }
      return (
      <div style={{width:"100%"}}>
        <Cart cart={cart}id=
        {id} amount={amount}/>
        <Divider />
        <button onClick={clearCart}>clear cart</button>
        <CartTotal />
      </div>
    )
}
