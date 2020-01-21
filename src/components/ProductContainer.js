import React, {Component} from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

export default class ProductContainer extends React.Component{
	constructor(props) {
        super(props)

        this.state = {
            product: this.props.product,
            // getProducts: this.props.getProducts
        }
    }
	
	

	renderProducts = () => {
		return this.props.products && this.props.products.map((product, index) => {
			return <ProductCard key={index} handleDelete={this.handleDelete} product={product} />
		})
	}
	render(){
		return (
		<>
			<div className='main-cont'>
				{this.renderProducts}
			</div>
		</>
	)
	}
	
}

