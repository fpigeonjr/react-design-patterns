import "./App.css"
import { SplitScreen } from "./SplitScreen"

const LeftHandComp = () => <h1 style={{ backgroundColor: "green" }}>Left</h1>
const RightHandComp = () => <p style={{ backgroundColor: "rebeccapurple" }}>Right</p>

function App() {
  return (
    <SplitScreen
      left={LeftHandComp}
      leftWeight={1}
      rightWeight={3}
      right={RightHandComp}
    />
  )
}

export default App
