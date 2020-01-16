import React, {Component} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import ProductContainer from './ProductContainer';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        const product = await axios.get('http://localhost:3000/products')
        this.setState({
            products: [...product.data]
        })
        console.log("Hello",this.state.products)
    }
    

    render() { 
        return (
        <>
         <ProductContainer products={this.state.products} />
         </>
        )
    }
}
 
export default Container