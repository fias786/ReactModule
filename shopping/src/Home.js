import React,{useState} from 'react';
import './Home.css'
const productList = [{ id: 1, productName: "Lenovo Laptop", price: "60000", quantity: 0, src: require('./images/img1.png') },
 { id: 2, productName: "Apple Laptop", price: "50000", quantity: 7, src: require('./images/img2.png') },
 { id: 3, productName: "Asus Laptop", price: "40000", quantity: 3, src: require('./images/img3.png') },
 { id: 4, productName: "HP NotePad", price: "80000", quantity: 10, src: require('./images/img4.png') },
 { id: 5, productName: "MicroPhone", price: "55000", quantity: 6, src: require('./images/img5.png') },
 { id: 6, productName: "LG Laptop", price: "63000", quantity: 8, src: require('./images/img6.png') },
 { id: 7, productName: "Gaming Headset", price: "3000", quantity: 8, src: require('./images/img7.jpeg') }]
const Home = () => {
    const [products, changeProducts] = useState(productList);
    const addToCard = (event) =>{
        const product  = products.map((list)=>(list.id == event.currentTarget.value ? {...list, quantity : list.quantity==0 ? 0 : list.quantity-1} : list))
        changeProducts(product);
    }
    return (
        <div id="itemList">
            {products.map((product)=>(<div className={product.quantity == 0 ? 'itemFadeOut' : 'item'} id={`item${product.id}`}>
                <img id={`img${product.id}`} src={product.src}/>
                <h6 id={`name${product.id}`}>{product.productName}</h6>
                <label id={`stockDetail${product.id}`}>{product.quantity == 0 ? 'Out of Stock' : 'In Stock'}</label>
                <p id={`price${product.id}`}>{`\$ ${product.price}`}</p>
                <button id={`button${product.id}`} value={product.id} onClick={addToCard}>Add to Cart</button>
            </div>))}
        </div>
    )
}

export default Home;