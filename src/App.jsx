import React from "react"
import "./App.css"
import { UncontrolledForm } from "./UncontrolledForm"
import { ControlledForm } from "./ControlledForm"
import { ControlledModal } from "./ControlledModal"

function App() {
  const [shouldShowModal, setShouldShowModal] = React.useState(false)
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Modal Content</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  )
}

export default App
