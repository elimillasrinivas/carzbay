import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/header"
import Home from "./components/Home/home"
import Blogs from "./components/Blogs/blogs"
import Insurance from "./components/Insurance/insurance"

import Login from "./pages/login/login"
import Footer from "./pages/Footer/footer"
import UserProfile from "./pages/user/UserProfile"
import AdminDashboard from "./pages/admin/AdminDashboard"
import ServicesForm from "./pages/services-data/ServicesForm"

function App() {


  return (
    <> 
       <BrowserRouter>
        {/* <Header/> */}
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/blogs" element={<Blogs/>}/>
             <Route path="/insurance" element={<Insurance/>}/>
             <Route path="/user/dashboard" element={<UserProfile/>}/>
             <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
             <Route path="/admin/data-entry" element={<ServicesForm/>}/>
          </Routes>
        {/* <Footer/> */}
       </BrowserRouter>
        
        
    </>
  )
}

export default App
