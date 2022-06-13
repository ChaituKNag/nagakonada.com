import React from "react"
import goto from "../../utils/goto-page"

const ItemCard = ({
  title,
  intro,
  slug,
  urlPrefix = "/",
}) => {
  return (
    <div className="item-card"
    >
      <div className="item-card__content">
        <h3 className="item-card__title">
          {title}
        </h3>
        <div>{intro}</div>
        <button onClick={goto(urlPrefix + slug)}>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default ItemCard
