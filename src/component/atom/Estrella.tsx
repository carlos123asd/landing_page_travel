export default function Estrella({number,color}:{number:number,color:string}){
    const estrella = [1,2,3,4,5];
    return <>
        {estrella.map((n, i) => {
            if(number >= n){
                return <div style={{background: color}} key={i} className="estrella"></div>
            }
            return <div key={i} style={{backgroundColor: color}} className="estrellaVacia"></div>
        }
        )}
    </>
}