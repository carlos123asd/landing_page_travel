import { BiSolidNavigation } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

export default function BtnReturnMenu({position}:{position:string}) {
    const {context} = useMenu();
    const navigation = useNavigate()
    const handleReturnMenu = () => {
        context.setMenuActive('machu picchu')
        navigation('/')
    }
    return <>
        <div onClick={handleReturnMenu} className="btnReturnMenu" style={{justifySelf:position}}>
            <BiSolidNavigation />
            <span className="titMenuReturn">Travel</span>
        </div>
    </>
} 