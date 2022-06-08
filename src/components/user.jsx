import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(async function fetch() {
        {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(response.data.data);
        }
        fetch()

    }, []);

    return (
        <>
            <img src={user.avatar} style={{ borderRadius: '50%', width: '100px' }} alt="" />
            <h4>{user.first_name} {user.last_name}</h4>
            <h5>{user.email}</h5>
        </>);
}

export default User;