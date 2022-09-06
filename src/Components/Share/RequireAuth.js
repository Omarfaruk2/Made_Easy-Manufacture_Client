import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Navigate, useLocation } from "react-router-dom"
import Loadding from './Loadding'

const RequireAuth = ({ children }) => {

    const [user, loading,] = useAuthState(auth)

    let location = useLocation()


    if (loading) {
        return <Loadding />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children
}



export default RequireAuth