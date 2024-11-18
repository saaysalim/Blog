import { Link } from "react-router-dom"
import Logo from './logo.png';
import SalimSaay from './SalimSaay.jpg';
import './Header.css'
const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
          <div className='navbar-logo'>
            <div className='logo-container'>
              <img src={Logo} alt="Logo" />
              <img src={SalimSaay} alt='Logo'/>
            </div>
            <li><Link to="/">Home</Link></li>
             <li><Link to="post">Post</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="VideoGallery">VideoGallery</Link></li>
            <li><Link to="Education">Education</Link></li>
          </div>
        </ul>
      </nav>
        </header>
        
    )
    
}

export default Header