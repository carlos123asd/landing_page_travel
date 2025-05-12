export default function ResaltarTexto({children,colorbg}:{children:React.ReactNode,colorbg:string}){
    return <>
        <div style={{
            color: `${colorbg}`
        }}>
            {children}
        </div>
    </>
}