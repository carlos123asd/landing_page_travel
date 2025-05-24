import InfoImage from "../component/atom/InfoImage";
import TituloOrganism from "../component/atom/TituloOrganismo";
import Header from "../component/organism/Header";
import section1 from "../assets/singapore/section1.jpg";
import section11 from "../assets/singapore/section1.jpg";
import BackgroundPoligon from "../component/atom/BackgroundPoligon";
import Estrella from "../component/atom/Estrella";
import section2 from "../assets/singapore/section2.jpg";
import section22 from "../assets/singapore/section22.jpg";
import MultiImageWithDescription from "../component/atom/MultiImageWithDescription";
import section4 from "../assets/singapore/section4.jpg"
import { CgAirplane } from "react-icons/cg";

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
            <div style={{display:"flex",flexDirection:"column",gap:"3em",margin:"5em 0"}}>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon position="leftTop">
                        <div className="contentEstrellas">
                            <Estrella number={5} color="#FF5B4D"/>
                        </div>
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkSingapore" href="https://www.marinabaysands.com/">Marina Bay Sands</a> is the most iconic hotel in Singapore. You should book at least one night here to get access to the amazing infinity pool at the top of the hotel.</p>
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
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkSingapore" href="https://www.yotel.com/en/hotels/yotel-singapore">YOTEL</a> offers beautiful, clean rooms of a very compact size for a fair price. It was the hotel where we spent most of our nights in Singapore.</p>
                    </BackgroundPoligon>
                </div>
            </div>
            {/*section tres*/}
            <div className="contentSectionUnoLondon" style={{marginTop:"10em"}}>
                <div style={{display:"flex",flexDirection:"column",gap:"4em"}} className="contentSectionUnoLondonImage">
                        <TituloOrganism
                    colorTag="#FF5B4D" 
                    tag="Gardens by the Bay" 
                    colorTitulo="#544645" 
                    titulo="A nature park like you haven't seen before" />
                    <MultiImageWithDescription space="singapore" section="1" />
                </div>
                <div className="contentSectionUnoLondonImage contentParrafo textSecundary">
                    <p>Gardens by the Bay is an immersive park area, made up of three waterfront gardens. It's part of the nation's plans to transform into a "City in a Garden" to raise the quality of life by enhancing greenery and flora in the city.</p>
                    <p>It is a relatively young attraction that was opened in 2012 and has already become a national icon.</p>
                    <p>The entry is free. You only have to pay for everything that's located inside, like the conservatories. Both of them—the Flower Dome and Cloud Forest—are a must-visit.</p>
                    <p>Flower DomeIt: The largest greenhouse in the world replicates a cool, dry Mediterranean climate. It's perfect for cooling down in the otherwise hot and humid Singapore. Make sure to take your best portrait lens with you as it's a superb place for plant photography.</p>
                    <p>Cloud Forest: A conservatory with a mountain and waterfall inside. You will find a lot of photos of this place on social media as it's truly unique. We sadly missed that there's a mist show, which will cover the path down from the mountain in a nice-looking fog. I'm sure that it's worth visiting this place again by night, even though we missed this opportunity.</p>
                    <p>Last but not least are the Supertrees. 18 tree-like structures that dominate the Gardens' landscape. <mark style={{background:"#454A54",color:"white"}}>Walking below them makes you feel like you're on another planet.</mark> It's another part of the garden you should visit both by day and night, first and foremost, because of the Garden Rhapsody show. It's a coordinated combination of light and music that illuminates the Supertrees and attracts both locals and vacationers.</p>
                </div>
            </div>
            {/*section cuatro*/}
            <div className="OrganismoDos" style={{marginTop:"10em"}}>
                <CgAirplane style={{position:"absolute",top:-50,left:"47%",zIndex:10}} color="#FF5B4D" size={100} />
                <div className="contentBackgroundOrganismoDos">
                    <div className="contentBackgroundLeft"></div>
                    <div className="contentBackgroundRight"></div>
                </div>
                <div className="contetnInfoOrganismoDos">
                    <div className="contentTextOrganismoDos">
                        <TituloOrganism
                        colorTag="#FF5B4D" 
                        tag="Changi Airport" 
                        colorTitulo="#544645" 
                        titulo="Time to say goodbye" />
                        <div className="contentParrafo textSecundary">
                            <p>Every trip ends where it started, but <mark style={{background:"#544645",color:"white"}}>the airport of Singapore is an attraction on its own</mark>. It's the largest transportation hub in Asia and rated as the World's Best Airport.</p>
                            <p>The Jewel is the latest addition, a nature-themed entertainment and retail complex with the world's tallest indoor waterfall. The so-called "Rain Vortex" is surrounded by a terraced forest setting. It's something you can't find in an airport elsewhere.</p>
                            <p>It's loud—as you might expect from a waterfall this size—and crowed. Make sure to store your luggage in one of the provided lockers. Otherwise, you aren't allowed to access the waterfall area.</p>
                            <p>Use a wide angle lens if you want to take photos of the Rain Vortex and enjoy the time before traveling back home.</p>
                        </div>
                    </div>
                    <div className="contentRightImagenOrganismoDos">
                        <div className="contentImageOrganismoDos">
                            <img className="imagenCover" src={section4} alt="" />
                        </div>
                        <InfoImage titulo="The Rain Vortex" subtitulo="The world's tallest indoor waterfall" />
                    </div>
                </div>
            </div>
        </div>
    </>
}