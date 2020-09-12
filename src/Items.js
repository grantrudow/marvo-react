import React, { useState, useEffect } from 'react';
import './Items.css';
import { Route, Link, useHistory } from 'react-router-dom';
import { db } from './firebase';
import { useStateValue } from './StateProvider';

import Item from './Item';

function Items() {
    const [{ user }, dispatch] = useStateValue();
    const [items, setItems] = useState([]);
    

    useEffect(() => {

        if(user) {
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
        } else {
            setItems({})
        }
        
    }, [user])

    console.log('Added to array >>>', items, items.length)
    
    return (
        <div className="items">
            <div className="items__addNew">
                <Link to='/dashboard/new-item'>
                    <button>Add New Item</button>
                </Link>
            </div>
            <div className="items__list grid">
                {items?.map(item => (
                    <Item item={item} />
                ))}
            </div>
        </div>
    )
}

export default Items;
