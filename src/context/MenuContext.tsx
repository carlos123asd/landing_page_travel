import { createContext, useContext, useState } from "react";

type typeMenuContext = {
    menuActive: string;
    setMenuActive: (menu:string) => void
}

const Context = createContext<typeMenuContext|undefined>(undefined);

export const MenuProvider = ({children}:{children:React.ReactNode}) => {
    const [menuActive,setMenuActive] = useState("machu picchu");
    return (
        <Context.Provider value={{menuActive,setMenuActive}}>
            {children}
        </Context.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(Context)
    if (!context) throw new Error("useMenu must be used whitin a MenuProvider")
    return context
}