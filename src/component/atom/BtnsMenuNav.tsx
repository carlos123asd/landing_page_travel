import { IoIosArrowForward } from "react-icons/io";
import useMenu from "../../hooks/useMenu";

export default function BtnsMenuNav(){
    const {handleBack,handleNext,index} = useMenu();
    
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