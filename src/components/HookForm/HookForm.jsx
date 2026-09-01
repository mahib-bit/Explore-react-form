import React from 'react';
import useInputFields from '../../hooks/useInputFields';

const HookForm = () => {

const [name, setName] = useInputFields('');
const [email, setEmail] = useInputFields('');
const [password, setPassword] = useInputFields('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', name, email + password);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={setName} name="name" placeholder="Enter your name" />
                <br />
                <input defaultValue={email} type="email" onChange={setEmail} name="email" placeholder="Enter your email" />
                <br />
                <input type="password" defaultValue={password} onChange={setPassword} name="password" placeholder="Enter your password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;