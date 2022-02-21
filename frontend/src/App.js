

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Newhit from './pages/Newhit'
import Hits from './pages/Hits'
import Login from './pages/Login'
import useGetUser from './context/User'


function App() {

  const user = useGetUser()
console.log(user)
  return (
    <>
    <Router>
      <div className="container">
        <Navbar user={user}/>
      </div>  
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/new-hit' element={user ? <Newhit /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hits' element={user ? <Hits /> : <Login />} />
        <Route path='/register' element={ <Login />} />
      </Routes>
      
      </Router>
      <ToastContainer />
    </>
    
    

  )
}

export default App;
