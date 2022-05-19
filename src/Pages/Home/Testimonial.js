import React from 'react';

const Testimonial = ({review}) => {
    const {name,comment,img,location} = review;
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{comment}</p>
                    <div className='flex mt-2'>
                        <div
                        className='mr-6'><img src={img} alt="" className='border border-4 rounded-full border-secondary'/></div>
                        <div className='font-bold p-4'>
                            <h3 className='text-lg'>{name}</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;