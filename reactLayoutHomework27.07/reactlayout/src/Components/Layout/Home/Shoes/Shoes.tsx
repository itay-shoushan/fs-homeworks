import "./Shoes.css";

interface MyShoesProps {
    id:number;
    name:string;
    model:string;
    size:number; 
    price:number; 
    img:string; 
}

function Shoes(props: MyShoesProps): JSX.Element {
    return (
        <div className="Shoes Box">
			{props.model}<br/>
			{props.size}<br/>
			{props.price}<br/>
			<img src={props.img}/><br/>
        </div>
        
    );
}

export default Shoes;
