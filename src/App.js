import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login_Register/Login';
import Register from './Pages/Login_Register/Register';
import Header from './Pages/Shared/Header';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div  className='App max-w-7xl mx-auto '>
      <Header />
      <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/appointment' element={
         <RequireAuth>
            <Appoinment />
         </RequireAuth>}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
