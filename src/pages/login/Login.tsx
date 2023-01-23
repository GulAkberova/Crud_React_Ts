import React, { useContext, useState } from 'react'
import { crudContext } from '../../context/crudContext';
import { useNavigate } from "react-router-dom";
function Login() {

 const { setLoggedIn } = useContext(crudContext);
 const navigate = useNavigate();
  const [newName, setNewName]=useState<{}>({
    name:'',
    password:''
  })
  

  const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    let { name, value } = event.target;
    setNewName({ ...newName, [name]: value })
  }
  const handleAdd=(event: any)=>{
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(newName));
    setLoggedIn(true);
    navigate("/");
     
  }
  return (
    <div>

   <div className='login_bigdiv'>
  <div className='login_div'>
    <h2>Login</h2>
  <input type={'text'} placeholder='name'name='name' onChange={handleChange}/>
        <input type={'password'} placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleAdd}>Login</button>
  </div>
   </div>
    </div>
  )
}

export default Login