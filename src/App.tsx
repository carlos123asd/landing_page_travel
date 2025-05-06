import BtnReturnMenu from "./component/atom/BtnReturnMenu"
import { positionBtnMenu } from "./utility/positionBtnMenu"

function App() {

  return (
    <>
      <BtnReturnMenu position={positionBtnMenu.left}/>
    </>
  )
}

export default App
