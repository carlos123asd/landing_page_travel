import { imagesOrganismoUno, type ImageMapKeysOrganismoUno } from "../../utility/imagesOrganismoUno";

export default function InfoImage({name,indice}:{name:ImageMapKeysOrganismoUno,indice:number}){
    return <>
        <div className="contentInfoImage">
            {
                indice === 1 ?
                <>
                    <span className="titInfoImage">{imagesOrganismoUno[name].titulo.titulo1}</span>
                    <span className="titInfoSubtitulo textSecundary">{imagesOrganismoUno[name].subtitulo.subtitulo1}</span>
                </>
                :
                <>
                    <span className="titInfoImage">{imagesOrganismoUno[name].titulo.titulo2}</span>
                    <span className="titInfoSubtitulo textSecundary">{imagesOrganismoUno[name].subtitulo.subtitulo2}</span>
                </>
            }
        </div>
    </>
}