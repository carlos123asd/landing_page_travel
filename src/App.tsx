import BtnReturnMenu from "./component/atom/BtnReturnMenu"
import DiscoMenu from "./component/atom/DiscoMenu"
import { positionBtnMenu } from "./utility/positionBtnMenu"

function App() {

  return (
    <>
      <div style={{width:"100%",height:"100vh",position:"relative"}}>
        <BtnReturnMenu position={positionBtnMenu.left}/>
        <DiscoMenu />
      </div>
    </>
  )
}

export default App
