import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreatePost from './pages/CreatePost'
import PostDetails from './pages/PostDetails'
import EditPost from './pages/EditPost'
import MyBlogs from './pages/MyBlogs'
import Profile from './pages/Profile'
function App() {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/post/:postId" element={<PostDetails />} />
        <Route exact path="/edit/:postId" element={<EditPost />} />
        <Route exact path="/my-blogs/:postId" element={<MyBlogs />} />
        <Route exact path="/profile/:postId" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
