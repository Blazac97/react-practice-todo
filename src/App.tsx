import React from 'react';
import {Navbar} from './components/Navbar'
import {BrowserRouter, Routes  ,Route} from 'react-router-dom'
import { ToDospage } from './pages/ToDospage';
import { AboutPage } from './pages/Aboutpage';

const App: React.FC = ()=>{
  return(
    <BrowserRouter>
<Navbar />
<div className="container">
  <Routes>
    <Route element={<ToDospage/>} path="/"/>
    <Route element={<AboutPage/>} path="/about"/>
  </Routes>
</div>
    </BrowserRouter>
  )
}
export default App