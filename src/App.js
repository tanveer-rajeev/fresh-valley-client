import React, { createContext, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import AddProducts from "./components/AddProducts/AddProducts";
import Checkout from "./components/Checkout/Checkout";
import ManageProduct from "./components/Admin/ManageProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>

          <Route path="/home">
            <Header/>
            <Home/>
          </Route>

          <Route path="/login">
            <Header/>
            <Login/>
          </Route>

          <Route path="/admin">
          <Header/>
            <Admin/>
          </Route>
          <Route path="/manageProduct">
          <Header/>
            <ManageProduct/>
          </Route>
          <Route path="/addProduct">
            <Header/>
            <AddProducts/>
          </Route>
          
          <PrivateRoute path="/checkout/:id">
            <Header/>
            <Checkout/>
          </PrivateRoute>

          <Route path="/order/:id">
            <Header/>
            <Order/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
