import type { ImageMapKeys } from "../../utility/imagesHeader";
import BtnReturnMenu from "../atom/BtnReturnMenu";
import Foreground from "../atom/Foreground";
import TitHeader from "../atom/TitHeader";

export default function  Header({name}:{name:ImageMapKeys}){
    return <>
        <Foreground imagen={name}>
            <BtnReturnMenu position="center"/>
            <TitHeader />
        </Foreground>
    </>
}