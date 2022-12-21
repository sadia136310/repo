import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <p>
        Hello <span>stunhaul</span> (not stunhaul? <span>Log out</span>)
      </p>
      <br />
      <p>From tour account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing address</span>, and <span>edit your password and account details</span>.</p>
      <button>GO TO VENDOR DASHBOARD</button>
    </div>
  );
}

export default Dashboard