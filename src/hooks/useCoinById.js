import { useEffect, useState } from "react"

const useCoinById = id => {

    const [coin, setCoin] = useState({});

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])

    return [coin, setCoin];
};

export default useCoinById;