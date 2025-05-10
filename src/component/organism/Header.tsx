import type { ImageMapKeys } from "../../utility/imagesHeader";
import BtnReturnMenu from "../atom/BtnReturnMenu";
import Foreground from "../atom/Foreground";

export default function  Header({name}:{name:ImageMapKeys}){
    return <>
        <Foreground imagen={name}>
            <BtnReturnMenu position="center"/>
        </Foreground>
    </>
}