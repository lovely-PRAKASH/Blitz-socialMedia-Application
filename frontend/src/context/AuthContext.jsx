import { createContext, useEffect, useState } from "react"
import userImg from "../../src/assets/profile/default-user.jpg"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Lovely Prakash",
            profilePic: "../../src/assets/profile/default-user.jpg"
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
}