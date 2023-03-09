import React from "react"
export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onBoardingData, setOnBoardingData] = React.useState({})
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const goToNext = () => setCurrentIndex(currentIndex + 1)
  const currentChild = React.Children.toArray(children)[currentIndex]

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext
    })
  }

  return currentChild
}
