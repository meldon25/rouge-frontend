import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import axios from 'axios'
import '../styles/productcard.css'


export default class ProductCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: this.props.product,
            onDelete: this.props.onDelete
        }
    }
    addToWishlist = async (id) => {
        console.log(this)
        const data = {
          user_id: 1,
          product_id: id
        }
        await axios.post('/wishlists', data)
    
      }

      

      render() {
          console.log(this.props)
        return (
            <>
            <div className="main-card">
                <div className="card-cont">
                <img className="product-img" src={this.state.product.image} />
                <p className="color-desc">{this.state.product.color}</p>
                <p className="price-desc">{this.state.product.price}</p>
                </div>
                <div className="button-cont">
                <button onClick={() => this.addToWishlist(this.state.product.id)} className="price-button">Add to Wishlist</button>
                <button onClick={() => this.props.handleDelete(this.state.product)} className="price-button">Delete</button>
                </div>
            </div>
            </>
            )

      }
 
    
}