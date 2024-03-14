import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Login</h1>
        <input type='text' placeholder='Enter your Email' />
        <input type='password' placeholder='Enter Your Password' />

        <div className='btn'>
          <Link to='/todo'>Login</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
