import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({childern})=>{

    const [IsAuth, setIsAuth] = useState(null);

    return (
        <AuthContext.Provider value={{
            IsAuth,setIsAuth
        }}>
            {childern}
        </AuthContext.Provider>
    )
}