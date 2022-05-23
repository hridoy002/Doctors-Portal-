import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user])
    return (
        <div className='mt-24 mb-20'>
            <h4>My Appointment: {appointments.length}</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {appointments.map((data,index) => <tr key={data._id}>
                                <th>{index+1}</th>
                                <td>{data.patientName}</td>
                                <td>{data.treatment}</td>
                                <td>{data.slot}</td>
                                <td>{data.date}</td>
                            </tr>
                                
                                )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;