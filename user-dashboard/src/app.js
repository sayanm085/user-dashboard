import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './components/Userdata'; // Renamed to match your component
import UserActivities from './components/UserActivities'; // Assumed to exist
import "./css/basic.css";
import userapi from './api/userApi';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userapi();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <nav className='h-14 bg-white'>
          <div className="ml-2 h-full flex items-center justify-center text-2xl font-semibold">
            <Link to="/" className="logo">MetaBoard</Link> 
          </div>
        </nav>

        <main className='w-full h-auto flex flex-col items-center'>
           <div className='bg-white w-11/12 h-24  mt-3 rounded-lg'>
              <div className='h-full w-80  flex flex-col justify-center  ml-4'>
                 <p className='text-xl font-semibold'>User Dashboard</p>
                 <div className='flex gap-2 w-auto'><p className='text-md text-blue-400'>User Dashboard</p><i className="fa-solid fa-chevron-up fa-rotate-90"></i><p className='text-md'>User List</p></div>  
              </div>
           </div>

          <Routes>
            <Route path="/" element={
              <div className='bg-white w-11/12 h-auto mb-9 pb-5 mt-3 rounded-lg'>
                <div className='h-16 w-full flex items-center justify-evenly border-b-2'>
                    <div className="tick h-full w-1-1 "></div>
                    <div className="name h-full w-22  flex  items-center  ">
                      <p>Name</p>
                    </div>
                    <div className="username  h-full w-22   flex items-center   ">
                      <p>Username</p>
                    </div>
                    <div className="email h-full w-22  flex items-center  ">
                      <p>Email</p>
                    </div>
                    <div className="phone h-full w-22  flex items-center  ">
                     <p>Phone</p>
                    </div>
                </div>
                {users.map(user => (
                  <Link key={user.id} to={`/user/${user.id}/activities`}> {/* Make each UserProfile a link */}
                    <UserProfile user={user} /> 
                  </Link>
                ))}
              </div>
            } />
            <Route path="/user/:userId/activities" element={<UserActivities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
