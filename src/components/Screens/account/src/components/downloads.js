import React from 'react'
import Error from '../assets/error.png'

const Downloads = () => {
  return (
    <div className="downloads">
      <div className="no__download">
        <div className="download__left">
            <img src={Error} alt="error" />
            <p>No downloads available yet.</p>
        </div>
        <div className="download__right">
          <p>
            <a href="">BROWSE PRODUCTS</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Downloads