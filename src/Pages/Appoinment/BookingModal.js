import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date,treatment,setTreatment }) => {
  const [user] = useAuthState(auth);
  const {_id,name,slots} = treatment;
  const handleForm =event =>{
    event.preventDefault();
    const clientName = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const slot = event.target.slot.value;
    console.log(name,clientName,email,phone,slot)
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold text-center">{name}</h3>

          {/* form  */}
          <form onSubmit={handleForm} className='grid grid-cols-1 justify-items-center gap-5 mt-3' action="">

            <input type="text" disabled value={format(date ,'PP')} placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                
                        {
                          slots?.map((slot,index) => <option value={slot} key={index}>{slot}</option> )
                        }
              </select>
            <input type="text" disabled  name='name' value={user?.displayName || ''} className="input input-bordered input-accent w-full max-w-xs" />

            {/* email */}
            <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />

          </form>
        </div>
      </div>
    </div >
  );
};

export default BookingModal;