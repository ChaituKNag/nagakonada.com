module.exports = {
  siteMetadata: {
    title: "Naga Konada",
    description:
      "I am a frontend developer best known for developing highly performing web applications using most modern technical solutions which proved to stand the test of time by being accessible, secure, scalable and modular. My best work is in React, Node.js and ES6.",
    author: `@ChaituKNag`,
    siteUrl: `https://nagakonada.com`,
    twitterUsername: "@itsKNC",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/content/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/content/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorials`,
        path: `${__dirname}/src/content/tutorials/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorialContent`,
        path: `${__dirname}/src/content/tutorial-content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naga Konada - writings`,
        short_name: `Naga Writings`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#3072c5`,
        display: `standalone`,
        lang: "en",
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/blog/*", "/article/*", "/tutorial/*"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          blogs: require.resolve("./src/components/layouts/blog.js"),
          articles: require.resolve("./src/components/layouts/article.js"),
          tutorials: require.resolve(
            "./src/components/layouts/tutorial-list.js"
          ),
          tutorialContent: require.resolve(
            "./src/components/layouts/tutorial-details.js"
          ),
        },
        remarkPlugins: [require("remark-slug")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: "100%",
              height: 400,
              ratio: 1.77,
              containerClass: "youtube-video-container",
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true,
              tracedSVG: true,
            },
          },
        ],
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: "Fira Sans", variants: [`400`, `800`] },
          { family: "Do Hyeon", variants: [`400`] },
          { family: "Montserrat Alternates", variants: [`800i`] },
          { family: "Ubuntu", variants: [`300`, `400`, `700`] },
          { family: "Satisfy", variants: [`400`] },
        ],
      },
    },
  ],
}
