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
import NotFound from './Components/NotFound';
import Purchase from './Components/Purchase';
import Portfolio from './Components/Portfolio';
import ManageAllOrders from './Components/Authentication/ManageAllOrders';
import AddaProduct from './Components/Authentication/AddaProduct';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/tools/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/Dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='AddaReview' element={<AddaReview></AddaReview>}></Route>
          <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path="allorders" element={<ManageAllOrders />} />
          <Route path="addaproduct" element={<AddaProduct />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
