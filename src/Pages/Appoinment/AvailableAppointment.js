import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {  
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-20'>
            <h4 className='text-center text-secondary text-lg'>Available Services on {format(date ,'PP')} </h4>
            <h5 className='text-center text-gray-600'>Please Select a Service</h5>
            <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}/>)}
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment ={setTreatment}/>}
        </div>
    );
};

export default AvailableAppointment;