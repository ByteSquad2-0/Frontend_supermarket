import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Inventory from '../components/inventory'

import './Items.css';

class Store extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            itemlist: [{
                items: [
            ]
            }],
        }
    }

    componentDidMount() {
        const query = (new URL(window.location)).searchParams.get('shop');
        const url = `http://localhost:5000/shopname/?shopname=${query.trim()}`;

        axios.get(url)
            .then((res) => {
                console.log(res.data);
                this.setState({itemlist: res.data});
                console.log(this.state.itemlist[0].items);
            });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="store">
                    {
                    this.state.itemlist[0].items.map((data, key) =>
                        <Inventory key={key} name={data.itemname} price={data.price} />
                    )
                    }
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Store;
