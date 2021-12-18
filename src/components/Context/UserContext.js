import React, { useEffect, useState } from "react"
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../Firebase/Config"

export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const [logged, setLogged] = useState(false);

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        })
    }
    const logout = () => {
        signOut(auth).then(()=>{
            alert("Cerraste Sesion....")
        })
        .catch ((error) => {
            alert(error.message)
        })
    }

    useEffect (
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                    setLogged(true);
                } else {
                    setLogged(false)
                }
            });

        },
        []
    )

return (
    <UserContext.Provider value={{
        user, logged, login, logout
    }}>
        {children}
        </UserContext.Provider>
)

}

