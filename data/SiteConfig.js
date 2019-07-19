module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "mr-redible", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Rediblog", // Site title.
  siteTitleAlt: "Personal blog by Rishav Agarwal", // Alternative site title for SEO.
  siteLogo:
    "https://avatars0.githubusercontent.com/u/29327152?s=400&u=56497951d79505d0acb66ad2e9c4d3ff3d7977bd&v=4", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://rediblog.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/",
  siteDescription: "A technical blog written by Rishav Agarwal", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://haysclark.github.io/gatsby-starter-casper/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Rishav Agarwal", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-144214770-1", // GA tracking ID.
  disqusShortname: "rediblog", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/Rishav-Agarwal",
    "https://twitter.com/MrRedible",
    "mailto:rishavcoder@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Rishav-Agarwal",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/MrRedible",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:rishavcoder@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Rishav Agarwal" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
