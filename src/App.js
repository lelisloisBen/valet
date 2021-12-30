import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import Loading from './js/components/Loading/Loading';

const NotFound = lazy(() => import('./js/views/NotFound/NotFound'));
const Home = lazy(() => import('./js/views/Home/Home'));
const Login = lazy(() => import('./js/views/Login/Login'));

function App() {

  const [backen_url] = useState('https://valetapp-backend.herokuapp.com/');
  const [Auth, setAuth] = useState(null);
  
  // let tokenAuth = localStorage.getItem('token');
  // let userId = localStorage.getItem('userID');
  // let userEmail = localStorage.getItem('email');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const providerValue = useMemo(() => ({ 
      backen_url,
      Auth, 
      setAuth, 
      windowHeight
    }), [
      backen_url,
      Auth, 
      setAuth, 
      windowHeight
    ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<Loading/>}>
            <section style={{minHeight: windowHeight}}>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route render={() => <NotFound/>} />
              </Routes>
            </section>
        </Suspense>
      </UserContext.Provider>
    </Router> 
  );
}

export default App;
