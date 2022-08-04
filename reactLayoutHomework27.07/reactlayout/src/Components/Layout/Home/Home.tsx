import RandomProduct from "../RandomProduct/RandomProduct";
import YouTube from "../YouTube/YouTube";
import "./Home.css";
import Shoes from "./Shoes/Shoes";

function Home(): JSX.Element {
  const shoesArr = [
    {
      id: 1,
      name: "Nike Air Force 1 LV8",
      model: "Nike",
      size: 32,
      price: 250,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3b294113-072f-4596-8d86-ba8d34bbca6b/air-force-1-lv8-older-shoes-VBktD5.png",
    },
    {
      id: 2,
      name: "Nike Air Force 1 '07",
      model: "Nike",
      size: 35,
      price: 270,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoe-rWtqPn.png",
    },
    {
      id: 3,
      name: "Nike Air Force 1 '07A",
      model: "Nike",
      size: 38,
      price: 280,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/85e71d88-5d01-4800-bd38-caa846d115e6/air-force-1-07-shoes-F7CfCD.png",
    },
    {
      id: 4,
      name: "Nike Air Force 1 LE",
      model: "Nike",
      size: 40,
      price: 300,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ebad848a-13b1-46d5-a85e-49b4b6a4953c/air-force-1-le-older-shoe-sCkTz9.png",
    },
    {
      id: 5,
      name: "Nike Air Force 1 Fontanka",
      model: "Nike",
      size: 45,
      price: 700,
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cd0aca39-202a-441f-8ec2-c5b6cb1259dd/air-force-1-fontanka-shoes-ZMBDwC.png",
    },
  ];

  let today = new Date();
  let date = today.getDay();

  return (
    <div className="Home">
      <p id="saleParagraph">
        {date == 0 || date == 1
          ? "Sale 50% discount just in sunday and monday!"
          : null}
      </p>
      <section>
        <YouTube />
      </section>
      <section>
        <RandomProduct/>
      </section>
      <div>
        <ul>
          {shoesArr.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Shoes
          model="Nike"
          price={200}
          size={30}
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cd0aca39-202a-441f-8ec2-c5b6cb1259dd/air-force-1-fontanka-shoes-ZMBDwC.png"
          key={1111}
          id={0}
          name={"aaallaalla"}
        />
      </div>

      {shoesArr.map((item) => (
        <Shoes
          id={item.id}
          name={item.name}
          model={item.model}
          size={item.size}
          price={item.price}
          img={item.img}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Home;
