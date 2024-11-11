import { createContext, useEffect, useState } from "react"
import userImg from "../../src/assets/profile/default-user.jpg"
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = async(inputs) => {
        const res=await axios.post(import.meta.env.VITE_API_URL+"/api/auth/login",inputs,{
            withCredentials:true,
        })
        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )
}