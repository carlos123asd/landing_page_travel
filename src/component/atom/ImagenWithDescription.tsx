export default function ImagenWithDescription({img, tit, subtitulo, vertical}: {img: string, tit: string, subtitulo: string, vertical?: boolean}) {
    if (vertical != null && vertical) {
        return (
            <>
                <div className="contentImageOrganismoTres">
                    <div className="contentimageExterior">
                        <img className="imagenCover" src={img} alt="" />
                        <div style={{flexDirection:"row-reverse",alignItems:"end",marginLeft:"1em"}} className="contentInfoImage contentInfoImageVertical">
                            <span style={{writingMode: "vertical-lr"}} className="titInfoImage">{tit}</span>
                            <span style={{writingMode: "vertical-lr"}} className="titInfoSubtitulo textSecundary">{subtitulo}</span>
                        </div>
                    </div>
                    <div className={`backgroundImageOrganismoTres${tit.replace(/\s+|'/g, '')}`}></div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="contentImageSectionSeis">
                    <div className="imageSectionCinco">
                        <img className="imagenCover" style={{width:"100%", height:"100%"}} src={img} alt="" />
                    </div>
                    <div className="contentInfoImage">
                        <span className="titInfoImage">{tit}</span>
                        <span className="titInfoSubtitulo textSecundary">{subtitulo}</span>
                    </div>
                </div>
            </>
        );
    }
}