import React, { useState } from 'react';
import useCoins from '../../hooks/useCoins';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';

const Coins = () => {
    const [loading, setLoading] = useState(false)

    // setLoading(true)
    const [coins] = useCoins();
    // setLoading(false)
    // console.log(coins)

    return (
        <>
            {
                loading ? <Spinner /> :
                    <div className='text-center py-10'>
                        <h2 className='text-5xl font-medium'>Crypto Currencies</h2>
                        <h6 className='text-lg mt-1 text-gray-500 font-medium'>Max Coins: {coins.length}</h6>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20 px-10'>
                            {
                                coins.map(coin => <CoinCard
                                    key={coin.id}
                                    coin={coin}
                                ></CoinCard>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Coins;