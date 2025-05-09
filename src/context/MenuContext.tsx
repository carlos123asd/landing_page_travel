import { createContext, useContext, useState } from "react";

type typeMenuContext = {
    menuActive: string;
    setMenuActive: (menu:string) => void;
    menu:string[];
}

const Context = createContext<typeMenuContext|undefined>(undefined);

export const MenuProvider = ({children}:{children:React.ReactNode}) => {
    const [menuActive,setMenuActive] = useState("machu picchu");
    const menu = ["machu picchu","london","singapore","bali"];
    return (
        <Context.Provider value={{menuActive,setMenuActive,menu}}>
            {children}
        </Context.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(Context)
    if (!context) throw new Error("useMenu must be used whitin a MenuProvider")
    return context
}