import React from 'react'
import ProductCard from '../components/ProductCard'

export default ({ products }) => {

	const renderProducts = () => {
		return products && products.map((product, index) => {
			return <ProductCard key={index} product={product} />
		})
	}
	return (
		<>
			<div className='main-cont'>
				{renderProducts()}
			</div>
		</>
	)
}

