// import React, {Component} from 'react'

// export default class ItemsOnPage extends Component {
//         constructor(props) {
//             super(props);
//             this.state = { 
//                 products: [],
//                 image: ''
//              }
//         }
        
        // componentDidMount() {
        //     fetch('http://localhost:3000/products')
        //     .then(resp => {
        //         if(resp.ok) {
        //             return resp.json();
        //         }
        //         throw console.error('No Response')
        //     })
        //     .then(resp => this.setState({product: resp}))
        //     .catch(() => this.props.history.push('/products'))
        // }

    //     render () {
    //         if(this.state.products.length) {
    //             return this.state.products.map(product => {
    //                 return (
    //                     <div className="product">
    //                         {product.image}
    //                         {product.color}
    //                         {product.price}
    //                     </div>
    //                 )
    //             })
    //         } else {
    //             return null
    //         }
    //     }
        
    // }   
