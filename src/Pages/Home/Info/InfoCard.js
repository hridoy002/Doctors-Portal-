import React from 'react';

const InfoCard = ({ img, bg, title }) => {
    return (
        <div className={`card lg:card-side bg-accent shadow-xl p-4 ${bg}`}>
            <figure className='pl-5'>
                <img className='w-10' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;