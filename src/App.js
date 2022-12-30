
import './App.css';
import Header from './Header';
import Home from './Home';
import {  Router ,Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Order from './Order';
import { loadStripe } from "@stripe/stripe-js";
import {Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51MJD9USI6wHG6LO3LKZJXDUoAjczqjFUhgNF8yUyM8CLy4i2HNIkMG4O3ttEg9NwUOa3t5ZELvaGQ6hx70XhGrHr00AfcGPm6V");

function App() {

const [{},dispatch] = useStateValue();

useEffect(() =>{

auth.onAuthStateChanged(authUser => {
  console.log('The User id >>', authUser);

  if (authUser){
    // the user just logged in / the user was 

    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }
  else{

    //user is logged out 

    dispatch({
      type:'SET_USER',
      USER:null 
       })
  }

})
},[])


  return (
    <>
      {window.location.pathname !== "/login" ? <Header /> : null}{" "}
      <Elements stripe ={promise}>
    <Routes>
   
    <Route path="/login" element={<Login />}/> 
 
    <Route path="/checkout" element={<Checkout />} /> 
    <Route path="/payment" element={<Payment />} /> 
    <Route path="/order" element={<Order />} /> 
    <Route path="" element={<Home />}/>      

    </Routes>
    </Elements>
    </>
  );
}

export default App;
