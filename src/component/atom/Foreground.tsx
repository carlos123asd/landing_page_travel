import { imageMap, type ImageMapKeys } from "../../utility/imagesHeader"
import layer from "../../assets/machupichu/layer-foreground.jpg"
import Author from "./Author"

export default function Foreground({children,imagen}:{children:React.ReactNode,imagen:ImageMapKeys}){
    const imageSrc = imageMap[imagen]
    return <>
        <div className="foregroundHeader">
            <img src={imageSrc} alt="" />
            {children}
            <div className="contentImagesForeground">
                {imagen === 'machupicchu' && <img src={layer} alt="" />}
                <div className="overlay">
                    <Author />
                </div>
            </div>
        </div>
    </>
}