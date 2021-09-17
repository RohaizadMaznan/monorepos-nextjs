const { BLOG_URL } = "https://monorepos-nextjs-n0fq2jcee-rohaizadmaznan.vercel.app/"
<<<<<<< HEAD
=======
const { HOME_URL } = process.env
const { CONTACT_URL } = process.env
>>>>>>> 85ea335901b01851938db5d87515efbefb255b52

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
