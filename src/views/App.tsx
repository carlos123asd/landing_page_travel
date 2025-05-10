import BtnReturnMenu from "../component/atom/BtnReturnMenu"
import Nav from "../component/organism/Nav"
import { positionBtnMenu } from "../utility/positionBtnMenu"

function App() {

  return (
    <>
        <BtnReturnMenu position={positionBtnMenu.left}/>
        <Nav />
    </>
  )
}

export default App
