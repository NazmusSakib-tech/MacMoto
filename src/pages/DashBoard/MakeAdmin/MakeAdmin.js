import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';




const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur = (e) => {

        setEmail(e.target.value)
    }

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('https://polar-cove-41231.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setSuccess(true);
                    console.log(result)
                }
            })
    }
    return (
        <div style={{minHeight: '70vh', backgroundColor: 'lightgray'}}>
            <h3 className="pt-5">Make Admin For Desired Person</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    sx={{ width: "50%", m: 1 }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}
                /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin Successfully</Alert>}

        </div>
    );
};

export default MakeAdmin;