

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Newhit from './pages/Newhit'
import Register from './pages/Register'
import Hits from './pages/Hits'
import Login from './pages/Login'
import {useState, useEffect} from 'react'


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <>
    <Router>
      <div className="container">
        <Navbar user={user}/>
      </div>  
      <Routes>
        <Route path='/' element={user ? <Home /> : <Register />} />
        <Route path='/new-hit' element={user ? <Newhit /> : <Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hits' element={user ? <Hits /> : <Register />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
      
      </Router>

    </>
    
    

  )
}

export default App;
