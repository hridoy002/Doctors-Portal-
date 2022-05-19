import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Info from './Info/Info';
import Services from './Services';
import Testimonials from './Testimonials';
import MakeAppoinment from './MakeAppoinment';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppoinment />
            <Testimonials />
            <Contact />
            
        </div>
    );
};

export default Home;