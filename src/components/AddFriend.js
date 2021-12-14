import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = () => {
    const { push } = useHistory();
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
            .post('/friends', values)
            .then(res => {
                console.log(res);
                push('/friends');
            })
            .catch(err => {
                console.error(err);
                alert('Sorry, we are unable to process your addition.');
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