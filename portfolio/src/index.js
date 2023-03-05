/* console.log(Redux)
console.log(ReduxThunk) */

//Constants
const withdrawmoney = "Withdraw";
const depositemoney = "Deposite"
const addproduct = "Add_Product";
const getproductdata = "Get_Product";

//fetchdata
const fetchProducts =  () => {
  return async(dispatch) => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response =  await data.json();
    dispatch(getProducts(response))
  }
}

//Actions Creator
const Withdraw_Money = (amount) => {
  return{
    type :withdrawmoney,
    payload:amount
  }
}
const Deposite_Money = (amount) => {
  return {
    type :depositemoney,
    payload:amount
  }
}
const AddProduct = (product) => {
  return{
    type:addproduct,
    payload:product
  }
}
const getProducts = (products) => {
  return{
    type:getproductdata,
    payload:products
  }
}

//Reducers
const BankReducer= (state = 1000,action) => {
  switch(action.type){
    case withdrawmoney:
      return state - action.payload;
    case depositemoney:
      return state + action.payload;
    default:
      return state
  }
}
const ProductsReducer = (state=[] , action) => {
  switch(action.type){
    case addproduct:
      return [...state , action.payload];
    case getproductdata:
      return [...action.payload];
    default:
      return state
  }
}

//Store
const appReducer = Redux.combineReducers({
  bank: BankReducer,
  products: ProductsReducer
})

const store = Redux.createStore(appReducer,Redux.applyMiddleware(ReduxThunk));

store.dispatch(fetchProducts());


//
const amountvalue = document.querySelector("#value")
amountvalue.innerHTML = store.getState().bank
document.querySelector("#withdraw").addEventListener("click",()=>{
  let amount = parseInt(document.getElementById("amount").value);
  store.dispatch(Withdraw_Money(amount))
})
document.querySelector("#deposite").addEventListener("click",()=>{
  let amount = parseInt(document.getElementById("amount").value);
  store.dispatch(Deposite_Money(amount))
})

//
store.subscribe(()=>{
  console.log("Current State",store.getState())
  amountvalue.innerHTML = store.getState().bank
})