import React from 'react';
import chair from '../../../images/chair.png'
import chairbg from '../../../images/bg.png'
import Button from '../../Shared/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{background:`url(${chairbg})`,backgroundSize:'cover'}}>
            <div className="hero-content flex-col lg:flex-row-reverse px-14">
                <img className='max-w-sm rounded-lg shadow-2xl' src={chair} alt="" />
                <div className='text-left'>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;