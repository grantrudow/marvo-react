import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const [{ user }] = useStateValue();


    return (
        <div className="header">
            <Link className="Link" to='/'>
                <div className="header__logo">
                    <h2>Marvo</h2>
                </div>
            </Link>

            <div className="header__siteNav">
                <Link className="navLink">
                    <h5>Clothes</h5>
                </Link>
                <Link className="navLink">
                    <h5>Jewelry</h5>
                </Link>
                <Link className="navLink">
                    <h5>Accessories</h5>
                </Link>
                <Link className="navLink">
                    <h5>Sell Here</h5>
                </Link>
            </div>

            <div className="header__options">
                <Link to='/login'>
                    <AccountCircleIcon className= "header__icon" />
                </Link>
                <Link>
                    <ShoppingCartIcon className= "header__icon" />
                </Link>
                <Link>
                    <SearchIcon className= "header__icon" />
                </Link>
            </div>
        </div>
    )
}

export default Header
