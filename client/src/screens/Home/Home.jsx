import "./Home.css";
import { Link } from "react-router-dom";
import { ImLeaf } from 'react-icons/im';

const Home = (props) => {
  return (
      <div className="home">
      <div className="join-message">
        <p>For the saavy real estate investor <ImLeaf className="message-leaf"/>
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