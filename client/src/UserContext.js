import {createContext, useEffect, useState} from "react"

export const UserContext=createContext(null);

const findLogInFromSessionStorage=()=> {
    const getStorage=sessionStorage.getItem("login");
    if(getStorage===null) {
        return null
        }else {
        //parse my stringify object 
        return JSON.parse(getStorage)
     }
}

export const UserProvider = ({childreen}) => {
        const [myUser, setMyUser]=useState(findLogInFromSessionStorage());

        useEffect(()=> {
            sessionStorage.setItem("login",JSON.stringify(myUser))
        }, [myUser])


        return (
            <UserContext.Provider value={{myUser, setMyUser}}>
                {childreen}
            </UserContext.Provider>
        )
};