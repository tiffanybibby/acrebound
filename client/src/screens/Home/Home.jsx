import "./Home.css";
import { Link } from "react-router-dom";
import { ImLeaf } from 'react-icons/im';

const Home = (props) => {
  return (
    <>
      <header></header>
      <div className="home">
        <div className="house" >
          <img className="house-gif" src="https://github.com/tiffanybibby/acrebound/blob/main/assets/house.gif?raw=true" alt="house gif" />


        </div>
        <div className="join-message">
          <div className="message">
            <p>Experience a fresh way to manage your<br />
              <span className="emphasis">real estate</span><br /><br />
              <span className="emphasis2">AcreBound <ImLeaf className="message-leaf" /></span> </p>
            <br />
            <Link to='/register'><button className="register-btn">Sign up for AcreBound</button></Link>
            <p className="subtext">Reach your goals with personalized insights,<br />
              organize assets in one secure central hub, <br />
              increase efficiency & mitigate risk</p>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default Home