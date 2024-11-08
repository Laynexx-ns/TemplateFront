import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

interface User {
    access:{
        token: string
        expires?: string
    },
    refresh:{
        token: string
        expires?: string
    }

}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<{
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isTokenExpired: (expiresAt: string) => boolean;
    needRelogin: boolean;
    setNeedRelogin: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    user: null,
    setUser: () => {},
    isTokenExpired: () => false,
    needRelogin: false,
    setNeedRelogin: () => {},
});


export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [needRelogin, setNeedRelogin] = useState(false);

    function isTokenExpired(expiresAt?: string): boolean{
        return new Date(expiresAt || 0).getTime() <= Date.now();
    }

    useEffect(() => {
        const checkTokenExpiration = () => {
            if (user && isTokenExpired(user.refresh.expires)) {
                setNeedRelogin(prev => {
                    console.log('Setting needRelogin to true');
                    return true;
                });
            }
        }
        const intervalId = setInterval(checkTokenExpiration, 1000)
        return () => clearInterval(intervalId)
    }, [user, isTokenExpired]);

    const contextValue = useMemo(() => ({
        user,
        setUser,
        needRelogin,
        setNeedRelogin,
        isTokenExpired
    }), [user, needRelogin]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    console.log(context)
    return context;
};
