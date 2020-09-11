import React from 'react';
import './CollectionCard.css';
import collectionCard from './resources/HomeImages/collectionCard.jpg';

function CollectionCard() {
	return (
			<div className="collectionCard">
				<img className="collectionCard__image" src={collectionCard} alt="" />
				<h1 className="collectionCard__title">Top Picks</h1>
			</div>
	)
}

export default CollectionCard;
