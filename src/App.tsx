import BtnReturnMenu from "./component/atom/BtnReturnMenu"
import DiscoMenu from "./component/atom/DiscoMenu"
import { positionBtnMenu } from "./utility/positionBtnMenu"

function App() {

  return (
    <>
        <BtnReturnMenu position={positionBtnMenu.left}/>
        <DiscoMenu />
    </>
  )
}

export default App
