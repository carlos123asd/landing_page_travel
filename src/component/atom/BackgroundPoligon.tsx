export default function BackgroundPoligon({children,position}:{children:React.ReactNode,position:string}){
    if(position === "leftTop"){
        return <div className="contentBackgroundLeftTopSectionCuatro">
            {children}
        </div>
    }else if(position === "rightTop"){
        return <div className="contentBackgroundRightTopSectionCuatro">
            {children}
        </div>
    }else if(position === "leftBottom"){
        return <div className="contentBackgroundLeftBottomSectionCuatro">
            {children}
        </div>
    }else{
        return <div className="contentBackgroundRightBottomSectionCuatro">
            {children}
        </div>
    }
}