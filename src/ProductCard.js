import React from 'react';
import './ProductCard.css';
import productImage from './resources/HomeImages/product.jpg';

function ProductCard() {
    return (
        <div className="productCard">
            <img src={productImage} alt="" />
            <div className="productCard__info">
                <h3>Product Name</h3>
                <h4>Product Brand</h4>
                <h4>Product Price</h4>
            </div>
        </div>
    )
}

export default ProductCard;
