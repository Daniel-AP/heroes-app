import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login'
import { HeroesRouter } from '../heroes/routes/HeroesRouter'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={ 
                <PublicRoutes>
                    <Login/>
                </PublicRoutes>
             }></Route>
            <Route path='/*' element={ 
                <PrivateRoutes>
                    <HeroesRouter/>
                </PrivateRoutes> }>
            </Route>
        </Routes>
    </>
    
  )
}
