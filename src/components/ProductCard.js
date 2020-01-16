import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import axios from 'axios'
import '../styles/productcard.css'


export default ({ product }) => {


    addToWishlist = async (id) => {
        await axios.post('/wishlist', id)

    }
    return (
    <>
    <div className="main-card">
        <img className="product-img" src={product.image} />
        <p className="color-desc">{product.color}</p>
        <p className="price-desc">{product.price}</p>
        <button className="price-desc">Add to Wishlist</button>
    </div>
    </>
    )
}