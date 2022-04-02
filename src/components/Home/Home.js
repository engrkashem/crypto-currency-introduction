import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowSmRightIcon } from '@heroicons/react/solid'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='h-[89vh] flex flex-col items-center justify-center'>
            <h1 className='text-teal-900 text-5xl'>Welcome to <span className='text-6xl text-cyan-900'>CRYPTO BISTRO</span></h1>
            <div className=''>
                <button onClick={() => navigate('/coins')} className='mt-10 text-lg font-medium text-white bg-cyan-600 px-6 py-2 rounded-lg flex items-center'>Explore Coins
                    <ArrowSmRightIcon className='w-6 h-6 ml-1' />
                </button>
            </div>
        </div>
    );
};

export default Home;