export const mapItem = item => ({
  title: item.node.frontmatter.title,
  intro: item.node.frontmatter.intro,
  date: item.node.frontmatter.date,
  slug: item.node.slug,
})
