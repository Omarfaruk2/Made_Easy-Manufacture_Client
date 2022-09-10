import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Loadding from '../Components/Share/Loadding'
import auth from '../firebase.init'

const useAlluser = () => {
    const navigate = useNavigate()
    const [, loading,] = useAuthState(auth)

    const { isLoading, error, data: alluser, refetch } = useQuery(['alluserdata'], () =>
        fetch('https://cryptic-badlands-38526.herokuapp.com/user', {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            // console.log("res", res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem("accessToken")
                // navigate("/")
            }
            return res.json()
        }
        )
    )

    if (isLoading || loading) {
        return <Loadding />
    }
    if (error) {
        return <p>{error.massage}</p>
    }
    refetch()

    console.log(alluser, "alluser hook")

    return (
        <div>

        </div>
    )
}

export default useAlluser