import ParrafoOrganismoUno from "../atom/ParrafoOrganismoUno";
import TituloOrganism from "../atom/TituloOrganismo";

export default function OrganismoUno(){
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
                <div className="ImageTrapezioLeft"></div>
                <div className="ImageTrapezioRight"></div>
            </div>
        </div>
    </>
}