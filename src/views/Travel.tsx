import { useParams } from "react-router-dom"
import Header from "../component/organism/Header";
import type { ImageMapKeys } from "../utility/imagesHeader";

export default function Travel(){
    const { name } = useParams();
    return <>
        <Header name={name ? name as ImageMapKeys :  'machupicchu'} />
    </>
}