import "./Footer.css"
import { CgCopyright } from 'react-icons/cg'

function Footer(props) {
  return (
    <div className="footer">
        <div className="footer-links">
          <a className='git-icons' href="https://github.com/tiffanybibby" target="blank"> <img className="github-img" src="https://github.com/tiffanybibby/acrebound/blob/main/assets/github_logo.png?raw=true" alt='github icon' /> </a>
        <p> <CgCopyright/> Tiffany D. Bibby - 2021</p>
          <a className='linkedin' href="https://www.linkedin.com/in/tiffanybibby" target="blank"> <img className="linkedin-img" src="https://github.com/tiffanybibby/acrebound/blob/main/assets/linkedin_logo.png?raw=true" alt='linkedin icon' /> </a>
        </div>
    </div>
  );
}

export default Footer; 