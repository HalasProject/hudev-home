const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Innovative solutions for a connected world',
    siteDescription:
      'At HubDev, we specialize in crafting custom digital solutions that help our clients achieve their goals. Whether you need a sleek website, a cutting-edge application, or assistance with your infrastructure, our team of experts has the skills and experience to deliver top-notch results. We pride ourselves on being a one-stop shop for all things digital, with a focus on innovation, creativity, and efficiency.',
    siteKeywords:
      'Digital solutions, website design, application development, infrastructure, innovation, creativity, efficiency, one-stop shop',
    siteUrl: 'https://hubdev.online',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@your_handle',
  },
})
