/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `myweather`,
    siteUrl: `http://localhost:8000`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "5deenbfr",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components"]
};