import { createContext, useContext, useState } from "react";

type typeMenuContext = {
    menuActive: string;
    setMenuActive: (menu:string) => void;
    menu:string[];
    setAdelante: (state:boolean) => void;
    adelante:boolean;
}

const Context = createContext<typeMenuContext|undefined>(undefined);

export const MenuProvider = ({children}:{children:React.ReactNode}) => {
    const [menuActive,setMenuActive] = useState<string>("machu picchu");
    const [adelante,setAdelante] = useState<boolean>(false);
    const menu = ["machu picchu","london","singapore","bali"];
    return (
        <Context.Provider value={{menuActive,setMenuActive,menu,setAdelante,adelante}}>
            {children}
        </Context.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(Context)
    if (!context) throw new Error("useMenu must be used whitin a MenuProvider")
    return context
}