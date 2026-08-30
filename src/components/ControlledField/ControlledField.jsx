import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] =useState('');
    const [error, setError] = useState('');

    const handleControlledField = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }
    
    return (
        <div>
            <form onSubmit={handleControlledField}>
                <input type="email" name='email' placeholder="Enter your email" required />
                <br />
                <input type="password" name='password' onChange ={handlePasswordChange} defaultValue={password} placeholder="Enter your password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>
                    {error}
                </small>
            </p>
        </div>
    );
};

export default ControlledField;