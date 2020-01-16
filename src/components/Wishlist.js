import React, {Component} from 'react'
import ProductCard from '../components/ProductCard'

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            wishlist: [],
            product_id: null
         }
         console.log(this.state.wishlist)
    }

    // componentDidMount() {
    //     this.fetchData()
    //   }
  
    //     fetchData = async () => {
    //     const clothes = await fetch('http://localhost:3000/products')
    //     // const products = await clothes.json()
  
    //     this.setState({
    //       products
    //     })
    //     console.log(this.state.products)
    // }


    deleteProduct(product_id) {
        const {products} = this.state
        const formData = new FormData()
        formData.append('productId', product_id)

        const options = {
            method: 'POST',
            body: formData
        }
        fetch(options)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    response: result,
                    products: products.filter(product => product.id !== product_id )
                })
            }
        )
    }


    render() { 
        return ( 
            <>
            <h1>Hello world</h1>
            </>
         );
    }
}
 
export default Wishlist