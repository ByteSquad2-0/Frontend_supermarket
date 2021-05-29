import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'

import './Store.css';
import Shop from '../components/shop';

class Items extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        console.log((new URL(window.location)).searchParams.get('user'));
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="items">
                    <Shop name={"Op shop1"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop2"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop3"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop4"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop5"} address={"Daiict, Gnadhinagar"} />
                    <Shop name={"Op shop6"} address={"Daiict, Gnadhinagar"} />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Items;
