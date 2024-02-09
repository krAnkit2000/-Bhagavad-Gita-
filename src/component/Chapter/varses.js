import React from 'react'
import axios from 'axios';
function varses() {


    const options = {
        method: 'GET',
        url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/',
        headers: {
          'X-RapidAPI-Key': '54db42e034mshe5c9c09f1372ee0p1ac8b0jsnb045d6c0e1ee',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };
      
     const result=async()=>{
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
     }
     result()
  return (
    <div>
      
    
    </div>
  )
}

export default varses




