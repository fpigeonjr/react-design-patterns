import "./App.css"
import { UncontrolledForm } from "./UncontrolledForm"
import { ControlledForm } from "./ControlledForm"

function App() {
  return (
    <>
      <h2>UnControlled Comps</h2>
      <UncontrolledForm />
      <h2>Controlled Comps</h2>
      <ControlledForm />
    </>
  )
}

export default App
