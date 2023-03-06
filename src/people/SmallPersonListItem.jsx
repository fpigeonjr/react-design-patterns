export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person

  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age} years</p>
    </>
  )
}
