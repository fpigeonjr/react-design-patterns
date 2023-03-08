import "./App.css"
import { SplitScreen } from "./SplitScreen"
import { people, products } from "./data"
import { RegularList } from "./RegularList"
import { SmallPersonListItem } from "./people/SmallPersonListItem"
import { LargePersonListItem } from "./people/LargePersonListItem"
import { SmallProductListItem } from "./products/SmallProductListItem"
import { LargeProductListItem } from "./products/LargeProductListItem"
import { NumberedList } from "./NumberedList"
import { Modal } from "./Modal"

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
    <Modal>
      <LargeProductListItem product={products[0]} />
    </Modal>
  )
}

export default App
