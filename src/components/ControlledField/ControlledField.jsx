import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [password, setPassword] =useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

     const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
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
    
    const handleControlledField = (e) => {
        e.preventDefault();
        console.log(name,email,password)
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        // if(password.length < 6){
        //     setError('Password must be at least 6 characters long');
        // }
        // else{
        //     setError('');
        // }
    }

    
    return (
        <div>
            <form onSubmit={handleControlledField}>
                <input type="name" onChange={handleNameChange} defaultValue={name} name='name' placeholder="Enter your name" required />
                <br />
                <input type="email" onChange={handleEmailChange} defaultValue={email} name='email' placeholder="Enter your email" required />
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