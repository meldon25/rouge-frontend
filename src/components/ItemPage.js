import React, { Component } from 'react'
import ProductCard from './ProductCard'
import '../styles/itempage.css'

class ItemPage extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        products: []
       }
    }

    componentDidMount() {
      this.fetchData()
    }

    fetchData = async () => {
        const clothes = await fetch('http://localhost:3000/products')
        const products = await clothes.json()

        this.setState({
            products
        })
      }



    renderProducts = () => {
      console.log(this.state.products)
      if (this.state.products) {
        return this.state.products.map((product,index) => {
          return <ProductCard key={index} product={product} />
        })
      }
    }

  render() {
    return (
      <>
      {this.renderProducts()}
      </>
    )
  }
}

export default ItemPage
