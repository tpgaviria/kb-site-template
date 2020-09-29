module.exports = {
  siteMetadata: {
    siteTitle: `@rocketseat/gatsby-theme-docs`,
    defaultTitle: `@rocketseat/gatsby-theme-docs`,
    siteTitleShort: `gatsby-theme-docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        basePath: `/`,
        configPath: `src/config`,
        docsPath: `src`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
  ],
};