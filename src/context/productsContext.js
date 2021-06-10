import React,{useContext, useState,useEffect,useReducer} from 'react'
import {client} from '../pages/Client'
import reducer from '../reducer/product_reducer'

const initialState ={
}
const ProductsContext = React.createContext();
export const ProductsProvider =({children}) =>{
const [state, dispatch] = useReducer(reducer, initialState)
    const fetchfromcontentful = async () =>{
        //fetch laptop
        try {
            dispatch({type:"FETCH_REQ"})
            const response = await client
            .getEntries({
                content_type:"laptop",
            order:"sys.createdAt"
            }) 
            dispatch({type:"FETCH_SUCCESS",payload:response})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductsContext.Provider value={{
            ...state,
            fetchfromcontentful
        }}>
                {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () =>{
    return useContext(ProductsContext);
}