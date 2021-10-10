import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
      <div className="home">
      <div className="join-message">
        <p>For the saavy real estate investor. 
          <br />
          <br/>
Keep track of your properties with AcreBound</p>
      <br></br>
      <Link to='/register'><button className="register-btn">Register</button></Link>
        </div>
      </div>
  );
};

export default Home