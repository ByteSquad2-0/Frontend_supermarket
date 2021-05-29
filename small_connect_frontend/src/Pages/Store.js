import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'
import Inventory from '../components/inventory'

import './Store.css';

class Store extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="store">
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                    <Inventory name="Toothpaste" price="60" />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Store;
