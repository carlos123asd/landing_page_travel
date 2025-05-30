import InfoImage from "../component/atom/InfoImage";
import TituloOrganism from "../component/atom/TituloOrganismo";
import Header from "../component/organism/Header";
import section1 from "../assets/bali/section1.jpg"
import section11 from "../assets/bali/section11.jpg"
import section2 from "../assets/bali/section2.jpg"
import section4 from "../assets/bali/section4.jpg"
import section44 from "../assets/bali/section44.jpg"
import sectionTres from "../assets/bali/section3.jpg"
import { CgAirplane } from "react-icons/cg";
import ImagenWithDescription from "../component/atom/ImagenWithDescription";
import BackgroundPoligon from "../component/atom/BackgroundPoligon";
import Estrella from "../component/atom/Estrella";
import SliderImagen from "../component/atom/SliderImagen";
import ModalPhoto from "../component/atom/ModalPhoto";
import { useState } from "react";

export default function Bali(){
    const [showModal,setShowModal] = useState<boolean>(false);
    const [imagenModal,setImageModal] = useState<string>("");

    const handleClickPhoto = (imagen?:string) => {
        setImageModal(imagen ?? "");
        setShowModal(true)
    };
    return <>
        <div style={{position:"relative"}}>
            <ModalPhoto show={showModal} close={setShowModal} imagen={imagenModal}/>
            <Header name="bali" />
            {/*section uno*/}
            <div className="OrganismoUno">
                <div className="contentInfoOrganismoUno">
                    <TituloOrganism
                    colorTag="#FFB54D" 
                    tag="Ubud" 
                    colorTitulo="#534E44" 
                    titulo="The cultural capital of Bali" />
                    <div className="contentParrafo textSecundary">
                        <p>Ubud was the largest city nearest to our hotel. It's well known as an arts and culture centre with a large tourism industry. Ubud has a lot to offer, but it's also very busy and hectic. Traveling around this area during rush-hour is something you should avoid.</p>
                        <p>Make sure to be hungry when you visit Ubud; there're many fancy restaurants, cocktail bars and coffee shops and you don't want to miss any of them.</p>
                    </div>
                </div>
                <div className="contentImagesTrapezio">
                    <div className="contentimageTrapezio">
                        <div onClick={() => handleClickPhoto(section1)} className="ImageTrapezioLeft">
                            <img className="imagenCover" src={section1} alt="" />
                        </div>
                        <InfoImage titulo="Coffee and Co." subtitulo="One of many coffee shops in Ubud" />
                    </div>
                    <div className="contentimageTrapezio">
                        <div onClick={() => handleClickPhoto(section11)} className="ImageTrapezioRight">
                            <img className="imagenCover" src={section11} alt="" />
                        </div>
                        <InfoImage titulo="Streets of Ubud" subtitulo="Scooters are everywhere in Bali" />
                    </div>
                </div>
            </div>
            {/*section dos*/}
            <div className="sectionSeis" style={{margin:"5em 0"}}>
                <CgAirplane style={{position:"absolute",top:-50,left:"47%",zIndex:10}} color="#FFB54D" size={100} />
                <div className="backgroundSectionSeis">
                    <div className="backgroundContentLeft"></div>
                    <div className="backgroundContentRight"></div>
                </div>
                <div className="contentMainSectionSeis">
                    <ImagenWithDescription handleClick={() => handleClickPhoto(section2)} img={section2} tit="Tegalalang Rice Terrace" subtitulo="One of the famous tourist objects in Bali" />
                    <div className="contentImageSectionSeis">
                        <TituloOrganism 
                        colorTag="#FFB54D" 
                        tag="Tegalalang Rice Terrace" 
                        colorTitulo="#544E45" 
                        titulo="Rice terrace with stunning views"
                        />
                        <div className="contentParrafo textSecundary">
                            <p>We definitely wanted to visit the Tegalalang Rice Terrace, but we picked a bad day for our trip. On the one hand, it was raining a lot, and on the other hand, it was Tumpek Landep, which is a ceremony held in Bali every 6 months to bless metallic/iron objects. This includes cars, boats, motor bikes, computers, cameras and more. Several roads were blocked by the ceremony or by rain covering the road. Getting from A to B isn't always easy in Bali, especially not by car. That's why Bali is full of scooters instead.</p>
                            <p>The rice terrace itself is <mark style={{background:"#544E45",color:"white",marginLeft:".3em"}}>stunning and beautiful to look at</mark>. We only walked around at the top as the stairs where so muddy that we couldn't make it down. The good part was that the place was almost empty—unusual for such a popular tourist attraction.</p>
                            <p>You can find rice terraces all over Bali, so it doesn't have to be the one at Tegalalang. Wear appropriate footwear if you want to make it down and pick a sunny day—when possible.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*section tres*/}
            <div className="OrganismoTres">
                <div className="contentTextOrganismoTres">
                    <span className="quoteBali">“</span>
                    <span className="titOrganismoTres">
                        <mark style={{background:"#222524",color:"white"}}>Take care of your belongings; monkeys will steal items</mark>
                    </span>
                    <div className="contentParrafo textSecundary">
                        <p className="backgroundopacityMonkey">Visiting the Sacred Monkey Forest Sanctuary in Ubud is a must. The forest is full of monkeys that have become accustomed to humans, making the visit extremely funny and entertaining.</p>
                    </div>
                </div>
                <ImagenWithDescription handleClick={() => handleClickPhoto(sectionTres)} img={sectionTres} tit="Bananas everywhere" subtitulo="A perfect place to take photos of monkeys" vertical={true} />
            </div>
            {/*section cuatro*/}
            <div style={{display:"flex",flexDirection:"column",gap:"3em"}}>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon position="leftTop">
                        <div className="contentEstrellas">
                            <Estrella number={5} color="#FFB54D"/>
                        </div>
                        <p className="textSecundary contentParrafo"><a target="_blank" className="linkBali" href="https://senetan.villas/">Senetan Villas & Spa Resort</a> offers private pool villas in the middle of the jungle, 30 minutes away from busy Ubud.</p>
                    </BackgroundPoligon>
                    <BackgroundPoligon handleClick={() => handleClickPhoto(section4)} position="rightTop">
                        <img className="imagenCover" src={section4} alt="" />
                    </BackgroundPoligon>
                </div>
                <div className="contentBackgroundSectionCuatro">
                    <BackgroundPoligon handleClick={() => handleClickPhoto(section44)} position="leftBottom">
                        <img className="imagenCover" src={section44} alt="" />
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightBottom">
                        <div className="contentEstrellas">
                            <Estrella number={5} color="#FFB54D"/>
                        </div>
                        <p className="textSecundary contentParrafo">An exclusive cooking class at an organic farm in the lush tropics surrounding Ubud was one of the best things we did in Bali.</p>
                    </BackgroundPoligon>
                </div>
            </div>
            {/*section cinco*/}
            <div  className="contentSectionTresLondon">
                <div className="contentHeaderSectionTresLondon">
                    <TituloOrganism
                        colorTag="#FFB54D" 
                        tag="Mount Batur" 
                        colorTitulo="#544E45" 
                        titulo="The black lava tour to Mount Batur" />
                    <p className="textSecundary contentParrafo">Mount Batur is an active volcano surrounded by black lava. Our tour led us from our hotel along the Penelokan main road, which offers a breathtaking view over the lava fields. We made a short coffee break at the Sari Restaurant before we continued our way down.</p>
                    <p className="textSecundary contentParrafo"><mark style={{background:"#544E45",color:"white"}}>Driving though the lava is a shaky experience</mark> and we constantly had the fear that our old Jeep wouldn't make it. It's fascinating how nature slowly recovers and how the vegetation makes its way through the rocks.</p>
                </div>
                <div className="contentImageSectionTresLondon">
                    <div className="backgroundLeftSectionTresLondon"></div>
                    <SliderImagen handleClick={(imagen) => handleClickPhoto(imagen)} space="bali"/>
                    <div className="backgroundRightSectionTresLondon"></div>
                </div>
            </div>
        </div>
    </>
}