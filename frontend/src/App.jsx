import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import UserLogout from './pages/UserLogout'
import Start from './pages/Start';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
const App = () => {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/user-signup' element={<UserSignUp/>}/>
        <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>}/>
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}/>
        <Route path='/users/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
