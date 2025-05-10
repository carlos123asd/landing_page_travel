import { SiCodesignal } from "react-icons/si";
import { getColorTit } from "../../utility/getColorMenuActive";
import useMenu from "../../hooks/useMenu";

export default function Author(){
    const {context} = useMenu()
    return <>
        <div className="author">
            <div className="contentIconAuthor">
                <SiCodesignal color="black" size={30}/>
            </div>
            <div style={{display:"flex",gap:".3em"}}>
                <span>by</span>
                <a
                target="_blank"
                href="https://www.alexdeveloper.es/" 
                style={{
                    borderBottom: `2px solid ${getColorTit(context.menuActive)}`,
                    color: "white",
                    textDecoration: "none"
                }}>AlexDev</a>
            </div>
        </div>
    </>
}