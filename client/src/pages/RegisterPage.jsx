
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (ev) => {
        setName(ev.target.value)
    }
    const handleemailchange = (ev) => {
        setEmail(ev.target.value)
    }
    const handlePasswordChange = (ev) => {
        setPassword(ev.target.value);
    };

    function registerUSer(ev) {
        ev.preventDefault();
        // axios.get("http://localhost:4000/test")
        // axios.post('/register',{
        //     name,
        //     email,
        //     password,
        // })

    }
    return (
        <div>
            <div className='mt-4 grow flex items-center justify-around'>
                <div className='mb-64'>
                    <h1 className='text-`4xl text-center mb-4'></h1>
                    <form
                        className='max-w-md mx-auto '
                        onSubmit={registerUSer}>
                        <input type='text'
                            placeholder="varun upadhyay"
                            value={name}
                            onChange={handleNameChange}>

                        </input>
                        <input type='email'
                            placeholder="laskjdf@email.com"
                            value={email}
                            onChange={handleemailchange}
                        ></input>
                        <input type='password'
                            placeholder='password'
                            value={password}
                            onChange={handlePasswordChange}>
                        </input>
                        <button className='primary'>Register</button>
                        <div className='mt-2 text-center text-gray-500'>
                            Already a member <Link to={'/login'} className='underline text-black'>Login</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default RegisterPage
