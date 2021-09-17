const { BLOG_URL } = "https://monorepos-nextjs-n0fq2jcee-rohaizadmaznan.vercel.app/"

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
