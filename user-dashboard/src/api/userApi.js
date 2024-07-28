// src/api/userApi.jsx
async function userapi() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json(); 
  } catch (error) {
    console.error('Error fetching user data:', error);
    return []; 
  }
}

export default userapi;
