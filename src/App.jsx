import React from "react";

import { AppBar } from "./components/AppBar/AppBar";
import {  Routes, Route } from 'react-router-dom';
import {  lazy, Suspense } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import Loader from "./components/Loader/Loader";
import GoBackBtn from "./components/GoBackBtn/GoBackBtn";
const HomePage = lazy(() => import("../src/pages/Home/HomePage"));
const RegistrationPage = lazy(()=> import('../src/pages/Registration/RegistrationPage'));
const LoginPage =lazy(()=> import ("../src/pages/LogIn/LogInPage")) ;
const AboutUsPage = lazy(() => import('../src/pages/AboutUs/AboutUsPage'));
const ContactPage = lazy(() => import('../src/pages/ContactPage/ContactPage'));
const NotFoundPage = lazy(() => import('../src/pages/NotFoundPage/NotFoundPage'));

function App() {
  
  
  
  return (
    <div className="container">
      <GoBackBtn/>
      <AppBar />
      <Suspense fallback={<div><Loader/></div>}>
      
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
    path="/register"
    element={
      <RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />
    } />
          
          <Route
    path="/login"
    element={
      <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
    }/>
  
            <Route path="/about" element={<AboutUsPage />} />
            <Route
    path="/contacts"
    element={
      <PrivateRoute redirectTo="/login" component={ContactPage} />
    }/>
  
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
