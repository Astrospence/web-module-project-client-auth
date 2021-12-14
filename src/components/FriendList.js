import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';

const FriendList = () => {
    const [ friendList, setFriendList ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
                .then(res => {
                    setFriendList(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
    }, []);

    return(
        <div>
            {friendList.map(friend => {
                return <Friend key={friend.id} name={friend.name} email={friend.email} />
            })}
        </div>
    )
}

export default FriendList;