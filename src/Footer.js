import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Footer() {
    return (
        <div className="grid">
            <div className="footer grid">
                <div className="footer__left">
                    <p>Marvo</p>
                    <small>Copyright 2020</small>
                </div>
                <div className="footer__center grid">
                    <p>Clothes</p>
                    <p>Jewelry</p>
                    <p>Accessories</p>
                    <p>Sell</p>
                </div>
                <div className="footer__right">
                    <Link>
                        <AccountCircleIcon className= "footer__icon" />
                    </Link>
                    <Link>
                        <ShoppingCartIcon className= "footer__icon" />
                    </Link>
                    <Link>
                        <SearchIcon className= "footer__icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
