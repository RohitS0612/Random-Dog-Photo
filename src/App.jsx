import React, { useEffect, useState } from 'react'
import './App.css'
import  Axios  from 'axios';
export default function App() {

  const [dog, setDog] = useState({});

  // Function to fetch the next dog image
  function nextImg() {
    // fetch('https://dog.ceo/api/breeds/image/random')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDog(data);
    //   });

    Axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => setDog(res.data));


  }

  // Fetch the first dog image when the component mounts
  useEffect(() => {
    nextImg();
  }, []);

  return (
    <>
    <h1>Random Dog Images</h1>
      <div>
        <img src={dog.message} alt="" />
        <button onClick={nextImg} >Next</button>
      </div>

    </>
  )
}
