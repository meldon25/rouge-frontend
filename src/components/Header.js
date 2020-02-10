import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import '../styles/header.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hideOrShowHamburgerDropDown: 'nav'
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }


  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={2}
        rotate={0}
        color='white'
        borderRadius={0}
        animationDuration={0.5}
      />
    )
  }

  displayHeader = () => {
    return (
      <div className="drop-down-cont">
      <ul className='burger-drop-menu'>
        <li className='list'><NavLink activeClassName="active" to="/">Home</NavLink></li>
        <li className='list'><NavLink activeClassName="active" to="/products">Shop</NavLink></li>
        <li className="list"><NavLink activeClassName="active" to="/login">Login</NavLink></li>
        <li className="list"><NavLink activeClassName="active" to="/register">Register</NavLink></li>
        <li className='nav-link'><NavLink className="wishlist-nav" to="/wishlist">Wishlist</NavLink></li>
        {/* {/* <li className='nav-link'><NavLink className="shopping-nav" to="/shoppingbag">Shopping Bag</NavLink></li> */}
      </ul>
      </div>
    )
  }
  render() {
    return (
      <div className='header-container'>
        <div className='topnav'>
          <h1 className='title-header'>Rouge</h1>
          <i className="right-arrow" aria-hidden="true"></i>
          <p className='disc-container'>15% off first order</p>
          <div className='hamburger-menu'>
            <a className="dropbtn" handleClick={this.handleClick}><img className='hamburger-icon' src='https://i.imgur.com/vrPhZS5.png' /></a>
            {window.innerWidth > 1200 ? this.displayHeader() : this.displayHamburgerMenu()}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
