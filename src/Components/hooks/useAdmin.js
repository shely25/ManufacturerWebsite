import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function useAdmin() {
    const [user] = useAuthState(auth)
    const [data, setData] = useState({})
    let isAdmin = 0

    useEffect(() => {
        fetch(`http://localhost:5000/profile/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    if (data.role) {
        return isAdmin = 1
    }
    else {
        return isAdmin
    }

}
export default useAdmin
