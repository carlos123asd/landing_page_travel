import { IoIosArrowForward } from "react-icons/io";

export default function BtnsMenuNav(){
    return <>
       <div className="btnsMenuNav">
            <div className="contentMenuNav btnsMenuNavActive">
                <IoIosArrowForward 
                size={25} 
                color="#222524" 
                style={{rotate:"180deg"}} />
            </div>
            <div className="contentMenuNav">
                <IoIosArrowForward 
                size={25} 
                color="#222524" />
            </div>
       </div>
    </>
}