import { useState } from "react";
import { multiImages, type MultiImagesSection, type MultiImagesSpace } from "../../utility/MultiImages";

export default function MultiImageWithDescription({handleClickModal,space,section}:{handleClickModal?:(image:string)=>void,space:MultiImagesSpace,section:MultiImagesSection<MultiImagesSpace>}) {
    const [imageActive,setImageActive] = useState(0);

    const handleClick = (index:number) => {
        setImageActive(index);
    }

    return <>
        <div className="contentMultiImageMain">
            <div className="contentMultiImageDescription">
                <div onClick={() => handleClickModal && handleClickModal(multiImages[space][section][imageActive].imagen)} className="imageSectionCinco">
                    <img className="imagenCover" style={{width:"100%", height:"100%"}} src={multiImages[space][section][imageActive].imagen} alt="" />
                </div>
                <div className="contentInfoMultiImage">
                    <span className="titInfoImage">{multiImages[space][section][imageActive].titulo}</span>
                    <span className="titInfoSubtitulo textSecundary">{multiImages[space][section][imageActive].subtitulo}</span>
                </div>
            </div>
            <div className="contentControlMultiImage">
                {
                    multiImages[space][section].map((image,index:number) => {
                        return <div className="imgMultiImage" key={index}>
                            <div onClick={() => handleClick(index)} style={{height:"100%"}} className={imageActive===index ? "" : "imgMultiInactive"}><img className="imagenCover" src={image.imagen} alt="" /></div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}