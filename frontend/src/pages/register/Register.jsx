import { Link } from 'react-router-dom';
import  './register.scss';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
    name:""
  })
  const [err, setErr]=useState(null);

  const handleChange=(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(inputs);
    try {
      await axios.post(import.meta.env.VITE_API_URL+"api/auth/register",inputs)
    } catch (error) {
      setErr(error.response.data)
    }
  }
  console.log(err)
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Blink Beat</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum ipsam commodi officiis culpa delectus aperiam ea earum tempore illum?</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            {err&& <div style={{color:"red"}}>{err}</div>}
            <form onSubmit={handleSubmit}> 
                <input onChange={handleChange} value={inputs.username} type="text" placeholder='Username'name="username"/>
                <input onChange={handleChange} value={inputs.email} type="email" placeholder='E-mail'name="email"/>
                <input onChange={handleChange} value={inputs.password} type="password" placeholder='Password' name="password"/>
                <input onChange={handleChange} value={inputs.name} type="text" placeholder='Name' name="name"/>
                <button type='submit'>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
