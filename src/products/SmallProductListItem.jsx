export const SmallProductListItem = ({ product }) => {
  const { name, price } = product

  return (
    <p>
      {name} - {price}
    </p>
  )
}
