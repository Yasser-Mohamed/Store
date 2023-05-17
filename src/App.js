import React from 'react';
import {Routes,Route,BrowserRouter, HashRouter } from "react-router-dom"
import Main from './components/Main';
import FilterProduct from './components/filterProduct/FilterProduct';
import SingleProduct from './components/filterProduct/SingleProduct';
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';

function App() {
  const user = useSelector((state)=> state.user.user);
  const {authUser}= user;
  console.log("user", user)
  console.log("authUser",authUser)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={authUser?<Main />:<Login />}></Route>
        <Route path='/FilterProduct/:type' element={<FilterProduct />}></Route>
        <Route path='/FilterProduct/:type/:id' element={<SingleProduct />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
