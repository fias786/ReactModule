import React,{Component} from 'react';
import Product from './Product';

const productsList = [
    {id: 1, name: 'Samsung Galaxy Note 10', category: 'Mobiles', country: 'Canada', price: 11500, currencyCode: 'CAD', productImage: require('./assets/img/product1.jpg')},
    {id: 5, name: 'SkullCandy BT Inkd Plus', category: 'Bluetooth Headset', country: 'UK', price: 800, currencyCode: 'USD', productImage: require('./assets/img/product2.jpg')},
    {id: 13, name: 'Anker Soundbuds Rise', category: 'Bluetooth Headset', country: 'Canada', price: 600, currencyCode: 'CAD', productImage: require('./assets/img/product3.jpg')},
    {id: 8, name: 'JBL Flip 3 Bluetooth speaker', category: 'Speakers', country: 'India', price: 1400, currencyCode: 'INR', productImage: require('./assets/img/product4.jpg',)},
    {id: 10, name: 'Conekt Volt Power Bank', category: 'Power Bank', country: 'China', price: 650, currencyCode: 'CNY', productImage: require('./assets/img/product5.jpg',)},
    {id: 18, name: 'Apple Watch Series', category: 'Watch', country: 'China', price: 640, currencyCode: 'CNY', productImage: require('./assets/img/product6.jpg',)},
    {id: 20, name: 'IBall Slide Spirit X2', category: 'Tablets', country: 'India', price: 9000, currencyCode: 'INR', productImage: require('./assets/img/product7.jpg',)},
    {id: 22, name: 'Skullcandy Set 2.0 ', category: 'Headset', country: 'China', price: 900, currencyCode: 'CNY', productImage: require('./assets/img/product8.jpg',)}
]

class ProductList extends Component{
    
    constructor(){
        super()
        this.state = {
            productsList : productsList,
            selected : null
        }
    }

    listClick = (event) =>{
        this.setState({
            selected : event.currentTarget.id
        })
    }

    render(){
        return (
            <div>
                <center><h1>Product World</h1></center>
                {
                this.state.productsList.map((displayProduct,i)=>(
                    <div key={displayProduct.id}>
                    <ul className='products'>
                    <li id={`product${i}`} onClick={this.listClick.bind(this)}>
                        <div>
                        <img alt="none" id={`image${i}`} src={displayProduct.productImage} width="50px"/>
                        {displayProduct.name}
                        {`product${i}`==this.state.selected && <center><Product product={displayProduct}/></center>}
                        </div>
                    </li>
                </ul>
                </div>))
                }
            </div>
        )
    }
}

export default ProductList;