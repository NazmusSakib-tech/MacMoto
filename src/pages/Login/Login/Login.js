import { Button, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { logIn, isLoading, error, user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {

        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        logIn(loginData.email, loginData.password, location, history);
    }

    const handleGoogleSignIn = (e) => {
        signInUsingGoogle(location, history);
    }
    return (
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom> Login</Typography>
                {isLoading && <CircularProgress color="success" />}
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <NavLink to='/register'> <Button>Is New User, Register</Button></NavLink>
                    <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                </form>

                {user?.email && <Alert severity="success">Login successfully</Alert>}
                {error && <Alert severity="error">{error}</Alert>}

                <p>---------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src="https://viragtea.com/backend/img/admin-login.jpg" alt="" />
            </Grid>

        </Grid>
    );
};

export default Login;