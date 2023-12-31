import React from 'react'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom"



const App = () => {
  return (
    <>

<BrowserRouter>
<Routes>
<Route path='/' element={<Home/> }/>
<Route path='/profile' element={<Profile/>} />
<Route path='/login' element={  <Login/> } />
<Route path='/register' element={<Register/>  } />

</Routes>
</BrowserRouter>
</>
  )
}

export default App