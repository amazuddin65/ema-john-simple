import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../product/Product';
import Cart from '../cart/cart';
import './Shop.css';

const Shop = () =>
{const firstTen = fakeData.slice(0, 10);
const [products, setProducts] = useState(firstTen);
const [cart, setCart] = useState([]);
const handleAddProduct = (product) =>
    {const newCart = [...cart, product];
    setCart(newCart);
     const sameProduct = newCart.filter(pd => pd.key === product.key);
    const count = sameProduct.length;
    }
    return (
        <div className="shop-container">
         <div className="product-container">
             {
              products.map(pd => <Product key={pd.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={pd} />)
             }
        </div>
        <div className="cart-container">
         <Cart cart={cart} />
         </div>
        </div>

    );
};

export default Shop;