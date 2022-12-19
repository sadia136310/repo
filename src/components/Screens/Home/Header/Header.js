import React from 'react';
import headerimage from '../../../../assets/header-banner/hero-3.png'

const Header = () => {
    return (
        <header className='mx-4 my-6'>
        <div class="w-full bg-cover bg-center">
            <img src={headerimage} alt="" />
        </div>
        </header>
    );
};

export default Header;