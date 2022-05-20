import React from 'react';
import Button from '../Shared/Button';
import BookingModal from './BookingModal';

const Service = ({ service,setTreatment }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body ">
                <h2 className="card-title text-secondary text-center">{service.name}</h2>
                <p>{service.slots.length === 0 ? <span className='text-red-600'>No Slot Free</span> : <span>{service.slots[0]}</span> }</p>
                <p>{service.slots.length} {service.slots.length >1 ? "services" : "service"} available</p>
                <div className="card-actions ">
                    
                    <label onClick={()=>setTreatment(service)}  className='btn btn-secondary'  disabled ={service.slots.length === 0} htmlFor="my-modal-3" >Book Appointment</label>
                </div>
            </div>
            
        </div>
    );
};

export default Service;