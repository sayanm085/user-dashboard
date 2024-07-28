import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchActivities from './userposts'; // Import the function from the correct path


function UserActivities() {
  const { userId } = useParams();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivitiesData = async () => {
      try {
        const data = await fetchActivities(userId); // Use the imported function
        setActivities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivitiesData();
  }, [userId]);

  console.log(activities.posts);

  if (loading) return <div>Loading activities...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>

    <div className='h-auto w-4/5 bg-white rounded-md mt-4 flex flex-col '>
    <div className='h-auto w-full flex justify-center text-2xl font-semibold'>
      <p>User</p>
    </div>
    <div className='h-auto w-full bg-white rounded-md mt-4 flex justify-around items-center gap-3  flex-wrap'>

    <div className=" h-full w-48 flex flex-col  justify-center gap-1  pt-2 pb-5 ">
  
  <div className=" text-black text-base font-inter font-normal">{activities.user[0].name}</div>
    <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].username}</div>

    <div className=" flex gap-3">
      <div className="text-slate-500 text-sm font-inter font-normal">Email:</div>
      <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].email}</div>
    </div>

    <div className="flex gap-3">
      <div className="text-slate-500 text-sm font-inter font-normal">Phone:</div>
      <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].phone}</div>
    </div>
    
  </div>

    <div className=" h-full w-48  flex flex-col  justify-center gap-1  pt-2 pb-5 ">
    
      <div className=" text-black text-base font-inter font-normal">Company</div>
      <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].company.name}</div>
      <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].company.catchPhrase}</div>
      <div className=" text-gray-600 text-sm font-inter font-normal">{activities.user[0].company.bs}</div>

      
    </div>


    <div className=" h-full w-48 flex flex-col justify-center gap-1   pt-2 pb-5 ">
    
    <div className=" text-black text-base font-inter font-normal"><p>Address</p></div>
    <div className=" text-gray-600 text-sm font-inter font-normal"><p>{activities.user[0].address.street},{activities.user[0].address.suite},{activities.user[0].address.city},{activities.user[0].address.zipcode}</p></div> 
    
    <div className='flex gap-2 '>
      <p>website:</p>
      <a href={`https://${activities.user[0].website }`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{activities.user[0].website}</a>
    </div>
  </div>

    </div>



    </div>



      
    <div className='h-auto w-4/5 rounded-md mt-4 gap-2 flex justify-around flex-wrap mb-10'>

      {activities.posts.map((post) => (
              <div key={post.id} className='h-auto w-96 bg-white rounded-md border-2 flex flex-col gap-4 '>
              <div className=' w-full'>
                <p className='text-base w-20 flex justify-center items-center font-semibold  text-white ml-2 mt-2 rounded-md bg-blue-400 '>Posts.{post.id}</p>
                <p className='text-lg font-semibold text-black pl-2 pt-2 pr-2 sm:text-xl'>
                {post.title}
                </p>
      
                <p className=' text-slate-600 pl-2 pt-2 pr-2 text-sm sm:text-base'>
                {post.body}
                </p>
      
                
              </div>
      
              <p className='pl-2 pb-3 pr-2'>{activities.user[0].name}</p>
              
            </div>
      ))}




    </div>
      

 
    
    
    
    
    
    
    </>
  );

}

export default UserActivities;