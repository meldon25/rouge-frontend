import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ItemPage from './components/ItemPage'
import Header from './components/Header'
import Wishlist from './components/Wishlist'
import Hero from './components/Hero'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      
      <Switch>
        <Route exact path='/' render={()=> (
          <>
            <Hero />
            <Container />
            <Footer />
          </>
        )}/>
      <Route 
      exact
      path="/products" component={ItemPage} />
      <Route
      path="/login" component={Login} />
      <Route
      path="/register" component={Register} />
      <Route
      path="/wishlist" component={Wishlist} />

      </Switch>
      
    </div>
  );
}

export default App;
