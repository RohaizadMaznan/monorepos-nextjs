const { BLOG_URL } = process.env
const { HOME_URL } = process.env
const { CONTACT_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/contact',
        destination: `${BLOG_URL}/contact`,
      },
    ]
  },
}
