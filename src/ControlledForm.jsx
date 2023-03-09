import React from "react"
import styled from "styled-components"

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = React.useState("")
  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState()
  const [hairColor, setHairColor] = React.useState("")

  React.useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be at least 2 characters")
    } else {
      setNameInputError("")
    }
  }, [name])

  return (
    <form>
      {nameInputError && <ErrorMsg>{nameInputError}</ErrorMsg>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

const ErrorMsg = styled.p`
  background-color: red;
  color: white;
  padding: 1em;
`
