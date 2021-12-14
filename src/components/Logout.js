import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {
    const { history } = props;

    const handleYes = () => {
        axiosWithAuth()
            .post('/logout')
                .then(res => {
                    localStorage.removeItem('token');
                    history.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
    };

    const handleNo = () => {
        history.push('/friends');
    };

    return (
        <div>
            <h2>Are You Sure?</h2>
            <button onClick={() => handleYes()}>Yes</button>
            <button onClick={() => handleNo()}>No</button>
        </div>
    )
}

export default Logout;