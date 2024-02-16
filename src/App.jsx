import React from 'react';
import "./sass/main.css";
import "./App.css";
import NavBarComp from './assets/CustComponentes/NavBarComp';
import { Footer } from './assets/CustComponentes/Footer';



const App = () => {
  return (
    <>
         <NavBarComp />
          <Footer />  
    </>
  )
}
export default App;