import InfoImage from "../component/atom/InfoImage";
import TituloOrganism from "../component/atom/TituloOrganismo";
import Header from "../component/organism/Header";
import section1 from "../assets/singapore/section1.jpg";
import section11 from "../assets/singapore/section1.jpg";
import BackgroundPoligon from "../component/atom/BackgroundPoligon";
import Estrella from "../component/atom/Estrella";
import section2 from "../assets/singapore/section2.jpg";
import section22 from "../assets/singapore/section22.jpg";

export default function Singapore(){
    return <>
        <div>
            <Header name="singapore" />
            {/*section uno*/}
            <div className="OrganismoUno">
                <div className="contentInfoOrganismoUno">
                    <TituloOrganism
                    colorTag="#FF5B4D" 
                    tag="Marina Bay" 
                    colorTitulo="#544645" 
                    titulo="It's beautiful up here" />
                    <div className="contentParrafo textSecundary">
                        <p>We just came back from Bali, checked in at the Marina Bay Sands hotel and went straight to the famous infinity pool at the top of the hotel. It was truly overwhelming, especially because it was the complete opposite of Bali.</p>
                        <p><mark style={{background:"#544645",color:"white"}}>Enjoying a skyline while swimming 57 levels above the ground was like nothing we've done before.</mark> Book at least one night at the hotel to get access to the infinity pool. It's not cheap, but it's worth it.</p>
                    </div>
                </div>
                <div className="contentImagesTrapezio">
                    <div className="contentimageTrapezio">
                        <div className="ImageTrapezioLeft">
                            <img className="imagenCover" src={section1} alt="" />
                        </div>
                        <InfoImage titulo="Skyscapes everywhere" subtitulo="Huge buildings are filling the Marina Bay district" />
                    </div>
                    <div className="contentimageTrapezio">
                        <div className="ImageTrapezioRight">
                            <img className="imagenCover" src={section11} alt="" />
                        </div>
                        <InfoImage titulo="The Float" subtitulo="The world's largest floating stage is currently unilluminated" />
                    </div>
                </div>
            </div>
            {/*section dos*/}
            <div style={{display:"flex",flexDirection:"column",gap:"3em"}}>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon position="leftTop">
                        <div className="contentEstrellas">
                            <Estrella number={5} color="#FF5B4D"/>
                        </div>
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkSectionCuatro" href="https://www.marinabaysands.com/">Marina Bay Sands</a> is the most iconic hotel in Singapore. You should book at least one night here to get access to the amazing infinity pool at the top of the hotel.</p>
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightTop">
                        <img className="imagenCover" src={section2} alt="" />
                    </BackgroundPoligon>
                </div>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon position="leftBottom">
                        <img className="imagenCover" src={section22} alt="" />
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightBottom">
                        <div className="contentEstrellas">
                            <Estrella number={3} color="#FF5B4D"/>
                        </div>
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkSectionCuatro" href="https://www.yotel.com/en/hotels/yotel-singapore">YOTEL</a> offers beautiful, clean rooms of a very compact size for a fair price. It was the hotel where we spent most of our nights in Singapore.</p>
                    </BackgroundPoligon>
                </div>
            </div>
        </div>
    </>
}