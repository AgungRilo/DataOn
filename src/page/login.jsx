import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yourLoginAction } from '../reducer/action';

const loginPageStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
    },
    button: {
        background: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        if (username === 'agung_dev' && password === '123') {
            navigate('/');
            dispatch(yourLoginAction({ username }));
        }

    };

    return (
        <div style={loginPageStyles.container}>
            <form style={loginPageStyles.form}>
                <input
                    style={loginPageStyles.input}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    style={loginPageStyles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button style={loginPageStyles.button} onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;