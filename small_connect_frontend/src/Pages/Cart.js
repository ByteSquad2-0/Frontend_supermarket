import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'
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
                    <CartItem name={"Kitkat"} price={20} />
                    <CartItem name={"Kitkat"} price={20} />
                    <CartItem name={"Kitkat"} price={20} />
                    <CartItem name={"Kitkat"} price={20} />
                    <CartItem name={"Kitkat"} price={20} />
                    <CartItem name={"Kitkat"} price={20} />
                    <button className="final" >Buy All</button>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;
