import { Button } from 'bootstrap';
import React,{Component} from 'react';
class Product extends Component{
    render(){
        return (
            <div align="center">
                <img id='prod-img' src={this.props.product.productImage}/>
                <h3 className='prod-name'>{this.props.product.name}</h3>
                <div className='prod-category'>Category : {this.props.product.category}</div>
                <div className='prod-price'>Price : ${this.props.product.price}</div>
                <button >Add to card</button>
            </div>
        ) 
    }
}

export default Product;