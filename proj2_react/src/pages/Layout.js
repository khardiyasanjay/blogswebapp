import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
      <ul className="navul">
        <li><Link to="/" id="navlink">Home</Link></li>
        <li><Link to="/blogs" id="navlink">Blogs</Link></li>
        <li><Link to="/contact" id="navlink">Contact Me</Link></li>
        <li id="rightLogin"><Link to="/addStory" id="navlink">AddStory</Link></li>

        {/* <li id="rightLogin"><Link to="/profile" id="navlink" >Profile</Link></li> */}
        {/* style={{float:"right", paddingRight:"2%"}} */}
      </ul>

      <Outlet />
    </>
  )
};

export default Layout;