import React, {useEffect} from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './container/home/Home';
import { FetchUser } from './utils/FetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = FetchUser();
    
    if(!user) navigate('/login');
  }, [])

  return (
   <Routes>
     <Route path='login' element={<Login />} />
     <Route path='/*' element={<Home />} />
   </Routes>
  );
}

export default App;
