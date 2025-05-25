import { useEffect, useState } from "react"
import useMenu from "../../hooks/useMenu"
import { getColorTit } from "../../utility/getColorMenuActive"

export default function TitHeader(){
    const [sizeWidth,setSizeWidth] = useState<number>(window.innerWidth);
    const {context} = useMenu()
    const getWidthWord = (letters:string) => {
        if(letters === 'cape town' || letters === 'bali'){
            return sizeWidth > 300 && sizeWidth < 1025 ? '111' : '180'
        }else  if(letters === 'singapore'){
            return '130'
        }else{
            return sizeWidth > 300 && sizeWidth < 1025 ? '50' : '80'
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setSizeWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return <>
        <div className="contentTitHeader">
            <svg style={{display:"block",width: "max-content"}} height="210" viewBox={`0 0 ${getWidthWord(context.menuActive)} 100`}>
                <text
                    style={{letterSpacing:".02em"}}
                    x="0"
                    y="95"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="white"
                    strokeWidth=".01"
                >
                    {context.menuActive === 'cape town' || context.menuActive === 'bali' ? 'Explore' : ''}
                    {context.menuActive === 'singapore' ? 'Hello' : ''}
                    {context.menuActive === 'london' ? 'Hey' : ''}
                </text>
            </svg>
            <h1 style={{color: getColorTit(context.menuActive), letterSpacing:".02em"}}>{context.menuActive}</h1>
        </div>
    </>
}