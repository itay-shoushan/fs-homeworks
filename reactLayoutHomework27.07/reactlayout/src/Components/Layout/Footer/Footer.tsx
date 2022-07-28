import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>All rights reserverd | {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
