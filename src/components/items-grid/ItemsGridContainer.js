import React, { Fragment, useState } from "react"
import styled from "styled-components"
import ItemCard from "./ItemCard"
import { widths, mediaQueries } from "../../styles/variables"
import GridSwapper from "./GridSwapper"

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px 50px;
  max-width: ${widths.largeDesktop};
  margin: 3rem 1.5rem;

  @media ${mediaQueries.mobileUp} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.desktopUp} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${mediaQueries.largeDesktopUp} {
    margin: 3rem 0;
  }

  ${props =>
    props.stacked
      ? `
    grid-template-columns: 1fr;
    @media ${mediaQueries.mobileUp} {
        grid-template-columns: 1fr;
    }

    @media ${mediaQueries.desktopUp} {
        grid-template-columns: 1fr;
    }
    grid-gap: 20px;
    margin: 3rem 0;
    `
      : ""}
`

const NoItemsSection = styled.div`
  text-align: center;
  padding: 5rem 0;
`

const ItemsGridContainer = ({
  items,
  itemUrlPrefix,
  noItemsMessage,
  themeColor,
  list = false,
}) => {
  const [selectedLayout, setSelectedLayout] = useState(list ? "list" : "grid")
  const handleLayoutChange = layout => () => setSelectedLayout(layout)
  const stacked = selectedLayout === "list"

  if (items.length === 0) {
    return <NoItemsSection>{noItemsMessage}</NoItemsSection>
  }
  return (
    <Fragment>
      <GridSwapper onSelect={handleLayoutChange} selected={selectedLayout} />
      <GridWrapper stacked={stacked}>
        {items.map(item => (
          <ItemCard
            key={item.slug}
            title={item.title}
            intro={item.intro}
            date={item.date}
            slug={item.slug}
            stacked={stacked}
            urlPrefix={itemUrlPrefix}
            themeColor={themeColor}
          />
        ))}
      </GridWrapper>
    </Fragment>
  )
}

export default ItemsGridContainer
