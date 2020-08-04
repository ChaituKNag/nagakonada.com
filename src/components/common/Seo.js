import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang = "en", meta = [], title }) {
  const { site, imageSharp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        imageSharp(fixed: { originalName: { eq: "smiley-with-coat.jpeg" } }) {
          fixed {
            src
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: `https://thebestdeveloper.me`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: imageSharp.fixed.src,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `profile:first_name`,
          content: `Naga Chaitanya`,
        },
        {
          property: `profile:last_name`,
          content: `Konada`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:url`,
          content: `https://thebestdeveloper.me`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: imageSharp.fixed.src,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {`{
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": "Naga Chaitanya Konada",
            "jobTitle": "Frontend Developer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana, India"
            }
          }
      `}
      </script>
    </Helmet>
  )
}

export default Seo
