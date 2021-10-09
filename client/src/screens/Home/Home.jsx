import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
      <div className="home">
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/register'>Register</Link>
      </div>
  );
};

export default Home