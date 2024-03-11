import React from 'react';
import { useEffect, useState } from 'react';
import data from './data.json'
import './App.css';
import Users from './components/users';



function App() {
  const [user, setUser] = useState([])
 

  function fetchUser (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setUser(res))
    .catch(error => console.log(error))
  }





  useEffect(() =>{
    fetchUser()
   
  }, [] );
  return (


    <div className="App">  
<h1 className='glav'>Random Users</h1>
<Users/>
   

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
