import useMenu from "../../hooks/useMenu"
import { getColorTit } from "../../utility/getColorMenuActive"

export default function TitHeader(){
    const {context} = useMenu()

    return <>
        <div className="contentTitHeader">
            <svg style={{display:"block",width: "max-content"}} height="210" viewBox={`0 0 180 100`}>
                <text
                    style={{letterSpacing:".02em"}}
                    x="0"
                    y="95"
                    fontWeight="bold"
                    fill="transparent"
                    stroke="white"
                    strokeWidth=".01"
                >
                    {context.menuActive === 'machu picchu' || context.menuActive === 'bali' ? 'Explore' : ''}
                    {context.menuActive === 'singapore' ? 'Hello' : ''}
                    {context.menuActive === 'london' ? 'Hey' : ''}
                </text>
            </svg>
            <h1 style={{color: getColorTit(context.menuActive), letterSpacing:".02em"}}>{context.menuActive}</h1>
        </div>
    </>
}