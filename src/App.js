import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// import { checkUserSerssion } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App() {
  // const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  // useEffect(() => {
  //   dispatch(checkUserSerssion());
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={
            currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
