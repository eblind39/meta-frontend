import React, { useEffect, useState } from "react";
import BTCType from "../../types/btc";

const UseEffectIII = () => {
    const [btcData, setBtcData] = useState<BTCType | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchBTC = async () => {
            setError(false);
            setLoading(true);

            try {
                const resp = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
                const data = await resp.json();
                setBtcData(data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchBTC()
            .catch(err => console.error(err));
    }, []);

    return (
        <React.Fragment>
            {
                loading ?
                <span>Loading BTC data...</span> :
                <div className="contruncontr-container">
                    <h1>Current BTC/USD data</h1>
                    <p>Code: {btcData?.bpi.USD.code}</p>
                    <p>Symbol: {btcData?.bpi.USD.symbol}</p>
                    <p>Rate: {btcData?.bpi.USD.rate}</p>
                    <p>Description: {btcData?.bpi.USD.description}</p>
                    <p>Rate Float: {btcData?.bpi.USD.rate_float}</p>
                </div>
            }
            {
                error ?
                <span>Error fetching BTC data</span> :
                <span>BTC data fetched succesfully</span>
            }
        </React.Fragment>
    )
}

export default UseEffectIII;