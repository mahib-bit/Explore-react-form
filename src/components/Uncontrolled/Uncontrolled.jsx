import React from 'react';
import { useRef } from 'react';

const Uncontrolled = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleUncontrolledField = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        console.log(passwordRef.current.value);
        const password = passwordRef.current.value;
    };

    return (
        <div>
            <form onSubmit={handleUncontrolledField}>
                <input ref={emailRef} type="email" name='email' placeholder="Enter your email" required />
                <br />
                <input ref={passwordRef} type="password" name='password' placeholder="Enter your password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Uncontrolled;