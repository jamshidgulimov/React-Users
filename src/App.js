import React from 'react';
import { useEffect, useState } from 'react';
import data from './data.json'
import './App.css';


function App() {
  const [user, setUser] = useState([])
  const [photo, setPhoto] = useState([])
const result = photo.results

  function fetchUser (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setUser(res))
    .catch(error => console.log(error))
  }

  function fetchPhotos (){
   fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(res => setPhoto(res))
    .catch(error => console.log(error))

  }



  useEffect(() =>{
    fetchUser()
    fetchPhotos()
  }, [] );
  return (


    <div className="App">  
   
{/* {
      result.map((item, index) => (
        <div className="card" key={index}> 
        
        <div className='imgdiv'>
        <img className='immg' src={item.picture.large} alt="" />
        </div>
        <h1>Name: {item.name.first}</h1>
        <h1>Gender: {item.gender}</h1>
        <h1>Age: {item.dob.age} years old</h1>
        </div>
      ))
    }   */}

    {
      user.map((item, index) => (
        <div className="card" key={index}> <h1>Name: {item.name}</h1>
        <h1>City: {item.address.city}</h1></div>
      ))
    }   

{
      data.map((item, index) => (
        <div className="card" key={index}> <h1>Id: {item.id}</h1>
        <h1>Title: {item.title}</h1>
        <div className='imgdiv'>
        <img className='immg' src={item.url} alt="" />
        </div>
        </div>
      ))
    }   

    </div>

  );
}

export default App;
