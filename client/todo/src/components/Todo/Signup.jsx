import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Signup</h1>
        <input type='text' placeholder='Enter your Email' />
        <input type='password' placeholder='Enter Your Password' />
        <div className='btn'>
          <Link to='/todo'>Submit</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
