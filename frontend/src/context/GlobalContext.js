import { useState, createContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
    const [cartOpen, setCartOpen] = useState(false);
    const [currentCart, setCurrentCart] = useState();
    const [currentNotify, setCurrentNotify] = useState();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        if (currentUser) {
            fetch(`/api/carts/${currentUser}`)
                .then((response) => response.json())
                .then((value) => {
                    setCurrentCart(value);
                })
                .catch((error) => {
                    console.log(error);
                });

            fetch(`/api/notifications/${currentUser}`)
                .then((response) => response.json())
                .then((value) => {
                    setCurrentNotify(value);
                })
                .catch((error) => {
                    console.log(error);
                });

            fetch(`/api/users/info/${currentUser}`)
                .then((response) => response.json())
                .then((value) => setUserInfo(value))
                .catch((error) => console.log(error));
        }
    }, [currentUser]);

    return (
        <GlobalContext.Provider
            value={{
                cartOpen,
                setCartOpen,
                currentUser,
                setCurrentUser,
                currentCart,
                setCurrentCart,
                currentNotify,
                setCurrentNotify,
                userInfo,
                setUserInfo,
            }}
        >
            {children}{' '}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
