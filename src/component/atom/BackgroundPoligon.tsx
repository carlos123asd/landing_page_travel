export default function BackgroundPoligon({handleClick,children,position}:{handleClick?:()=>void,children:React.ReactNode,position:string}){
    if(position === "leftTop"){
        return <div className="contentBackgroundLeftTopSectionCuatro">
            {children}
        </div>
    }else if(position === "rightTop"){
        return <div onClick={handleClick} className="contentBackgroundRightTopSectionCuatro">
            {children}
        </div>
    }else if(position === "leftBottom"){
        return <div onClick={handleClick} className="contentBackgroundLeftBottomSectionCuatro">
            {children}
        </div>
    }else{
        return <div className="contentBackgroundRightBottomSectionCuatro">
            {children}
        </div>
    }
}