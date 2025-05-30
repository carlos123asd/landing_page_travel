import BtnReturnMenu from "../component/atom/BtnReturnMenu"
import Nav from "../component/organism/Nav"
import { positionBtnMenu } from "../utility/positionBtnMenu"

function App() {

  return (
    <>
      <div  style={{overflow:"hidden"}}>
          <BtnReturnMenu position={positionBtnMenu.left}/>
          <Nav />
      </div>
    </>
  )
}

export default App
