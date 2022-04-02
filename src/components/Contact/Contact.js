import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='h-[89vh] flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-medium mb-5'>Contact Us: Find Our Office Addresses Below...</h2>
            <div className=' mb-36'>
                <Link className='mr-5 bg-cyan-500 px-8 py-1 rounded text-white font-medium' to={'usa-address'}>US Address</Link>
                <Link className='mr-5 bg-cyan-500 px-8 py-1 rounded text-white font-medium' to={'uk-address'}>UK Address</Link>
                <Link className='mr-5 bg-cyan-500 px-8 py-1 rounded text-white font-medium' to={'bd-address'}>BD Address</Link>
            </div>
            <Outlet />
        </div >
    );
};

export default Contact;