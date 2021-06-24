import React, { useContext, useState, useEffect, useReducer } from "react";
import { client } from "../pages/Client";
import reducer from "../reducer/product_reducer";


const getLocalStorage = () =>{
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items:0,
  total_amount:0,
  shipping_fee:534,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchfromcontentful = async () => {
    //fetch laptop
    try {
      dispatch({ type: "FETCH_REQ" });
      const response = await client.getEntries({
        content_type: "laptop",
        order: "sys.createdAt",
      });
      dispatch({ type: "FETCHLAPTOP_SUCCESS", payload: response });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMonitor = async () => {
    //fetch Monitor
    try {
      dispatch({ type: "FETCH_REQ" });
      const response = await client.getEntries({
        content_type: "monitor",
        order: "sys.createdAt",
      });
      console.log(response);
      dispatch({ type: "FETCHMONITOR_SUCCESS", payload: response });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPhone = async () => {
    //fetch phone
    try {
      dispatch({ type: "FETCH_REQ" });
      const response = await client.getEntries({
        content_type: "phone",
        order: "sys.createdAt",
      });
      dispatch({ type: "FETCHPHONE_SUCCESS", payload: response });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddtoCart = (id,amount) => {
    dispatch({
      type: "ADDTO_CART",
      payload: {id,amount}
    });
  };

  const handleSingleProduct = async (id) => {
    console.log("i got called");
    dispatch({ type: "SET_SINGLE_PRODUCT_REQ" });
    let singleProduct;
    if (state.allProducts) {
      singleProduct = state.allProducts.find((p) => p.sys.id === id);
    } else {
      const laptop = await fetchMonitor();
      const monitor = await fetchPhone();
      const phone = await fetchfromcontentful();
      const combinedItems = [laptop, monitor, phone];
      let tempArray = [];
      const combinesItems = () => {
        combinedItems?.map((item) => {
          item?.items.map((item) => tempArray.push(item));
        });
      };
      combinesItems();
      singleProduct = tempArray.find((p) => p.sys.id === id);
      console.log(tempArray);
    }
    dispatch({ type: "SET_SINGLE_PRODUCT_SUCCESS", payload: singleProduct });
  };
  const clearCart = () =>{
    dispatch({type: "CLEAR_CART"})
  }
  const removeCart = (id) =>{
    dispatch({type: "REMOVE_ITEM", payload: id})
  }
  const toggleAmount = (itemId,value) => {
    dispatch({type:"TOGGLE_AMOUNT",payload:{itemId,value}})
  }
  const badgeLength  = () =>{
    dispatch({type: "BADGE_NUMBER"})
  }
 useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(state.cart))
  },[state.cart])
  useEffect(() => { 
    fetchfromcontentful();
  }, []);
  useEffect(() => {
    fetchPhone();
  }, []);
  useEffect(() => {
    fetchMonitor();
  }, []);
  useEffect(() => {
    const combinedItems = [state.laptop, state.phone, state.monitor];
    let tempArray = [];
    const combinesItems = () => {
      combinedItems?.map((item) => {
        item?.items.map((item) => tempArray.push(item));
      });
    };
    combinesItems();
    dispatch({ type: "SET_ALL_PRODUCTS", payload: tempArray });
  }, [state.laptop, state.monitor, state.phone]);
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchfromcontentful,
        fetchMonitor,
        fetchPhone,
        handleAddtoCart,
        handleSingleProduct,
        clearCart,
        removeCart,
        toggleAmount,
        badgeLength,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
