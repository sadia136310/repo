import React from 'react';
import { Link } from 'react-router-dom';

const LoginModal = () => {
    return (
        <div>
            <form className="flex flex-col text-s p-5">
                <input
                    type={'text'}
                    placeholder="Your username or email"
                ></input>
                <input type={'password'} placeholder="Password"></input>
                <div className="stay-forgot flex flex-row h-14 mt-1 p-4">
                    <div className="stay-container">
                        <input
                            type={'checkbox'}
                            name="stay"
                            value="stay"
                            className="stayCheck"
                        ></input>
                        <label htmlFor="stay" className="ml-2">
                            Stay Logged in
                        </label>
                    </div>
                    <span>
                        <Link className="link-text">Forgot your password?</Link>
                    </span>
                </div>
                <button className="loginbutton font-bold uppercase ">
                    LOG IN
                </button>
            </form>
        </div>
    );
};

export default LoginModal;