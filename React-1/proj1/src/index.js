import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



//import pages
import Home from './pages/Home'
import MasterPage from './pages/MasterPage';
import Aboutus from './pages/Aboutus';

const router =
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MasterPage item={<Home />} />}/>
            <Route path='/about' element={<MasterPage item={<Aboutus />} />}/>
        </Routes>
    </BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( router );
