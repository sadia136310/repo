import React from 'react'

const Details = () => {
  return (
    <div className='main__details'>
      <div className="input-field">
        <p>First name *</p>
        <input type="text" name="name" placeholder="First name" />
      </div>
      <div className="input-field">
        <p>Last name *</p>
        <input type="text" name="name" placeholder="Last name" />
      </div>
      <div className="input-field">
        <p>Display name *</p>
        <input type="text" name="username" placeholder="display name" />
      </div>
      <div className="input-field">
        <p>Email address *</p>
        <input type="Email" name="email address" id="" />
      </div>
      <div className="password-area">
        <p>Password change</p>
        <div className="input-field">
          <p>Current password (leave blank to leave unchanged)</p>
          <input type="text" />
        </div>
        <div className="input-field">
          <p>New password (leave blank to leave unchanged)</p>
          <input type="text" />
        </div>
        <div className="input-field">
          <p>Confirm new password</p>
          <input type="text" />
        </div>
      </div>
      <button>SAVE CHANGES</button>
    </div>
  );
}

export default Details
