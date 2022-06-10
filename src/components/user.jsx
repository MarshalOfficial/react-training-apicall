import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const User = (props) => {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const firstName = useRef(null);

    console.log(queryString.parse(location.search));

    useEffect(async () => {
        {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(response.data.data);
            console.log(firstName.current);
        }
    }, []);

    return (
        <>
            <img src={user.avatar} style={{ borderRadius: '50%', width: '100px' }} alt="" />
            <h4 ref={firstName}>{user.first_name} {user.last_name}</h4>
            <h5>{user.email}</h5>
            <button onClick={() => { navigate('/users'); }} className='btn btn-info mt-3'>Users</button>
        </>);
}

export default User;