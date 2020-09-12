import React from 'react';
import './Item.css';

import ProductCard from './ProductCard';

function Item({item}) {
	return (
		<div className="item">
			<ProductCard 
				name = {item.data.name}
				brand = {item.data.brand}
				size = {item.data.size}
				description = {item.data.description}
				image = {item.data.image}
			/>
		</div>
	)
}

export default Item;
