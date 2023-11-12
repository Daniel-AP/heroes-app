import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { Dc, Hero, Marvel, Search } from '../pages';

export const HeroesRouter = () => {
  return (
    <>
        <Navbar/>

        <div className="container pt-4 pb-5">
            <Routes>
                <Route path='marvel' element={ <Marvel/> }/>
                <Route path='dc' element={ <Dc/> }/>
                <Route path='search' element={ <Search/> }/>
                <Route path='hero/:id' element={ <Hero/> }/>

                <Route path='/' element={ <Navigate to='marvel'/> }/>
                <Route path='/*' element={ <Navigate to='marvel'/> }/>
            </Routes>
        </div>

    </>
  )
}
