import React from 'react';
import useCoins from '../../hooks/useCoins';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {

    const [coins, setCoins] = useCoins();
    console.log(coins)

    return (
        <div className='text-center py-10'>
            <h2 className='text-5xl font-medium'>Crypto Currencies</h2>
            <h6 className='text-lg mt-1 text-gray-500 font-medium'>Max Coins: </h6>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 mt-20 px-10'>
                {
                    coins.map(coin => <CoinCard
                        key={coin.id}
                        coin={coin}
                    ></CoinCard>)
                }
            </div>
        </div>
    );
};

export default Coins;