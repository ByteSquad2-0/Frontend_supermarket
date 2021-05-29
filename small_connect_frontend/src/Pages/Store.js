import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'

import './Store.css';
import Shop from '../components/shop';

class Items extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="items">
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop"} address={"Daiict, Gnadhinagar"} />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Items;
