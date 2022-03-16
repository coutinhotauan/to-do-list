import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){

    const [userData, setUserData] = useState(null);

    useEffect(() => {

    }, []);

    return(
        <AuthContext.Provider value={{
            userData,
            setUserData,
        }}>
            {children}
        </AuthContext.Provider>
    );

}

