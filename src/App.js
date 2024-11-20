import { HashRouter as Router } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Footer from './components/Footer';
import Education from './components/Education'
import Gallery from './components/Gallery'
import VideoGallery from'./components/VideoGallery'
import Contact from'./components/Contact'
import Project from'./components/Project'
import Logo from './components/logo.png';
import SalimSaay from './components/SalimSaay.jpg';
import { Link } from 'react-router-dom';

import './App.css'
function App() {
  return (
    <>
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
            <li><Link to="VideoGallery">VideoGallery</Link></li>
            <li><Link to="Education">Education</Link></li>
          </div>
        </ul>
      </nav>
        </header>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
      <Route path="/About"element={<About/>} />
      <Route path="/Footr"element={<Footer/>} />
        <Route path="/Project"element={<Project/>} />
        <Route path="/Contact"element={<Contact/>} />
        <Route path="/Gallery"element={<Gallery/>}/>
        <Route path="/VideoGallery"element={<VideoGallery/>}/>
        <Route path="/Education"element={<Education/>}/>
      </Routes>
<div>
         <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>
      </div>
      </>
  );
}
export default App;
