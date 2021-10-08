import React from "react";

function Footer(props) {
  return (
    <div className="footer">
        <div className="footer-links">
          <a className='git-icons' href="https://github.com/tiffanybibby" target="blank"> <img className="github-img" src="https://i.imgur.com/BV4cUGx.png" alt='github icon' /> </a>
        <p> &copy; Tiffany D. Bibby - 2021</p>
          <a className='linkedin' href="https://www.linkedin.com/in/tiffanybibby" target="blank"> <img className="linkedin-img" src="https://i.imgur.com/qdfrRWbs.png" alt='linkedin icon' /> </a>
        </div>
    </div>
  );
}

export default Footer;