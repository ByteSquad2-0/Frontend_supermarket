import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import CartItem from '../components/cart-item'

import './Cart.css';

class Cart extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="cart">
                    <CartItem name={"chair"} price={1001} />
                    <CartItem name={"table"} price={10} />
                    <button className="final" >Buy All</button>
                    <button className="final" >Negotiation</button>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;
