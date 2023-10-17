import React from 'react'
// import Header from '../Header'
import { Link } from 'react-router-dom'
const LoginPage = () => {
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-`4xl text-center mb-4'></h1>
                <form className='max-w-md mx-auto '>
                    <input type='email' placeholder="laskjdf@email.com"></input>
                    <input type='password' placeholder='password'></input>
                    <button className='primary'>Login</button>
                    <div className='mt-2 text-center text-gray-500'>
                        Don't have an account yet? <Link to={'/register'} className='underline text-black'>Register Now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage
