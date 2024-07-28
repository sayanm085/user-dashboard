// src/api/activitiesApi.jsx

async function fetchActivities(userId) {
    try {
      const userresponse = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      let user =await userresponse.json();
      let userposts =await response.json();

      let totaldata = {user:user,posts:userposts}
      return totaldata;
    } catch (error) {
      throw error; // Rethrow the error for the component to handle
    }
  }
  
  export default fetchActivities;
  