import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import MyAppointments from "./pages/MyAppointments";

function App() {
  return (
    <div className="App">
      <div>
        <ToastContainer/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:speciality" element={<Doctors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />         
          <Route path="my-appointments" element={<MyAppointments/>}/>
          <Route path="appointment/:docId" element={<Appointment />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </div>
      <Footer />
      <div></div>       
    </div>
  );
}

export default App;
