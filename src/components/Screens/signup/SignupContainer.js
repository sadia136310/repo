import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './SignupContainer.css'

export default function SignupContainer({handleClick, openLogin}){
    // const handleClick = () =>{
    //     if (openLogin == false){
    //         openLogin = true;
    //     }
    //     else{
    //         openLogin = false;
    //     }
    // }
    return (
        <>
            <div className='flex flex-column w-full login items-center justify-center'>
                <div className='signup-container flex p-7'>
                    <span className='title font-bold text-4xl'>Sign Up</span>
                    <span className='signup-link m-4 text-base text-slate-600'>Already have an account? <Link className='link-text' onClick={handleClick}>Log In</Link> for free</span>
                    <form className='flex flex-col'>
                        <input type={"text"} placeholder="Your Name"></input>
                        <input type={"text"} placeholder="Username"></input>
                        <input type={"text"} placeholder="Your Email"></input>
                        <input type={"password"} placeholder="Password"></input>
                        <div className='user-type flex flex-row mt-1 p-4'>
                            <div className='ut-container'>
                                <input type={"radio"} name="user-type" value="customer" className='radio-t'></input>
                                <label htmlFor='user-type' className='ml-2'>I am a customer</label>
                                <input type={"radio"} name="user-type" value="vendor" className="radio-t ml-10"></input>
                                <label htmlFor='user-type' className='ml-2'>I am a vendor</label>
                            </div>
                        </div>
                        <div className='tnm-check pl-4 flex flex-row mb-4'>
                            <input type={"checkbox"} className="check-t" name="tnm" value="tnmagree"></input>
                            <label className='ml-2'>Yes, I agree with Privacy Policy and Terms of Use</label>
                        </div>
                        <button className='loginbutton font-bold text-base uppercase'>Sign up</button>
                    </form>
                    <div className='close-button flex items-center justify-center'><iconify-icon icon="system-uicons:cross" width="30" height="30"></iconify-icon></div>
                </div>
            </div>
        </>
    )
}