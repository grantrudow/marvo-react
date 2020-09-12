import React from 'react';
import './ProductCard.css';
import productImage from './resources/HomeImages/product.jpg';
import { useStateValue } from './StateProvider';

function ProductCard({ name, brand, size, description, image }) {
    const [{users}, dispatch] = useStateValue();

    return (
        <div className="productCard">
            <img src={image} alt="" />
            <div className="productCard__info">
                <h3 className="productCard_name">{name}</h3>
                <h5 className="productCard_brand">{brand}</h5>
                <h5 className="productCard_size">{size}</h5>
                <h5 className="productCard_price">$59.99</h5>
            </div>
        </div>
    )
}

export default ProductCard;
