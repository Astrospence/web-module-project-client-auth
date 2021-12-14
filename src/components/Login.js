import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = (props) => {
    const { history } = props;
    const [ values, setValues ] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', values)
            .then(res => {
                const { token, role, username } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                localStorage.setItem('username', username);
                history.push('/friends');
            })
            .catch(err => {
                console.error(err);
                alert('Incorrect username or password');
            });
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
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;