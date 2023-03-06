import "./App.css"
import { SplitScreen } from "./SplitScreen"
import { people, products } from "./data"
import { RegularList } from "./RegularList"
import { SmallPersonListItem } from "./people/SmallPersonListItem"

const LeftHandComp = ({ name }) => <h1 style={{ backgroundColor: "green" }}>Hello {name}</h1>
const RightHandComp = ({ message, children }) => {
  return (
    <>
      <p style={{ backgroundColor: "rebeccapurple" }}>{message}</p>
      {children}
    </>
  )
}

function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComp name="Frank" />
      <RightHandComp message="Welcome to React Patterns">
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
      </RightHandComp>
    </SplitScreen>
  )
}

export default App
