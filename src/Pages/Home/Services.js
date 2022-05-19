import React from 'react';
import flouride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Service from './Service';
import treatment from '../../images/treatment.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Flouride Treatment',
            descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit fugit fugiat corrupti laudantium quis animi soluta pariatur assumenda ratione.',
            img: flouride
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo praesentium voluptate voluptatem id ducimus!',
            img: cavity
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo praesentium voluptate voluptatem id ducimus!',
            img: whitening
        },

    ]

    return (
        <div className='text-center my-16'>
            <h4 className='text-secondary text-lg'>Our Services</h4>
            <h2 className='text-4xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-14 my-16'>
                {services.map(service => <Service key={service._id} service={service} />
                )}
            </div>
            <div className="hero min-h-screen  bg-base-200 bg-white ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='text-left px-32'>
                        <h1 className="text-5xl font-bold">Exteptional Dental Care,on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;