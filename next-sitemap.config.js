module.exports = {
  siteUrl: 'https://www.offshorepirates.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.offshorepirates.com/server-sitemap.xml', // <==== Add here
    ],
  },
};