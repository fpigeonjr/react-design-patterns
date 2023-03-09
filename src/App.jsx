import React from "react"
import "./App.css"
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow"

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
)
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
)
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congrats you qualify for our senior discount.</p>
    <button onClick={() => goToNext()}>Next</button>
  </>
)
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
)

function App() {
  const [onBoardingData, setOnBoardingData] = React.useState({})
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const OnNext = (stepData) => {
    setOnBoardingData({
      ...onBoardingData,
      ...stepData
    })
    setCurrentIndex(currentIndex + 1)
    console.log(onBoardingData)
  }
  return (
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={OnNext}
      onFinish={() => console.log(onBoardingData)}
    >
      <StepOne />
      <StepTwo />
      {onBoardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  )
}

export default App
