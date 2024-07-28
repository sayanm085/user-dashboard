import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile({ user }) {
  const [showHoverBox, setShowHoverBox] = useState(false);
  
  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    navigate(`/user/${user.name}/posts`); 
  };

  return (
    <div 
      className="bg-white flex flex-col w-full h-auto border-b-2 hoverbox"
      onMouseEnter={() => setShowHoverBox(true)}
      onMouseLeave={() => setShowHoverBox(false)}
    >
      <div className='bg-white w-full h-14 flex items-center justify-evenly text-xs sm:text-sm  md:text-xs lg:text-sm'>
        <div className="tick h-full w-2  flex items-center  " >{user.id}</div>
        <div className="name h-full w-22 flex items-center "><p>{user.name}</p></div>
        <div className="username h-full w-22  flex items-center "><p>{user.username}</p></div>
        <div className="email h-full w-22  hidden  items-center   sm:flex"><p>{user.email}</p></div>
        <div className="phone h-full w-22 hidden  items-center   md:flex"  ><p>{user.phone}</p></div>
      </div>

      {showHoverBox && (
        <div className='bg-slate-50 w-full h-32 flex items-center justify-evenly hovershowbox text-xs lg:text-sm pb-3'>
          {/* ... Address, Website, and Company sections (from your example) ... */}
          <div className='h-full w-1/3 flex flex-col gap-1 pl-5 pt-5'>
            <p className='text-xl font-semibold'>Address</p>
            <p className='h-auto w-full text-slate-400'>
              {user.address ? `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}` : 'N/A'}
            </p>
          </div>
          <div className='h-full w-1/3 flex flex-col gap-1 pl-5 pt-5'>
            <p className='text-xl font-semibold'>Website</p>
            <p className='h-auto w-full text-slate-400'>{user.website || 'N/A'}</p>
          </div>
          <div className='h-full w-1/3 flex flex-col gap-1 pl-5 pt-5'>
            <p className='text-xl font-semibold'>Company</p>
            <div className='h-auto w-full text-slate-400'>
              {user.company ? (
                <>
                  <p>{user.company.name}</p>
                  <p>{user.company.catchPhrase}</p>
                  <p>{user.company.bs}</p>
                </>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div> 
        </div>
      )}
    </div>
  );
}

export default UserProfile;
