import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Office Tool Plus',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['meta', { name: 'theme-color', content: '#0078D4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Office Tool Plus | Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Office Tool Plus' }],
    ['meta', { property: 'og:image', content: 'https://img.lancdn.co/otp/global/x/header-x.png' }],
    ['meta', { property: 'og:url', content: 'https://otp.landian.vip/' }],
  ],

  themeConfig: {
    logo: '/logo.ico',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YerongAI/Office-Tool' },
      { icon: 'discord', link: 'https://discord.gg/TpXTgfgf2a' }
    ],

    search: {
        provider: 'local'
    }
  }
})