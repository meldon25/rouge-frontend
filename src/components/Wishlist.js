import React, {Component} from 'react'
import ProductCard from '../components/ProductCard'

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
            wishlist: [],
            wish: [],
            product_id: null
         }
         console.log(this.state.wishlist)
    }

    componentDidMount() {
        this.fetchData()
      }
  
        fetchData = async () => {
        const clothes = await fetch('http://localhost:3000/products')
        const products = await clothes.json()

        const wishes = await fetch('http://localhost:3000/wishlists/')
        let wish = await wishes.json()
        wish = wish.map(item => {
            return item.id
        })
  
        this.setState({
          products,
          wish
        })
    }

    getWishlist = () => { // user_id goes in here

        const tempvar = this.state.products.filter(product => {
            if(this.state.wish.includes(product.id)) {
                return true
            }
        })
        console.log(this.state.products)
        const list = tempvar.map((wlist, index) => {
            return <ProductCard key={index} product={wlist} />
        })
        return (
            <>
            {list}
            </>
        )
    }

    handleDelete = (deletedProduct) => {
        console.log(deletedProduct)
        fetch(`/wishlist/${deletedProduct.id}`
        )
        .then(json => {
          this.setState(state => {
            const products = state.products.filter((products) => 
            products.id !== deletedProduct.id)
            return {
              products,
            }
          })
        })
        .catch(error => console.log(error))
      }

    render() { 
        console.log(this.state.products)
        return ( 
            <>
            {this.getWishlist()}
            </>
         );
    }
}
 
export default Wishlist