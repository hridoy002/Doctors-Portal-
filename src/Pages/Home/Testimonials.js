import React from 'react';
import quote from '../../images/icons/quote.svg'
import williamson from '../../images/people1.png'
import natasa from '../../images/people2.png'
import rosse from '../../images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {_id:1,name:'Wiilson',img: williamson, location:"claiofornia",comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'},
        {_id:2,name:'Rosse',img: natasa,location:"California",comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'},
        {_id:3,name:'Rosse',img: rosse,location:"California",comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'}
        

    
    ]
    return (
        <section className='container mx-auto w-4/5 lg:w-full '>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary text-xl'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1> </div>
                <div>
                    <img src={quote} alt=""  className='w-24 lg:w-40'/>
                </div>
            </div>
                <div className='grid gap-6 lg:grid-cols-3 lg:gap-0 my-10'>
                    {reviews.map(review=> <Testimonial key={review._id} review={review}/>)}
                </div>
        </section >
    );
};

export default Testimonials;