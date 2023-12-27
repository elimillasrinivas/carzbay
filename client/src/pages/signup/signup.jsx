import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = () => {
        
        const emailRegex = /^\S+@\S+\.\S+$/;
        const isEmailValid = emailRegex.test(email);

       
        const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

     
        const isPasswordValid = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password);

        if (isEmailValid && isPhoneNumberValid && isPasswordValid) {
          
            alert('Signup successful!');
        } else {
            
            alert('Please fill all the details correctly.');
        }
    };

    return (
        <div className="login-con">
            <h1>Sign up</h1>
            <div className='login-section'>
                <div className='phoneemail'>
                    <label>Email</label>
                    <input
                        placeholder='Enter Email'
                        className='phonenumberinput'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className='phone-section'>
                    <label>Phone number</label>
                    <div className='input-container'>
                        <span className='country-code'>+91</span>
                        <input
                            placeholder='Phone number'
                            className='phonenumber'
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </div>
                </div>
                <div className='password'>
                    <label>Password</label>
                    <input
                        placeholder='Enter your Password'
                        type='password'
                        className='passwordinput'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className='login-button'>
                    <p onClick={()=>{navigate('/login')}}>Already have an account?</p>
                    <button className='button' onClick={handleSignUp}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
