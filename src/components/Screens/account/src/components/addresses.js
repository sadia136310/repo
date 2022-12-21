import React from 'react'
import Pencil from '../assets/pencil.png'

const Addresses = () => {
  return (
    <div className="addresses">
      <p>
        The following addresses will be used on the checkout page by default
      </p>
      <div className="main__addresses">
        <div className="billing__address">
          <h2>
            Billing address <img src={Pencil} alt="can't load" />
          </h2>
          <p>address will be here</p>
        </div>
        <div className="shipping__address">
          <h2>
            Shipping address <img src={Pencil} alt="can't load" />
          </h2>
          <p>address will be here</p>
        </div>
      </div>
    </div>
  );
}

export default Addresses
