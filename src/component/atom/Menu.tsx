export default function Menu(){
    const menu = ["machu picchu","london","singapore","bali"];
    return <>
        <div className="menu">
            {menu.map((titulo:string,index:number) => {
                index = index + 1;
                return <div className="menuItem">
                        <svg width="100%" height="100" viewBox="0 0 650 100">
                            <text
                                className="titMenu"
                                x="0"
                                y="95"
                                fontWeight="bold"
                                fill="transparent"
                                stroke="white"
                                strokeWidth="0.01"
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