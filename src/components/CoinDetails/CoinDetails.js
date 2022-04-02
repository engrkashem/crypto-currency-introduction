import React from 'react';
import { useParams } from 'react-router-dom';
import useCoinById from '../../hooks/useCoinById';

const CoinDetails = () => {

    const { id } = useParams()
    const [coin] = useCoinById(id);
    const { name, image, coingecko_rank, genesis_date, hashing_algorithm, last_updated, country_origin, coingecko_score, community_score, liquidity_score, public_interest_score } = coin
    // console.log(coin)


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-[89vh] items-center px-32'>
            <div>
                <img src={image?.large} alt="" />
            </div>
            <div>
                <div>
                    <h2 className='text-3xl font-medium mb-3'>General Information:</h2></div>
                <p>Coin Name: {name}</p>
                <p>Market Rank: {coingecko_rank}</p>
                <p>Origin: {country_origin ? country_origin : 'Not Available'}</p>
                <p>Hashing Algorithm: {hashing_algorithm ? hashing_algorithm : 'Not Available'}</p>
                <p>Genesis Date: {genesis_date}</p>
                <p>Last Update: {last_updated}</p>
                <div className='mt-10'>
                    <h2 className='text-3xl font-medium mb-3'>Scores:</h2>
                    <p>Community Score: {community_score}</p>
                    <p>Coin Gecko Score: {coingecko_score}</p>
                    <p>Liquidity Score: {liquidity_score}</p>
                    <p>Public Interest Score: {public_interest_score}</p>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;