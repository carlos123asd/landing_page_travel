export default function Menu(){
    const menu = ["machu picchu","london","singapore","bali"];
    return <>
        <div className="menu">
            {menu.map((titulo:string,index:number) => {
                index = index + 1;
                return <div className="menuItem">
                        <h1 className="titMenu">{titulo}</h1>
                        <h2 className="numberMenu">0{index}.</h2>
                    </div>
            })}
        </div>
    </>
}