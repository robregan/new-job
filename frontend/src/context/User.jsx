import {useEffect, useState} from 'react'
import { toast} from 'react-toastify'

const useGetUser = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
      const getUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/auth/login/success", {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })

            if (res.status === 200) {
              const data = await res.json()
              setUser(data.user)
            }
            else {
              toast.error("authentication has been failed!")
              throw new Error("authentication has been failed!");
            }
        } catch (e) {
          toast.error(e)
        }
      }

      getUser()
    }, [])

    return user
}

export default useGetUser