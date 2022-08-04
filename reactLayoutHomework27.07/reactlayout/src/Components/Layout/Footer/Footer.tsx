import { useEffect, useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {

const [timeNow, renderTime] = useState("");

useEffect(() => {
    setInterval(() => {
        renderTime(new Date().toLocaleTimeString())
    }, 1000);
}, []);

    return (
        <div className="Footer">
			<div>All rights reserverd | {new Date().getFullYear()} | Time now: {timeNow}</div>
        </div>
    );
}

export default Footer;
