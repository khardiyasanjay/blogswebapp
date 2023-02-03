import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from "./pages/Blogs";
import Error from './pages/Error';
import Posts from "./pages/Posts";
import Post from "./pages/Post";

import { AuthProvider } from "./context/AuthProvider";

import Profile from "./login&register/Profile";
import Login from "./login&register/Login";
import Register from "./login&register/Register";
import AddStory from "./addPost/AddStory";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="blogs" element={<Blogs/>}/>
          <Route path='blogs/:postId' element={<Post />}/> */}
          <Route path="blogs" element={<Blogs/>}>
            <Route path="" element={<Posts/>}/>
            <Route path=":pmtr" element={<Post/>}/>
          </Route>
          
          <Route path="contact" element={<Contact />} />

          <Route path="addStory" element={<AddStory />} />

          {/* <Route path="profile" element={<Profile />} >
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register/>}/>
          </Route> */}

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);