import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'
import Inventory from '../components/inventory'

import './Items.css';

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
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                    <Inventory name={"IceCream"} price={30} />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Store;
