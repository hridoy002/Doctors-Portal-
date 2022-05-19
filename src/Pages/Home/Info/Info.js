import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../images/icons/clock.svg'
import map from '../../../images/icons/marker.svg'
import phone from '../../../images/icons/phone.svg'
import chairbg from '../../../images/bg.png'

const Info = () => {
    return (
        <div style={{background:`url(${chairbg})`}} className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10'>
            <InfoCard bg={"bg-gradient-to-r from-secondary to-primary"} img={clock} title={"Opening Hours"}/>
            <InfoCard bg={"bg-accent"} img={map}  title={"Visit Our Location"}/>
            <InfoCard bg={"bg-gradient-to-r from-secondary to-primary"} img={phone} title={"Contact Us Now"}/>
        </div>
    );
};

export default Info;