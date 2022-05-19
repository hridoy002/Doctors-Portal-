import React from 'react';
import doctor from '../../images/doctor.png'
import appointment from '../../images/appointment.png'
const MakeAppoinment = () => {
    return (
        <div className='my-16'>
            <div style={{
                background: `url(${appointment}`,
                backgroundRepeat:'no-repeat',
                height:"533px"
            }} className="hero  bg-base-200 bg-white ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-2/4 '>
                        <img className='mt-[-118px] hidden lg:block' style={{height:'636px'}} src={doctor} alt='' />
                    </div>
                    <div className='lg:w-2/4 p-6  lg:p-0'>
                        <h2 className='text-large text-secondary'>Appoinment</h2>
                        <h1 className="text-3xl font-bold text-white">Make an appoinment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary" >Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;