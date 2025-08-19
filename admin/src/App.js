import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointmens from './pages/Doctor/DoctorAppointmens';
import DoctorProfile from './pages/Doctor/DoctorProfile';

function App() {

  const {atoken} = useContext(AdminContext)
  const {dtoken} = useContext(DoctorContext)

  return atoken || dtoken ? (
    <div className="App">
     <ToastContainer/>
     <NavBar/>
     <div style={{display:"flex", alignItems:"start",backgroundColor:"rgba(235, 242, 241, 1)"}}>
     <SideBar/>
     <Routes>
      {/* Admin route */}
      <Route path='/' element={<></>}/>
      <Route path='/admin-dashboard' element={<Dashboard/>}/>
      <Route path='/all-appointments' element={<AllAppointments/>}/>
      <Route path='/add-doctor' element={<AddDoctor/>}/>
      <Route path='/doctors-list' element={<DoctorsList/>}/>
      {/* Doctor route */}
      <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
      <Route path='/doctor-appointments' element={<DoctorAppointmens/>}/>
      <Route path='/doctor-profile' element={<DoctorProfile/>}/>
     </Routes>
      </div>
    </div>
  ) 
  :(
  <>

        <Login/>
      <ToastContainer/>
  
  
  </>);
}

export default App;
