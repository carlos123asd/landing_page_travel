import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/MenuContext";

export default function useMenu(){
    const context = useContext(Context);
    if (!context) throw new Error("useMenu must be used whitin a MenuProvider")
    
    const [translate,setTranslate] = useState<string>()
    const [index,setIndex] = useState<number>(context.menu.findIndex((titulo:string) => titulo === context.menuActive))
    const refNumber = useRef(2)

    useEffect(() => {
        if(context.adelante){
            refNumber.current = refNumber.current + 1;
            if(context.menuActive === "london"){
                //refNumber.current = refNumber.current + 1;
                setTranslate(String(refNumber.current * -280))
            }else if(context.menuActive === "singapore"){
                //refNumber.current = refNumber.current + 1;
                setTranslate(String(refNumber.current * -330))
            }else if(context.menuActive === "bali"){
                //refNumber.current = refNumber.current + 1;
                setTranslate(String(refNumber.current * -380))
            }
            
        }else{
            refNumber.current = refNumber.current - 1;
            if(context.menuActive === "cape town"){
                setTranslate(String(refNumber.current * -0))
            }else if(context.menuActive === "london"){
                setTranslate(String(refNumber.current * -270))
            }else if(context.menuActive === "singapore"){
                setTranslate(String(refNumber.current * -330))
            }
        }
    },[context.menuActive,context.adelante])

    const handleNext = () =>{
        if(index != 3){
            setIndex((prevNumber) =>{
                const numActual = prevNumber + 1
                context.setMenuActive(context.menu[numActual])
                context.setAdelante(true)
                return numActual
            })
        }
    }
    const handleBack = () => {
        if(index !== 0){
            setIndex((prevNumber) =>{
                const numActual = prevNumber - 1
                context.setMenuActive(context.menu[numActual])
                context.setAdelante(false)
                return numActual
            })
        }
    }

    return {context,translate,handleNext,handleBack,index};
} 