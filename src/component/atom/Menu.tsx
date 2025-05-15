import { useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

export default function Menu(){
    const {context,translate} = useMenu()
    const navigate = useNavigate();

    const getWidthWord = (letters:number) => {
        if(letters === 4){
            return '200'
        }else  if(letters === 6){
            return '330'
        }else  if(letters === 9){
            return '450'
        }else  if(letters >= 11){
            return '600'
        }
    }

    const handleClickMenu = (titulo:string) => {
        context.setMenuActive(titulo)
        navigate('/travel/machupicchu')
    }

    return <>
        <div className="menu" style={{transform: `translateX(${translate}px)`}}>
            {context.menu.map((titulo:string,index:number) => {
                index = index + 1;
                return <div key={index} className="menuItem">
                        <svg width="100%" height="100" viewBox={`0 0 ${getWidthWord(titulo.length)} 100`}>
                            <text
                                onClick={() => handleClickMenu(titulo)}
                                className={`titMenu ${titulo === context.menuActive ? 'titMenuActive' : ''}`}
                                x="0"
                                y="95"
                                fontWeight="bold"
                                fill="transparent"
                                stroke="white"
                                strokeWidth=".01"
                            >
                                {titulo}
                            </text>
                        </svg>
                        <h2 className="numberMenu">0{index}.</h2>
                    </div>
            })}
        </div>
    </>
}