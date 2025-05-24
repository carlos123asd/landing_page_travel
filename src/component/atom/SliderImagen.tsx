import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { sliderImagen, type sliderImagenSpace } from "../../utility/sliderImages";

export default function SliderImagen({space}:{space:sliderImagenSpace}){
    const [imagenActive,setImagenActive] = useState(1);
    const lenghtImages =  sliderImagen[space].length;
    useEffect(() => {
        console.log(imagenActive)
    },[imagenActive])
    const handleBack = () => {
        if(imagenActive >= 1){
            const back = imagenActive - 1
            setImagenActive(back)
        }
        
    }
    const handleNext = () => {
        if(imagenActive < lenghtImages - 1){
            const next = imagenActive + 1
            setImagenActive(next)
        }
    }

    return <>
        <div className="backgroundMiddleSectionTresLondon">
            <img src={Object.values(sliderImagen[space])[imagenActive] as string} className="imagenCover" alt="" />
        </div>
        <div className="contentBtnsSectionTresLondon">
            <div onClick={handleBack} className="btnLeftSectionTresLondon">
                <FaChevronLeft size={24} color="#222325" />
            </div>
            <div onClick={handleNext} className="btnRightSectionTresLondon">
                <FaChevronLeft size={24} color="#222325" style={{transform: "rotate(180deg)"}} />
            </div>
        </div>
    </>
}