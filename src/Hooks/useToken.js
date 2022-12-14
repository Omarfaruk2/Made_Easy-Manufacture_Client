import { useEffect, useState } from 'react'

const useToken = user => {

    const [token, setToken] = useState("")

    useEffect(() => {

        const email = user?.user?.email
        const name = user?.user?.displayName
        const currentUser = { email: email }


        console.log(user?.user?.displayName, "Name")

        // }
        if (email) {
            // console.log(currentUser, "currentUser")

            fetch(`https://made-easy-menufacture.onrender.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, "data user inside token")
                    const accessToken = data.token
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken)
                })
        }

        console.log(user, "usertoken inside")
    }, [user])

    return [token]
}

export default useToken