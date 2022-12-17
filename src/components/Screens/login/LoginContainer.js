import React from 'react'
import './LoginContainer.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SignupContainer from '../signup/SignupContainer'


export default function LoginContainer() {
    const [OpenSignup, setSignupclicked] = useState(false)
    const handleClick = () => {
        if (OpenSignup == false){

            setSignupclicked(true)
        }
        else{
            setSignupclicked(false)
        }
    }
    return (
    <>
        {/* {(!OpenSignup)?"hello":"bye"} */}
        {(!OpenSignup)?
        <div className='flex flex-column w-full login items-center justify-center'>
            <div className='login-container flex p-7'>
                <span className='title font-bold text-4xl'>Sign In</span>
                <span className='signup-link m-4 text-base text-slate-600'>Don't have an account yet? <Link className='link-text' onClick={handleClick}>Sign up</Link> for free</span>
                <form className='flex flex-col'>
                    <input type={"text"} placeholder="Your username or email"></input>
                    <input type={"password"} placeholder="Password"></input>
                    <div className='stay-forgot flex flex-row mt-1 p-4'>
                        <div className='stay-container'>
                            <input type={"checkbox"} name="stay" value="stay" className='stayCheck'></input>
                            <label htmlFor='stay' className='ml-2'>Stay Logged in</label>
                        </div>
                        <span><Link className='link-text'>Forgot your password?</Link></span>
                    </div>
                    <button className='loginbutton font-bold text-base uppercase'>LOG IN</button>
                </form>
                <div className='close-button flex items-center justify-center'><iconify-icon icon="system-uicons:cross" width="30" height="30"></iconify-icon></div>
            </div>
        </div>:<SignupContainer openLogin={OpenSignup} handleClick={handleClick}/>}
    </>
  )
}
