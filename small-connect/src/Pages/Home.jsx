import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Cards from "../components/card";

import data from '../data'

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="p-8 flex flex-wrap justify-items-center justify-center gap-6">
                {data.map(({ img, shopname, rating }, index) =>
                    <Cards
                        key={index}
                        url={img}
                        shopname={shopname}
                        rating={rating}
                    />
                )}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Home;
