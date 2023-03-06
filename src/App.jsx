import "./App.css"
import { SplitScreen } from "./SplitScreen"
import { people, products } from "./data"
import { RegularList } from "./RegularList"
import { SmallPersonListItem } from "./people/SmallPersonListItem"
import { LargePersonListItem } from "./people/LargePersonListItem"
import { SmallProductListItem } from "./products/SmallProductListItem"
import { LargeProductListItem } from "./products/LargeProductListItem"
import { NumberedList } from "./NumberedList"

const LeftHandComp = ({ name }) => (
  <h1 style={{ backgroundColor: "green", color: "white" }}>Hello {name}</h1>
)
const RightHandComp = ({ message, children }) => {
  return (
    <>
      <p style={{ backgroundColor: "rebeccapurple", color: "white" }}>{message}</p>
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
          items={products}
          resourceName="product"
          itemComponent={SmallProductListItem}
        />
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
        <NumberedList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
      </RightHandComp>
    </SplitScreen>
  )
}

export default App
