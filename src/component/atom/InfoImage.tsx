export default function InfoImage({titulo,subtitulo}:{titulo:string,subtitulo:string}) {
    return <>
         <div className="contentInfoImage">
            <span className="titInfoImage">{titulo}</span>
            <span className="titInfoSubtitulo textSecundary">{subtitulo}</span>
        </div>
    </>
}