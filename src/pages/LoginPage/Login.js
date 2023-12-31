import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'
import './styles.css'
import Navbar from '../../components/Navbar/Navbar';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');// eslint-disable-line
  const navigate = useNavigate();
  const { signInWithEmail, user, googleSignIn } = UserAuth();
  const handleSignin = async () => {
    try {
      await googleSignIn();
      // navigate('/billing')
    } catch (error) {
      console.log(error)
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signInWithEmail(email, password)

    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate('/billing')
    }

  }, [user])// eslint-disable-line

  return (
    <div className='body5'>
      <Navbar />

      <div className='max-w-[700px] mx-auto my-16 p-4'>

        <div>
          <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
          <p className='py-2'>
            Don't have an account yet?{' '}
            <Link to='/' className='underline'>
              Sign up.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
          </div>
          <div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
              Sign In
            </button>
            <GoogleButton onClick={handleSignin} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login