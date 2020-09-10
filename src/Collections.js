import React from 'react';
import './Collections.css'
import CollectionCard from './CollectionCard';


function Collections() {
	return (
		<div className="grid">
			<div className="collections grid">
				<CollectionCard className="collections__card" />
				<CollectionCard className="collections__card"/>
			</div>
		</div>
	)
}

export default Collections;
