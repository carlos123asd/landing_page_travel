import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useMenu } from "../../context/MenuContext";

export default function BtnsMenuNav(){
    const menu = ["machu picchu","london","singapore","bali"];
    const {setMenuActive} = useMenu();
    const [index,setIndex] = useState<number>(0)

    const handleNext = () =>{
        if(index != 3){
            setIndex((prevNumber) =>{
                const numActual = prevNumber + 1
                setMenuActive(menu[numActual])
                return numActual
            })
        }
    }
    const handleBack = () => {
        if(index !== 0){
            setIndex((prevNumber) =>{
                const numActual = prevNumber - 1
                setMenuActive(menu[numActual])
                return numActual
            })
        }
    }
    return <>
       <div className="btnsMenuNav">
            <div onClick={handleBack} className={`contentMenuNav ${index === 0 ? 'btnsMenuNavActive' : ''}`}>
                <IoIosArrowForward 
                size={25} 
                color="#222524" 
                style={{rotate:"180deg"}} />
            </div>
            <div onClick={handleNext} className={`contentMenuNav ${index === 3 ? 'btnsMenuNavActive' : ''}`}>
                <IoIosArrowForward 
                size={25} 
                color="#222524" />
            </div>
       </div>
    </>
}