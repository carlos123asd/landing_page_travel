export default function TituloOrganism({colorTag,tag,colorTitulo,titulo,center}:{colorTag:string,tag:string,colorTitulo:string,titulo:string,center?:boolean}) {
    return <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: center ? "center" : "start",
            justifyContent: center ? "center" : "start",}}>
            <div style={{
                background: `${colorTag}`
            }} className="tagTituloOrganismo textBackground">{tag}</div>
            <h3 style={{
                background: `linear-gradient(
                transparent 50%,
                ${colorTitulo} 0,
                ${colorTitulo} 86%
            )`
            }} className="tituloOrganismo">{titulo}</h3>
        </div>
    </>
} 