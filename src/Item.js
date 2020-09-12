import React from 'react';
import './Item.css';

import ProductCard from './ProductCard';

function Item({item}) {
	console.log('ITEM.JS', item.data.imageUrl)
	return (
		<div className="item">
			<ProductCard 
				name = {item.data.name}
				brand = {item.data.brand}
				size = {item.data.size}
				description = {item.data.description}
				image = {item.data.imageUrl}
			/>
		</div>
	)
}

export default Item;
