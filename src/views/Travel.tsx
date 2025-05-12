import { useParams } from "react-router-dom"
import Header from "../component/organism/Header";
import type { ImageMapKeys } from "../utility/imagesHeader";
import OrganismoUno from "../component/organism/OrganismoUno";

export default function Travel(){
    const { name } = useParams();
    return <>
        <div>
            <Header name={name ? name as ImageMapKeys :  'machupicchu'} />
            <OrganismoUno />
        </div>
    </>
}