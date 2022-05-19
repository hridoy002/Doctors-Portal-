import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div className='my-20'>
            <h4 className='text-center text-secondary text-lg'>Available Services on {format(date ,'PP')} </h4>
            <h5 className='text-center text-gray-600'>Please Select a Service</h5>
        </div>
    );
};

export default AvailableAppointment;