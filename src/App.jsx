import "./App.css"
import { SplitScreen } from "./SplitScreen"

const LeftHandComp = ({ name }) => <h1 style={{ backgroundColor: "green" }}>Hello {name}</h1>
const RightHandComp = ({ message }) => <p style={{ backgroundColor: "rebeccapurple" }}>{message}</p>

function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComp name="Frank" />
      <RightHandComp message="Welcome to React Patterns" />
    </SplitScreen>
  )
}

export default App
