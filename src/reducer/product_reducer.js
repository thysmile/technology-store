const reducer = (state,action) =>{
    switch (action.type) {
        case "FETCH_REQ":
            return {...state,loading:true}
        case "FETCH_SUCCESS":
            return {...state,product:action.payload,loading:false}
     
    
        default: return state;           
}
}

export default reducer;