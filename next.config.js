module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
      return [
        {
          source: '/vote',
          destination: 'https://top.gg/bot/981649513427111957/vote',
          permanent: true,
        },
        {
          source: '/invite',
          destination: 'https://discord.com/oauth2/authorize?client_id=981649513427111957&permissions=274878377024&scope=bot%20applications.commands',
          permanent: true,
        },
        {
          source: '/support',
          destination: 'https://discord.gg/wouldyou',
          permanent: true,
        },
      ]
    },
  }
  return nextConfig;

}