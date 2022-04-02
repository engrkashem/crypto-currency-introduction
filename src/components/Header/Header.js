import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='grid grid-cols-1 md:grid-cols-2 items-center px-10 py-4 bg-white'>
            <div className='text-4xl font-semibold text-cyan-900'>
                <h3>Crypto Bistro</h3>
            </div>
            <div className='font-semibold text-xl flex gap-5 justify-end'>
                <CustomLink to={'/home'}>Home</CustomLink>
                <CustomLink to={'/coins'}>Coins</CustomLink>
                <CustomLink to={'/contact'}>Contact</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;