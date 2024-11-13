import { Link, useNavigate } from 'react-router-dom';
import  './login.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigate=useNavigate();
  const {currentUser, login} = useContext(AuthContext);

  const [err, setErr]=useState(null);

  const [inputs, setInputs]=useState({
    username:"",
    password:""
  })

  const handleChange=(e)=>{
    setErr(null)
    setInputs(prev=>({...prev,[ e.target.name]:e.target.value}))
  }

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      console.log(inputs);
      await login(inputs);
      navigate("/")
    } catch (error) {
      setErr(error.response.data)
      console.log(error)
    }
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum ipsam commodi officiis culpa delectus aperiam ea earum tempore illum?</p>
            <span>Don't have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            {err && <div style={{color:"red"}}>{err}</div>}
            <form>
                <input type="text" placeholder='Username'onChange={handleChange}  name="username"/>
                <input type="password" placeholder='Password' onChange={handleChange} name="password"/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
