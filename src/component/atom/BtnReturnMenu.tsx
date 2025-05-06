import { BiSolidNavigation } from "react-icons/bi";

export default function BtnReturnMenu({position}:{position:string}) {
    return <>
        <div className="btnReturnMenu" style={{justifySelf:position}}>
            <BiSolidNavigation />
            <span className="titMenuReturn">Menu</span>
        </div>
    </>
} 