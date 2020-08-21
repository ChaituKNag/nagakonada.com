import React from "react"
import Button from "../common/Button"
import goto from "../../utils/goto-page"
import { CardWrapper, CardContentWrapper, CardTitle } from "./ItemCard.styles"

const ItemCard = ({
  title,
  date,
  intro,
  slug,
  stacked,
  urlPrefix = "/",
  themeColor,
}) => {
  return (
    <CardWrapper
      stacked={stacked}
      className="card"
      data-date={date}
      themeColor={themeColor}
    >
      <CardContentWrapper stacked={stacked} className="card-content">
        <CardTitle layoutId={`post-${slug}`} themeColor={themeColor}>
          {title}
        </CardTitle>
        <div>{intro}</div>
        <Button onClick={goto(urlPrefix + slug)} themeColor={themeColor}>
          Learn More
        </Button>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default ItemCard
