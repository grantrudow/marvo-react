import React from 'react';
import './ProductCard.css';
import productImage from './resources/HomeImages/product.jpg';
import { useStateValue } from './StateProvider';

function ProductCard({ name, brand, size, description, image }) {
    const [{users}, dispatch] = useStateValue();

    return (
        <div className="productCard">
            <img src={productImage} alt="" />
            <div className="productCard__info">
                <h3>{name}</h3>
                <h4>{brand}</h4>
                <h4>{size}</h4>
                <h4>Product Price</h4>
            </div>
        </div>
    )
}

export default ProductCard;
