import React from 'react';
import './Items.css';
import { Link, useHistory } from 'react-router-dom'

function Items() {

    return (
        <div className="items">
            <div className="items__addNew">
                <Link to='/newitem' onClick={() => window.location.reload()}>
                    <h2>Add New Item</h2>
                </Link>
            </div>
        </div>
    )
}

export default Items;
