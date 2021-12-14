import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
    const { Link, history } = props;
    const [ values, setValues ] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setValues({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        history.push('/friendlist');
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                />
                <input 
                    name='password'
                    type='text'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Login;