export default function Estrella({number}:{number:number}){
    const estrella = [1,2,3,4,5];
    return <>
        {estrella.map((n, i) => {
            if(number >= n){
                return <div key={i} className="estrella"></div>
            }
            return <div key={i} className="estrellaVacia"></div>
        }
        )}
    </>
}