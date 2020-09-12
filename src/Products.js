import React, { useState, useEffect } from 'react';
import './Products.css';
import { Route, Link, useHistory } from 'react-router-dom';
import { db, storage } from './firebase';
import { useStateValue } from './StateProvider';


import ProductCard from './ProductCard';

function Products() {
    const [{ user }, dispatch] = useStateValue();
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        
        db.collection('users')
        .doc(user?.uid)
        .collection('items')
        // .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => (
            setItems(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [user])

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
