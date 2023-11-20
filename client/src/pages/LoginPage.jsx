import  { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
// import Header from '../Header'
import { UserContext } from '../UserContext';
import axios from 'axios'



// if (redirect) {
//     return <Navigate to={'/'} />
// }
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);    
   const {setUser}= useContext(UserContext);
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            // const { data } = 
            const data= await axios.post('/api/login', { email, password });
            setUser(data);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-`4xl text-center mb-4'></h1>
                <form className='max-w-md mx-auto ' onSubmit={handleLoginSubmit}>
                    <input type='email'
                        placeholder="laskjdf@email.com"
                        value={email}
                        onChange={handleEmailChange}></input>
                    <input type='password'
                        placeholder='password'
                        value={password}
                        onChange={handlePasswordChange}></input>
                    <button className='primary'>Login</button>
                    <div className='mt-2 text-center text-gray-500'>
                       <p> Dont have an account yet?</p> <Link to={'/register'} className='underline text-black'>Register Now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage
