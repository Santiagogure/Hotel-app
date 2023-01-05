import React from 'react'

import { Routes, Route } from 'react-router-dom'
import DataProvider from '../context/dataProvider';
import { Home } from '../pages/Home';
import { RoomDetails } from '../pages/RoomDetails';
import Footer from './Footer';
import Header from './Header';

export const AppRoute = () => {
  return (
    <div>
        <Header/>
        <DataProvider> 
        <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/room/:id' element={<RoomDetails/>}></Route>
        </Routes>
        </DataProvider> 
        <Footer/>
    </div>
  )
}
