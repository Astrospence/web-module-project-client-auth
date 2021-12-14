import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = (props) => {
    const { Link, history } = props;
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
                history.push('/friendlist');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name='username'
                    type='text'
                    placeholder='Friend Name'
                    value={values.username}
                    onChange={handleChange}
                />
                <input 
                    name='password'
                    type='text'
                    placeholder='Friend Email'
                    value={values.password}
                    onChange={handleChange}
                />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default AddFriend;