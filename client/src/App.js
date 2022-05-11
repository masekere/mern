import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Profile from './pages/profile/profile';
import Learning from './pages/learning/learning';
import './App.css';
import Header from './Components/header/header';

function App() {
  onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      console.log("yes");
    } else console.log("no");
  }
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard /> } />
          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<Register /> } />
          <Route path='/profile' element={<Profile /> } />
          <Route path='/learning' element={<Learning /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;