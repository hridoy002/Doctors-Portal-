import React from 'react';

import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({user,refetch}) => {
    
    const {email,role}= user; 
    const makeAdmin = () =>{
       
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{ 
            if(res.status === 403){
                toast.error('You have no rights to make admin')
            }
            return res.json()})
        .then(data => {
           if(data.modifiedCount>0){
            refetch();
            toast('Admin add Successfully');
           }
        })
    }
    return (
 
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role!== 'admin' &&  <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button className="btn btn-xs">Remove User</button></td>
            </tr>

    );
};

export default UserRow;