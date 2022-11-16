import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import View from './pages/View';
import Update from './pages/Update';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element = {<Login />} />
        <Route path='/Register' element = {<Register />} />
        <Route path='/Create' element = {<Create />} />
        <Route path='/View' element = {<View />} />
        <Route path='/Update' element = {<Update />} />
        <Route path="/Home" element = {<Home /> } />
        <Route path="/" element = {<Home /> } />
        <Route path="*" element = {<p> ingreese bien ruta </p>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App
