import Estrella from "../component/atom/Estrella";
import MultiImageWithDescription from "../component/atom/MultiImageWithDescription";
import TituloOrganism from "../component/atom/TituloOrganismo";
import Header from "../component/organism/Header";
import section2 from "../assets/london/section2.jpg";
import section22 from "../assets/london/section22.jpg";
import SliderImagen from "../component/atom/SliderImagen";
import BackgroundPoligon from "../component/atom/BackgroundPoligon";
import type { MultiImagesSection, MultiImagesSpace } from "../utility/MultiImages";
export default function London() {
    return <>
        <div>
            <Header name='london' />
            {/*Section uno*/}
            <div className="contentSectionUnoLondon">
                <div style={{display:"flex",flexDirection:"column",gap:"4em"}} className="contentSectionUnoLondonImage">
                     <TituloOrganism
                    colorTag="#4D88FF" 
                    tag="River Thames" 
                    colorTitulo="#454A54" 
                    titulo="A sunny day in the city of rain" />
                    <MultiImageWithDescription space="london" section="1" />
                </div>
                <div className="contentSectionUnoLondonImage contentParrafo textSecundary">
                    <p>London is known for its rainy weather, but we had the luck to arrive on a sunny day. Perfect for a walk along the River Thames to explore the famous bridges of London.</p>
                    <p>Sunny weather in London? Yes, somehow. At least after we arrived with a delay of two hours, because of bad weather conditions near the airport. But it was great to catch some rays of sunshine in late December.</p>
                    <p><mark style={{background:"#454A54",color:"white"}}>The first photo shows the Tower Bridge, which is often mistaken with the London Bridge.</mark> You even get more photos of the Tower Bridge than of the London Bridge when searching for "London Bridge". The latter looks pretty ugly, so don't be disappointed.</p>
                    <p>It was one of the first photos I took in London and also the first time I used my ZEISS Touit 2.8/12 lens, a lens I've used a lot during the trip. The underground of London in particular has a lot to offer, making a wide-angle lens a good choice.</p>
                    <p><mark style={{background:"#454A54",color:"white"}}>The Shard is the tallest building in the United Kingdom. You can see it on the second photo.</mark> It offers an observation deck on Level 72 that was opened to the public in 2013. The name of the building is easy to remember as it indeed looks like … a shard.</p>
                </div>
            </div>
            {/*Section dos*/}
            <div className="contentMainSectionDosLondon">
                <div className="contentSectionDosLondonTop">
                     <BackgroundPoligon position="leftTop">
                        <div className="contentTextLondonSectionDos">
                            <div className="contentEstrellas">
                                <Estrella number={5} color="#4D88FF" />
                            </div>
                            <p className="textSecundary contentParrafo">
                                <a target="_blank" className="linkSectionDosLondon" href="https://boroughmarket.org.uk/">The Borough Market </a>
                                is one of the largest and oldest food markets in London and focuses on specialty foods.
                            </p>
                        </div>
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightTop">
                        <img className="imagenCover" src={section2} alt="" />
                    </BackgroundPoligon>
                </div>
                <div className="contentSectionDosLondonBottom">
                    <BackgroundPoligon position="leftBottom">
                        <img className="imagenCover" src={section22} alt="" />
                    </BackgroundPoligon>
                    <BackgroundPoligon position="rightBottom">
                        <div className="contentTextLondonSectionDos">
                            <div className="contentEstrellas">
                                <Estrella number={2} color="#4D88FF" />
                            </div>
                            <p className="textSecundary contentParrafo">
                                Getting up to 
                                <a target="_blank" className="linkSectionDosLondon" href="https://www.theviewfromtheshard.com/"> The View from The Shard </a>
                                isn't cheap and the view isn't more than a typical skyscraper view.
                            </p>
                        </div>
                    </BackgroundPoligon>
                </div>
            </div>
            {/*Section tres*/}
            <div  className="contentSectionTresLondon">
                <div className="contentHeaderSectionTresLondon">
                    <TituloOrganism
                        colorTag="#4D88FF" 
                        tag="METRO" 
                        colorTitulo="#454A54" 
                        titulo="The Undeground" />
                    <p className="textSecundary contentParrafo">Many people, narrow passageways and loud trains everywhere. Travailing with the transit system of London isn't relaxing. The London Underground is old and ugly, but yet so beautiful and special.</p>
                </div>
                <div className="contentImageSectionTresLondon">
                    <div className="backgroundLeftSectionTresLondon"></div>
                    <SliderImagen space="london"/>
                    <div className="backgroundRightSectionTresLondon"></div>
                </div>
            </div>
            {/*Section cuatro*/}
            <div style={{marginBottom:"10em"}} className="contentSectionUnoLondon">
                <div style={{display:"flex",flexDirection:"column",gap:"4em"}} className="contentSectionUnoLondonImage">
                     <TituloOrganism
                    colorTag="#4D88FF" 
                    tag="London by Night" 
                    colorTitulo="#454A54" 
                    titulo="The city that shines by night" />
                    <MultiImageWithDescription space="london" section={2 as unknown as MultiImagesSection<MultiImagesSpace>} />
                </div>
                <div className="contentSectionUnoLondonImage contentParrafo textSecundary">
                    <p>Let's talk about how beautiful London looks by night. The sky was covered with clouds most of the time and we only saw the sun on the day we arrived. A bad condition for photography. Turns out this isn't a problem in London, as the city shines by night. <mark style={{background:"#454A54",color:"white"}}>The winter decoration, the streetlights and the characteristic buildings are gorgeous.</mark> Walking along the streets and taking photos of them started to get addicting. Why even going outside during day when everything looks better by night?</p>
                    <p>I love modern architecture and cities, but they are different. They're well planned, buildings look very similar and there're usually only a few outstanding highlights. It's normal to walk long distances without seeing anything that's visually appealing. My step counter was way higher in Singapore and Dubai than in London, because of the fact that we had to walk along long tunnels connecting buildings or train stations—tunnels which are mostly filled with advertisement, retail chains and people who are walking from A to B.</p>
                    <p>London also has those areas, but the core city is filled with old buildings; <mark style={{background:"#454A54",color:"white"}}>architecture with character and stories</mark> . You can see that old cities have grown organically. Their buildings are at close quarters. Everything is stuffed closely together and looks different while keeping the charm of London. There's so much happening around you, so take a walk and enjoy the city.</p>
                </div>
            </div>
        </div>
    </>
}