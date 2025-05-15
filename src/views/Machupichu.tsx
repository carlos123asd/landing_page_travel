import Header from "../component/organism/Header";
import TituloOrganism from "../component/atom/TituloOrganismo";
import MachupichuAirOne from "../assets/machupichu/air1.jpg";
import MachupichuAirDos from "../assets/machupichu/air2.jpg"
import sectionTres from "../assets/machupichu/sectiontres.jpg"
import eat1 from "../assets/machupichu/eat1.jpg"
import eat2 from "../assets/machupichu/eat2.jpg"
import { CgAirplane } from "react-icons/cg";
import Estrella from "../component/atom/Estrella";

export default function Travel(){
    return <>
        <div>
            <Header name='machupicchu' />
            {/*Section uno*/}
            <div className="OrganismoUno">
                <div className="contentInfoOrganismoUno">
                    <TituloOrganism 
                    colorTag="#4DFFC9" 
                    tag="Helicopter Tour" 
                    colorTitulo="#004732" 
                    titulo="Scenic flight across the city" />
                    <div className="contentParrafo textSecundary">
                        <p>One of the most recommended tours in Cape Town: A hike to the top of Lion's Head during sunrise or sunset. And yes, it's totally worth it.</p>
                        <p>With a height of 669 metres, Lion's Head isn't as high as Table Mountain, but that's exactly what makes the view so unforgettable—<mark style={{background:"#004732",color:"white"}}>you're in the middle of everything.</mark>  Between Camps Bay, Sea Point and Gardens, Signal Hill and Table Mountain, from here, you can see them all. Don't be afraid of heights; book a guide or hike with a group and you shouldn't have any trouble making it to the top.</p>
                        <p>Our tour started at 5 p.m. near Signal Hill. From here, we made our way to the top. After one hour we arrived right before sunset. Remember: After every sunset follows a time without sunlight and you still need to make it back to the bottom. It's important to have a headlamp with you and a guide who knows the route.</p>
                    </div>
                </div>
                <div className="contentImagesTrapezio">
                    <div className="contentimageTrapezio">
                        <div className="ImageTrapezioLeft">
                            <img className="imagenCover" src={MachupichuAirOne} alt="" />
                        </div>
                        <div className="contentInfoImage">
                            <span className="titInfoImage">Cape Town</span>
                            <span className="titInfoSubtitulo textSecundary">Both Table Mountain and the newly build stadium stand out</span>
                        </div>
                    </div>
                    <div className="contentimageTrapezio">
                        <div className="ImageTrapezioRight">
                            <img className="imagenCover" src={MachupichuAirDos} alt="" />
                        </div>
                        <div className="contentInfoImage">
                            <span className="titInfoImage">Cape Town</span>
                            <span className="titInfoSubtitulo textSecundary">Both Table Mountain and the newly build stadium stand out</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*Section dos*/}
            <div className="OrganismoDos">
                <CgAirplane style={{position:"absolute",top:-50,left:"45%",zIndex:10}} color="#4DFFC9" size={100} />
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
                        <div className="contentImageOrganismoDos">
                            <img className="imagenCover" src={MachupichuAirDos} alt="" />
                        </div>
                         <div className="contentInfoImage">
                            <span className="titInfoImage">Cape Town</span>
                            <span className="titInfoSubtitulo textSecundary">Both Table Mountain and the newly build stadium stand out</span>
                        </div>
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
                <div className="contentImageOrganismoTres">
                    <div className="contentimageExterior">
                        <img className="imagenCover" src={sectionTres} alt="" />
                        <div style={{flexDirection:"row-reverse",alignItems:"end",marginLeft:"1em"}} className="contentInfoImage contentInfoImageVertical">
                            <span style={{writingMode: "vertical-lr"}} className="titInfoImage">Cape Town</span>
                            <span style={{writingMode: "vertical-lr"}} className="titInfoSubtitulo textSecundary">Both Table Mountain and the newly build stadium stand out</span>
                        </div>
                    </div>
                    <div className="backgroundImageOrganismoTres"></div>
                </div>
            </div>
            {/*Section cuatro*/}
            <div style={{display:"flex",flexDirection:"column",gap:"3em"}}>
                <div className="contentBackgroundSectionCuatro">
                    <div className="contentBackgroundLeftTopSectionCuatro">
                        <div className="contentEstrellas">
                            <Estrella number={5}/>
                        </div>
                        <p className="textSecundary contentParrafo"><a className="linkSectionCuatro" href="https://thepotluckclub.co.za/">The PotLuck Club</a> is a well-known restaurant with an innovative cuisine that serves sophisticated tapas-style dishes. Make sure you book in advance.</p>
                    </div>
                    <div className="contentBackgroundRightTopSectionCuatro">
                        <img className="imagenCover" src={eat1} alt="" />
                    </div>
                </div>
                <div className="contentBackgroundSectionCuatro">
                    <div className="contentBackgroundLeftBottomSectionCuatro">
                        <img className="imagenCover" src={eat2} alt="" />
                    </div>
                    <div className="contentBackgroundRightBottomSectionCuatro">
                        <div className="contentEstrellas">
                            <Estrella number={4}/>
                        </div>
                        <p className="textSecundary contentParrafo">The Neighbourgoods Market is a trendy market in and around an old mill. It opens every Saturday and offers artisan products and gourmet foods. Busy, but worth the visit.</p>
                    </div>
                </div>
            </div>
        </div> 
    </>
}