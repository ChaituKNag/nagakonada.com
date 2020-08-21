import React from "react"
import Button from "../common/Button"
import goto from "../../utils/goto-page"
import { CardWrapper, CardContentWrapper, CardTitle } from "./ItemCard.styles"

const ItemCard = ({ item, stacked, urlPrefix = "/", themeColor }) => {
  return (
    <CardWrapper
      stacked={stacked}
      className="card"
      data-date={item.frontmatter.date}
      themeColor={themeColor}
    >
      <CardContentWrapper stacked={stacked} className="card-content">
        <CardTitle layoutId={`post-${item.slug}`} themeColor={themeColor}>
          {item.frontmatter.title}
        </CardTitle>
        <div>{item.frontmatter.intro}</div>
        <Button onClick={goto(urlPrefix + item.slug)} themeColor={themeColor}>
          Learn More
        </Button>
      </CardContentWrapper>
    </CardWrapper>
  )
}

export default ItemCard
