import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function ModalPhoto({show,close,imagen}:{show:boolean,close:(state:boolean)=>void,imagen?:string}){
    const [closeHover, setCloseHover] = useState<boolean>(false);
    return <>
       {show && <div className="modalPhoto">
            <IoIosCloseCircle
            onClick={() => close(false)} 
            onMouseEnter={() => setCloseHover(true)} 
            onMouseLeave={() => setCloseHover(false)}
            color={closeHover ? "#fff" : "#f0f1f5d6"} 
            size={100}
            style={{zIndex:50}}
            className="closeBtnModal" />
            <div className="contentImageModal">
                <img className="imagenCover" style={{objectFit:"contain"}} src={imagen} alt="" />
            </div>
        </div>}
    </>
}