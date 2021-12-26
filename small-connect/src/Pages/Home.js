import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Hcards from '../components/js/Hcards'
import Homecarddata from '../Homecarddata'

import './Home.css';

class Home extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className="cards">
                    {Homecarddata.map(Hcards)}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
