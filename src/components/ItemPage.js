import React, { Component } from 'react'
import ProductCard from './ProductCard'
import '../styles/itempage.css'
import axios from 'axios'

class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    console.log('hi')
    this.fetchData()
  }

  fetchData = async () => {
    const clothes = await fetch('http://localhost:3000/products')
    const products = await clothes.json()
    console.log(products)
    this.setState({
      products
    })
  }



  renderProducts = () => {
    console.log(this.state.products)
    if (this.state.products) {
      return this.state.products.map((product, index) => {
        return <ProductCard key={index} product={product} handleDelete={this.handleDelete} />
      })
    }
  }

  handleDelete = (deletedProduct) => {
    console.log(deletedProduct.wishlists)

    axios.delete(`http://localhost:3000/products/${deletedProduct.id}`
    )
      .then(() => {
        this.fetchData()
        // this.setState(state => {
        //   console.log(state.products)
        //   products = this.state.products
        //   // const products = state.products.filter((products) =>
        //   //   products.id !== deletedProduct.id)
        //   // return {
        //   //   products,
        //   // }
        // })

      })
      
      .catch(error => console.log(error))
  }
  render() {
    console.log(this.state)
    return (
      <>
        {this.renderProducts()}
      </>
    )
  }
}

export default ItemPage
