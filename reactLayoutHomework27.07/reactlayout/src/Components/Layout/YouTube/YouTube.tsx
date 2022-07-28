import "./YouTube.css";

function YouTube(): JSX.Element {
  return (
    <div className="YouTube">
      <iframe
        width="550"
        height="350"
        src="https://www.youtube.com/embed/vgyJQ_bzpCY"
        title="Unboxing Every Air Jordan Sneaker"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default YouTube;
