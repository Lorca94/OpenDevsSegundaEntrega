import React, { useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email:string, password:string) => {}
});

export default AuthContext;

export const AuthContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler,
        }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}