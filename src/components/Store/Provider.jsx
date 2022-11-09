import React from "react";
import { Context } from "react";
import useStorage from 'utils/useStorage';


const StoreProvider = () => {

    const[token, setToken] = useStorage('token');


    return(

        <Context.provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.provider>



    )



}