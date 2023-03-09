import React from "react"
import styled from "styled-components"

export const UncontrolledModal = ({ children }) => {
  const [shouldShow, setShouldShow] = React.useState(false)

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <button onClick={() => setShouldShow(false)}>Hide Modal</button>
          <ModalBody onClick={(e) => e.stopPropagation}>{children}</ModalBody>
        </ModalBackground>
      )}
    </>
  )
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 5px;
`
