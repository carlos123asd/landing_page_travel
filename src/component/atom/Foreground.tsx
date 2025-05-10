import { imageMap, type ImageMapKeys } from "../../utility/imagesHeader"

export default function Foreground({children,imagen}:{children:React.ReactNode,imagen:ImageMapKeys}){
    const imageSrc = imageMap[imagen]
    return <>
        <div>
            <img src={imageSrc} alt="" />
            {children}
        </div>
    </>
}