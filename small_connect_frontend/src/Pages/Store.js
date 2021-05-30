import React from 'react';
import axios from'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/js/footer'

import './Store.css';
import Shop from '../components/shop';

class Items extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            shoplist: [],
        }
        
    }
    componentDidMount() {
        const query = (new URL(window.location)).searchParams.get('catagory');
        const url = `http://localhost:5000/catagory/?catagory=${query.trim()}`;

        axios.get(url)
            .then((res) => {
                console.log(res.data);
                this.setState({shoplist: res.data});
            });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="items">
                    {this.state.shoplist.map((data, key) => 
                        <Shop key={key} name={data.name} address={data.pincode} />
                    )}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Items;
