import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';

function Products() {
    return (
        <div className="grid">
            <div className="products grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products;
