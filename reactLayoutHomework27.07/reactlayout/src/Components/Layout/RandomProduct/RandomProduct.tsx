import { useEffect, useState } from "react";
import "./RandomProduct.css";

function RandomProduct(): JSX.Element {

    const randomProductArray =["Shoe 1", "Shoe 2", "Shoe 3", "Shoe 4", "Shoe 5"];
    
    const [rndproduct, setrndom] = useState("");

    useEffect(() => {
        setInterval(() => {
            setrndom(randomProductArray[Math.floor(Math.random() * randomProductArray.length)])
        }, 1000);
    }, []);

    return (
        <div className="RandomProduct">
			<span>{rndproduct}</span>
        </div>
    );
}

export default RandomProduct;
