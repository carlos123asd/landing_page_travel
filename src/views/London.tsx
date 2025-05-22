import Estrella from "../component/atom/Estrella";
import MultiImageWithDescription from "../component/atom/MultiImageWithDescription";
import TituloOrganism from "../component/atom/TituloOrganismo";
import Header from "../component/organism/Header";
import section2 from "../assets/london/section2.jpg";
import section22 from "../assets/london/section22.jpg";
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
                    <div className="contentBackgroundLondonLeftTop">
                        <div className="contentTextLondonSectionDos">
                            <div className="contentEstrellas">
                                <Estrella number={5} color="#4D88FF" />
                            </div>
                            <p className="textSecundary contentParrafo">
                                <a target="_blank" className="linkSectionDosLondon" href="https://boroughmarket.org.uk/">The Borough Market </a>
                                is one of the largest and oldest food markets in London and focuses on specialty foods.
                            </p>
                        </div>
                    </div>
                    <div className="contentBackgroundLondonRightTop">
                        <img className="imagenCover" src={section2} alt="" />
                    </div>
                </div>
                <div className="contentSectionDosLondonBottom">
                    <div className="contentBackgroundLondonLeftBottom">
                        <img className="imagenCover" src={section22} alt="" />
                    </div>
                    <div className="contentBackgroundLondonRightBottom">
                        <div className="contentTextLondonSectionDos">
                            <div className="contentEstrellas">
                                <Estrella number={2} color="#4D88FF" />
                            </div>
                            <p className="textSecundary contentParrafo">
                                <a target="_blank" className="linkSectionDosLondon" href="https://boroughmarket.org.uk/">He View from The Shard </a>
                                isn't cheap and the view isn't more than a typical skyscraper view.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}