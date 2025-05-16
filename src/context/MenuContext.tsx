import { createContext, useState } from "react";

type typeMenuContext = {
    menuActive: string;
    setMenuActive: (menu:string) => void;
    menu:string[];
    setAdelante: (state:boolean) => void;
    adelante:boolean;
}

export const Context = createContext<typeMenuContext|undefined>(undefined);

export const MenuProvider = ({children}:{children:React.ReactNode}) => {
    const [menuActive,setMenuActive] = useState<string>("cape town");
    const [adelante,setAdelante] = useState<boolean>(false);
    const menu = ["cape town","london","singapore","bali"];
    return (
        <Context.Provider value={{menuActive,setMenuActive,menu,setAdelante,adelante}}>
            {children}
        </Context.Provider>
    );
}