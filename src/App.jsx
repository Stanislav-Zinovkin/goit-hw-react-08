import React, { useEffect } from "react";

import { AppBar } from "./components/AppBar/AppBar";
import {  Routes, Route } from 'react-router-dom';
import {  lazy, Suspense } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import Loader from "./components/Loader/Loader";
import GoBackBtn from "./components/GoBackBtn/GoBackBtn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { refreshUser } from "./redux/auth/operations.js";
import Layout from "./components/Layout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const RegistrationPage = lazy(()=> import('./pages/Registration/RegistrationPage'));
const LoginPage =lazy(()=> import ("./pages/LogIn/LogInPage")) ;
const AboutUsPage = lazy(() => import('./pages/AboutUs/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect (() => {dispatch(refreshUser());}, [dispatch]);

    if (isRefreshing) return <><Loader/></>;
  
  
  return (
    <div className="container">
      
      
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/"  element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route
                 path="/register"
                 element={
                 <RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />
                 } />
            <Route
              path="/login"
                  element={
                 < RestrictedRoute redirectTo="/contacts" component={LoginPage} />
                }/>
  
            <Route path="/about" element={<AboutUsPage />} />
            <Route
              path="/contacts"
                  element={
            <PrivateRoute redirectTo="/login" component={ContactPage} />
              }/>
  
            <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
      </Suspense>

      <ToastContainer
       position="top-right"
       autoClose={4000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="colored"/>
       
    </div>
  );
}

export default App;
