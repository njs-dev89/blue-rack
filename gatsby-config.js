module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blue-rack",
    description:
      "The most powerful web hosting template with fully customized WHMCS Template",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
