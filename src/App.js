import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import Navber from './Components/Home/Navber'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import Footer from './Components/Share/Footer'
import Orderitems from './Components/OrderItems/Orderitems'
import RequireAuth from './Components/Share/RequireAuth'
import Myprofile from './Components/Dashboard/Myprofile'
import Addreview from './Components/Dashboard/Addreview'
import Myorder from './Components/Dashboard/Myorder'
import AllOrder from './Components/Dashboard/AllOrder'
import AddItems from './Components/Dashboard/AddItems'
import Alluser from './Components/Dashboard/Alluser'
import RequireAdmin from './Components/Share/RequireAdmin'
import Payment from './Components/Dashboard/Payment'
// import AssigmetTask from './Components/Home/AssigmetTask'
// https://made-easy-secound.web.app/
// https://meet.google.com/aya-khtg-pwe
// ..
AOS.init()

const App = () => {

  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />


        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Myprofile />}></Route>
          <Route path='addreview' element={<Addreview />}></Route>
          <Route path='order' element={<Myorder />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>

          <Route path='allOrder' element={<RequireAdmin><AllOrder /></RequireAdmin>}></Route>
          <Route path='additem' element={<RequireAdmin><AddItems /></RequireAdmin>}></Route>
          <Route path='alluser' element={<RequireAdmin><Alluser /></RequireAdmin>}></Route>

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/order/:id" element={
          <RequireAuth>
            <Orderitems />
          </RequireAuth>
        } />

      </Routes>
      <Footer />
    </div >
  )
}

export default App