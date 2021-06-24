const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return { ...state, loading: true };
    case "FETCHLAPTOP_SUCCESS":
      return { ...state, laptop: action.payload, loading: false };

    case "FETCHMONITOR_SUCCESS":
      return { ...state, monitor: action.payload, loading: false };
    case "FETCHPHONE_SUCCESS":
      return { ...state, phone: action.payload };
    case "ADDTO_CART":
      const {id,amount} = action.payload;
      let tempItem = state.cart?.find((i) => i.id === id);
      if (!tempItem) {
        const addedItem = state.allProducts.find((item) => item.sys.id === id);
        return { ...state, cart: [...state.cart, addedItem] };
      }
      else{
        const tempCart = state.cart?.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem,amount : newAmount  };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      }
    //set all fetched products into allProducts
    case "SET_ALL_PRODUCTS":
      console.log(" all prodct got called");
      return {
        ...state,
        allProducts: action.payload,
      };
    //handle with single product
    case "SET_SINGLE_PRODUCT_REQ":
      console.log("i got called");
      return {
        ...state,
        singleProductLoading: true,
      };
    case "SET_SINGLE_PRODUCT_SUCCESS":
      console.log("i got called 2");
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_PRODUCT_FAIL":
      return {
        ...state,
        singleProductLoading: false,
      };
    case "CLEAR_CART": 
        return {...state,cart: []}
      case "REMOVE_ITEM": 
      const tempCart  = state.cart?.filter((item) => item.id !== action.payload)
        return {...state,cart:tempCart}
        case "BADGE_NUMBER": 
        const numberBadge = state.cart.length
        return {...state, badgeNum: numberBadge}
        case "TOGGLE_AMOUNT": 
          const {value,itemId} = action.payload
          const getAmount = state.cart?.map((item)=>{
              if(item.id === itemId){
                if(value === 'inc'){
                    let newAmount = item.amount + 1
                  if(newAmount > item.max){
                    newAmount = item.max
                  }
                  return {...item, amount: newAmount}
                }
                if(value === 'dec'){
                  let newAmount = state.amount - 1
                  if(newAmount < 1){
                    newAmount = 1
                  }
                  return {...item,amount : newAmount}
                }
              }
              return {...item}
          })
          return {...state,cart: getAmount}
    default:
      return state;
  }
};

export default reducer;
