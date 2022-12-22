import React from 'react'
import './LoginContainer.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SignupContainer from '../signup/SignupContainer'

export default function LoginContainer() {
  const [OpenSignup, setSignupclicked] = useState(false)
  const [accountSignup, setAccountSignup] = useState(true)
  const handleClick = () => {
    if (OpenSignup == false) {
      setSignupclicked(true)
    } else {
      setSignupclicked(false)
    }
  }
  console.log(accountSignup)
  return (
    <>
      {/* {(!OpenSignup)?"hello":"bye"} */}
      {accountSignup ? (
        <div>
          {!OpenSignup ? (
            <div className="flex flex-column w-full login items-center justify-center">
              <div className="login-container flex p-7">
                <span className="title font-bold text-4xl">Sign In</span>
                <span className="signup-link m-4 h-6 text-slate-600">
                  Don't have an account yet?{' '}
                  <Link className="link-text" onClick={handleClick}>
                    Sign up
                  </Link>{' '}
                  for free
                </span>
                <form className="flex flex-col text-s">
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
                  <button className="loginbutton font-bold uppercase">
                    LOG IN
                  </button>
                </form>
                <div
                  className="close-button bg-red-500 flex items-center justify-center hover:cursor-pointer"
                  onClick={() => setAccountSignup(false)}
                >
                  <iconify-icon
                    icon="system-uicons:cross"
                    width="30"
                    height="30"
                    margin-
                  ></iconify-icon>
                </div>
              </div>
            </div>
          ) : (
            <SignupContainer openLogin={OpenSignup} handleClick={handleClick} />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}
