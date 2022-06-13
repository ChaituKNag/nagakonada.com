import React, { Fragment } from "react"
import ItemCard from "./ItemCard"


const ItemsGridContainer = ({
  items,
  itemUrlPrefix,
  noItemsMessage,
  themeColor,
}) => {
  

  if (items.length === 0) {
    return <div>{noItemsMessage}</div>
  }
  return (
    <Fragment>
      <div>
        {items.map(item => (
          <ItemCard
            key={item.slug}
            title={item.title}
            intro={item.intro}
            date={item.date}
            slug={item.slug}
            urlPrefix={itemUrlPrefix}
            themeColor={themeColor}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default ItemsGridContainer
