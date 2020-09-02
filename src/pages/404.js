import React from "react"
import Layout from "../components/layouts/default"
import Seo from "../components/common/Seo.js"
import Link from "../components/common/Link"

export default () => {
  return (
    <Layout>
      <Seo title="404" />
      <h1>Ooops...</h1>
      <Link to="/">⬅ Start over!</Link>
    </Layout>
  )
}
