import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context'

export const PublicRoutes = ({children}) => {
    
    const { authenticated } = useContext(AuthContext);

    return authenticated.logged
            ?
            <Navigate to="/"/>
            :
            children

}
