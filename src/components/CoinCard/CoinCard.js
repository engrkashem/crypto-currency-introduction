import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    const { name, symbol, image, id } = coin
    return (
        <Link to={`/coin-details/${id}`} className='flex items-center justify-between bg-white p-5 rounded-xl drop-shadow-md'>
            < img className='w-16' src={image} alt="" />
            <div className='flex flex-col items-start'>
                <h2 className='font-medium text-lg'>{name}</h2>
                <p className=' text-gray-500'>{symbol}</p>
            </div>
        </Link >
    );
};

export default CoinCard;