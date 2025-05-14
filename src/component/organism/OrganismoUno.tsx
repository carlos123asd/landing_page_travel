import { imagesOrganismoUno, type ImageMapKeysOrganismoUno } from "../../utility/imagesOrganismoUno";
import InfoImage from "../atom/InfoImage";
import ParrafoOrganismoUno from "../atom/ParrafoOrganismoUno";
import TituloOrganism from "../atom/TituloOrganismo";

export default function OrganismoUno({name}:{name:ImageMapKeysOrganismoUno}){
    return <>
        <div className="OrganismoUno">
            <div className="contentInfoOrganismoUno">
                <TituloOrganism 
                colorTag="#4DFFC9" 
                tag="Helicopter Tour" 
                colorTitulo="#004732" 
                titulo="Scenic flight across the city" />
                <ParrafoOrganismoUno />
            </div>
            <div className="contentImagesTrapezio">
                <div className="contentimageTrapezio">
                    <div className="ImageTrapezioLeft">
                        <img className="imageOrganismoUno" src={imagesOrganismoUno[name].image.imagenMachuPichuAirOne} alt="" />
                    </div>
                    <InfoImage name={name} indice={1} />
                </div>
                <div className="contentimageTrapezio">
                    <div className="ImageTrapezioRight">
                        <img className="imageOrganismoUno" src={imagesOrganismoUno[name].image.imagenMachuPichuAirTwo} alt="" />
                    </div>
                    <InfoImage name={name} indice={2} />
                </div>
            </div>
        </div>
    </>
}