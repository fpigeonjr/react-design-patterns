import styled from "styled-components"

export const SplitScreen = ({ left: Left, right: Right, leftWeight = 1, rightWeight = 1 }) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`
const Pane = styled.div`
  flex: ${(props) => props.weight};
`
