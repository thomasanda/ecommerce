import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

// import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shop/shop.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={
              <HomePage />
            } />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/signin"
              element={
                currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div >
  );
}

export default App;
