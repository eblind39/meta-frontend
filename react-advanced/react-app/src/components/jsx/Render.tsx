import { JSX, useEffect, useState } from "react";

interface DataFetcherProps {
    render: (data: any) => JSX.Element;
    url: string;    
}

const DataFetcher = ({ render, url }: DataFetcherProps) => {
    const [data, setData] = useState<Array<string>>([]);

    useEffect(() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownie"]);
        } else {
            setData(["water", "soda", "juice"]);
        }
    }, []);

    return render(data);
}

const DessertCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/desserts"
            render={(data: Array<string>) => <p>{data.length} desserts</p>} />
    )
}

const DrinksCount = () => {
    return (
        <DataFetcher
            url="https://littlelemon/drinks"
            render={(data: Array<string>) => <h3>{data.length} drinks</h3>} />
    )
}

const Render = () => {
    return (
        <div className="contruncontr-container">
            <header className="header">Little Lemon Restaurant 🍕</header>
            <DessertCount />
            <DrinksCount />
        </div>
    )
}

export default Render;