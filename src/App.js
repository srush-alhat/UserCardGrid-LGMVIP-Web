// react is a js library developed by facebook
// it is made up of components and they have their own logic  and controls
// JSX - javascript xml which allows to write html in js file
// ES6

// import React from "react";

// const App = () => {
//   return (
//     <>
//       <h1>hello world</h1>
//       <p>how are you</p>
//     </>);
//   // react returns only one element at a time
//   // we can use <div> or <react.fragment> or <> tag to overcome this solution

// }

import React, { useState } from "react";
import './App.css';
// import { UseEffectAPI } from "./component/Useeffect/UseEffectAPI";

// useState  is a variable which stores data 



const App = () =>{

// const [users,setUser] = useState('Hello')
const [users,setUser] = useState([]);
// async is a js function 
const loadUsers = async ()=>{
  console.log('before');
  const response = await fetch ("https://api.github.com/users");
  const jsonresponse = await
  response.json();
  setUser(jsonresponse);
} 


  return(
    <div className="App">
      <h1>Data Fetching Using React</h1>
      <button onClick={loadUsers}>get users</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id , login , avatar_url}) =>(
          <li key = {id}>Name: {login} <br /> url : {avatar_url}</li>
         
        ))}
      </ul>
    </div>
  );
};

export default App;