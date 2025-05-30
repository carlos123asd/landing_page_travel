import Header from "../component/organism/Header";
import TituloOrganism from "../component/atom/TituloOrganismo";
import CapeTownAirOne from "../assets/capetown/air1.jpg";
import CapeTownAirDos from "../assets/capetown/air2.jpg"
import sectionDos from "../assets/capetown/sectionDos.jpg"
import sectionTres from "../assets/capetown/sectiontres.jpg"
import eat1 from "../assets/capetown/eat1.jpg"
import eat2 from "../assets/capetown/eat2.jpg"
import sectionCinco from "../assets/capetown/sectionCinco.jpg"
import sectionSeis from "../assets/capetown/sectionSeis.jpg"
import sectionSiete from "../assets/capetown/sectionSiete.jpg"
import { CgAirplane } from "react-icons/cg";
import Estrella from "../component/atom/Estrella";
import ImagenWithDescription from "../component/atom/ImagenWithDescription";
import InfoImage from "../component/atom/InfoImage";
import BackgroundPoligon from "../component/atom/BackgroundPoligon"
import ModalPhoto from "../component/atom/ModalPhoto";
import { useState } from "react";

export default function Travel(){
    const [showModal,setShowModal] = useState<boolean>(false);
    const [imagenModal,setImageModal] = useState<string>("");
    const handleClickPhoto = (imagen:string) => {
        setImageModal(imagen)
        setShowModal(true)
    };
    return <>
        <div style={{position:"relative"}}>
            <ModalPhoto show={showModal} close={setShowModal} imagen={imagenModal}/>
            <Header name='cape town' />
            {/*Section uno*/}
            <div className="OrganismoUno">
                <div className="contentInfoOrganismoUno">
                    <TituloOrganism 
                    colorTag="#4DFFC9" 
                    tag="Helicopter Tour" 
                    colorTitulo="#004732" 
                    titulo="Scenic flight across the city" />
                    <div className="contentParrafo textSecundary">
                        <p>It was the first time being in a helicopter and there couldn't be a better place for this experience.</p>
                        <p>The tour started at the V&A Waterfront and continued along the dazzling Atlantic coastline. <mark style={{background:"#004732",color:"white"}}>A breathtaking way to experience the iconic scenery of Cape Town.</mark>   From Table Mountain, the Twelve Apostles, Camps Bay to Hout Bay and back. A lot of places that we had the pleasure to visit by feat in the upcoming week.</p>
                    </div>
                </div>
                <div className="contentImagesTrapezio">
                    <div className="contentimageTrapezio">
                        <div onClick={() => handleClickPhoto(CapeTownAirOne)} className="ImageTrapezioLeft">
                            <img className="imagenCover" src={CapeTownAirOne} alt="" />
                        </div>
                        <InfoImage 
                        titulo="Cape Town" 
                        subtitulo="Both Table Mountain and the newly build stadium stand out"
                        />
                    </div>
                    <div className="contentimageTrapezio">
                        <div onClick={() => handleClickPhoto(CapeTownAirDos)} className="ImageTrapezioRight">
                            <img className="imagenCover" src={CapeTownAirDos} alt="" />
                        </div>
                        <InfoImage titulo="The Twelve Apostles" subtitulo="A 6 km mountain range that actually consists of 18 peaks—not 12" />
                    </div>
                </div>
            </div>
            {/*Section dos*/}
            <div className="OrganismoDos">
                <CgAirplane style={{position:"absolute",top:-50,left:"40%",zIndex:10}} color="#4DFFC9" size={100} />
                <div className="contentBackgroundOrganismoDos">
                    <div className="contentBackgroundLeft"></div>
                    <div className="contentBackgroundRight"></div>
                </div>
                <div className="contetnInfoOrganismoDos">
                    <div className="contentTextOrganismoDos">
                        <TituloOrganism
                        colorTag="#4DFFC9" 
                        tag="Lion's Head" 
                        colorTitulo="#004732" 
                        titulo="A panoramic view" />
                        <div className="contentParrafo textSecundary">
                            <p>One of the most recommended tours in Cape Town: A hike to the top of Lion's Head during sunrise or sunset. And yes, it's totally worth it.</p>
                            <p>With a height of 669 metres, Lion's Head isn't as high as Table Mountain, but that's exactly what makes the view so unforgettable—<mark style={{background:"#004732",color:"white"}}>you're in the middle of everything.</mark>  Between Camps Bay, Sea Point and Gardens, Signal Hill and Table Mountain, from here, you can see them all. Don't be afraid of heights; book a guide or hike with a group and you shouldn't have any trouble making it to the top.</p>
                            <p>Our tour started at 5 p.m. near Signal Hill. From here, we made our way to the top. After one hour we arrived right before sunset. Remember: After every sunset follows a time without sunlight and you still need to make it back to the bottom. It's important to have a headlamp with you and a guide who knows the route.</p>
                        </div>
                    </div>
                    <div className="contentRightImagenOrganismoDos">
                        <div onClick={() => handleClickPhoto(sectionDos)} className="contentImageOrganismoDos">
                            <img className="imagenCover" src={sectionDos} alt="" />
                        </div>
                        <InfoImage titulo="View from the top" subtitulo="From here you can see Table Mountain and the Twelve Apostles" />
                    </div>
                </div>
            </div>
            {/*Section tres*/}
            <div className="OrganismoTres">
                <div className="contentTextOrganismoTres">
                    <span className="quoteOrganismoTres">“</span>
                    <span className="titOrganismoTres">
                        <mark style={{background:"#222524",color:"white"}}>Waiting for the sunset might be better than the sunset itself</mark>
                    </span>
                    <div className="contentParrafo textSecundary">
                        <p>Blue water, rough waves and sharply formed rocks—The Chapman's Peak Drive isn't a typical road. It's an experience and a road you want to drive.</p>
                        <p>We arrived quite early at the Chapman's Peak lookout point, around two hours before sunset. It was extremely windy and started to get cold. Turned out that the sunset wasn't more than an average sunset, but the time we spent was so relaxing. We could sit there forever.</p>
                    </div>
                </div>
                <ImagenWithDescription handleClick={() => handleClickPhoto(sectionTres)} img={sectionTres} tit="Chapman's Peak Drive" subtitulo="A spectacular road between mountain and ocean" vertical={true} />
            </div>
            {/*Section cuatro*/}
            <div style={{display:"flex",flexDirection:"column",gap:"3em"}}>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon position="leftTop">
                        <div className="contentEstrellas">
                            <Estrella number={5} color="#4DFFC9"/>
                        </div>
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkSectionCuatro" href="https://thepotluckclub.co.za/">The PotLuck Club</a> is a well-known restaurant with an innovative cuisine that serves sophisticated tapas-style dishes. Make sure you book in advance.</p>
                    </BackgroundPoligon>
                    <BackgroundPoligon handleClick={() => handleClickPhoto(eat1)} position="rightTop">
                        <img className="imagenCover" src={eat1} alt="" />
                    </BackgroundPoligon>
                </div>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon handleClick={() => handleClickPhoto(eat2)} position="leftBottom">
                        <img className="imagenCover" src={eat2} alt="" />
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightBottom">
                        <div className="contentEstrellas">
                            <Estrella number={4} color="#4DFFC9"/>
                        </div>
                        <p className="textSecundary contentParrafo">The Neighbourgoods Market is a trendy market in and around an old mill. It opens every Saturday and offers artisan products and gourmet foods. Busy, but worth the visit.</p>
                    </BackgroundPoligon>
                </div>
            </div>
            {/*Section cinco*/}
            <div className="OrganismoCinco">
                <TituloOrganism 
                    colorTag="#4DFFC9" 
                    tag="Clifton & Camps Bay" 
                    colorTitulo="#004732" 
                    titulo="Beautiful beaches with freezing cold water"
                    center={true}
                />
                <div className="contentParrafo textSecundary contentParrafosSectionCinco">
                    <p>
                        Clifton is a small suburb of Cape Town, known as an exclusive residential area and famous for its four white sand beaches. It's located below the top of Lion's Head and has some 
                        <mark style={{background:"#004732",color:"white",marginLeft:".3em"}}>outstanding spots to overlook the whole area</mark>. From here, you get sweeping views of the Atlantic Ocean and Twelve Apostles.
                    </p>
                    <p>
                        Clifton is followed by Camps Bay, another part of the city that attracts many South African and foreign visitors during summer. You can find a lot of tiny beaches along Victoria Road, but the water is way too cold to go swimming.
                    </p>
                </div>
                <div className="contentImageOrganismoCinco">
                    <div onClick={() => handleClickPhoto(sectionCinco)} className="imageSectionCinco">
                        <img className="imagenCover" style={{width:"100%", height:"100%"}} src={sectionCinco} alt="" />
                    </div>
                    <InfoImage titulo="Clifton and Camps Bay" subtitulo="Some spots allow you to overlook the whole area" />
                </div>
            </div>
            {/*Section seis*/}
            <div className="sectionSeis">
                <CgAirplane style={{position:"absolute",top:-50,left:"40%",zIndex:10}} color="#4DFFC9" size={100} />
                <div className="backgroundSectionSeis">
                    <div className="backgroundContentLeft"></div>
                    <div className="backgroundContentRight"></div>
                </div>
                <div className="contentMainSectionSeis">
                    <ImagenWithDescription handleClick={() => handleClickPhoto(sectionSeis)} img={sectionSeis} tit="Cold and windy" subtitulo="A typical &quot;tablecloth&quot; cloud formation that covers the view to the city" />
                    <div className="contentImageSectionSeis">
                        <TituloOrganism 
                        colorTag="#4DFFC9" 
                        tag="Table Mountain" 
                        colorTitulo="#004732" 
                        titulo="Above everything"
                        />
                        <div className="contentParrafo textSecundary">
                            <p>A flat-topped mountain and prominent landmark that you can see from everywhere in Cape Town. Table Mountain is one of the top tourist attractions which can be visited by hiking to the top or by using the cableway. We've chosen the latter as hiking on Table Mountain is definitely not for beginners.</p>
                            <p>Panoramic views are guaranteed when you're at the top, but you need a bit of luck as the view is often covered in clouds. Wait a bit if that's the case—you will be amazed how fast the weather can change. From a fully covered Cape Town to a cloud-free view in just a few minutes.</p>
                            <p>Table Mountain is definitely a place to visit, but be warned: it can get cold up there. Even on sunny days.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Section siete*/}
            <div className="OrganismoTres">
                <div className="contentTextOrganismoTres">
                    <span className="quoteOrganismoTres">“</span>
                    <span className="titOrganismoTres">
                        <mark style={{background:"#222524",color:"white"}}>Boulders Beach</mark>
                    </span>
                    <div className="contentParrafo textSecundary">
                        <p>Boulders Beach is famous for its African penguins. They settled there in 1982 and have grown to a colony of about 3000 birds. Penguins are everywhere in this place. There're also smaller places to swim and you might have the luck to see a penguin near you.</p>
                    </div>
                </div>
                <ImagenWithDescription handleClick={() => handleClickPhoto(sectionSiete)} img={sectionSiete} tit="African penguin" subtitulo="Don't get too close. They're keeping an eye on you." vertical={true} />
            </div>
        </div> 
    </>
}