import CardsList from "../common-components/cards-list/CardsList";
import "./style.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">EXPLORE YOUR NEXT MOVIES AND TV SHOWS</h1>

      <CardsList />
    </div>
  );
};

export default Homepage;
