import React from 'react'
import { useProductsContext } from '../context/productsContext'

export default function CartTotal() {
    const {total_amount,shipping_fee} = useProductsContext();
    return (
        <div>
            <h5>subtotal: <span>{total_amount}</span></h5>
            <p>shipping fee : <span>{shipping_fee}</span></p>
            <hr />
            <h4>
                order total:{'  '} 
                <span>{total_amount + shipping_fee}</span>
            </h4>
        </div>
    )
}
