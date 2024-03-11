import React from 'react'
import { useEffect, useState } from 'react';

const Users = () => {
    const [photo, setPhoto] = useState([])

    function fetchPhotos (){
        fetch('https://randomuser.me/api/?results=9')
        .then(res => res.json())
        .then(res => setPhoto(res))
        .catch(error => console.log(error))
    
      }

      useEffect(() =>{
        fetchPhotos()
       
      }, [] );
  return (
    <div className='App'>
      {
      photo.results && photo.results.map((item, index) => (
        <div className="card" key={index}> 
        
        <div className='imgdiv'>
        <img className='immg' src={item.picture.large} alt="" />
        </div>
        <h1>Name: {item.name.first}</h1>
        <h1>Gender: {item.gender}</h1>
        <h1>Age: {item.dob.age} years old</h1>
        </div>
      ))
      
    } 
    </div>
  )
}

export default Users





