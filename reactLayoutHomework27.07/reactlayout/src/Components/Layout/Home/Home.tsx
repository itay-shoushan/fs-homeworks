import YouTube from "../YouTube/YouTube";
import "./Home.css";

var today = new Date();
var date = today.getDay();

function Home(): JSX.Element {
  return (
    <div className="Home">
      <p id="saleParagraph">{date == 0 || date == 1? "Sale 50% discount just in sunday and monday!": null}</p>
      <section>
        <YouTube />
      </section>
    </div>
  );
}

export default Home;
