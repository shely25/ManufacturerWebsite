import './App.css';
import Home from './Components/Homepage/Home';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './Components/Authentication/LogIn';
import Register from './Components/Authentication/Register';
import Navber from './Components/Homepage/Navber'
import Blogs from './Components/Blogs';
import MyProfile from './Components/MyProfile';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard/Dashboard';
import RequireAuth from './Components/RequireAuth';
import AddaReview from './Components/Dashboard/AddaReview';
import MyOrders from './Components/Dashboard/MyOrders';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='AddaReview' element={<AddaReview></AddaReview>}></Route>
          <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
