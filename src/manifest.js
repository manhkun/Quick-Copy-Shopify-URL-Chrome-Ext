import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'Quick Copy Shopify URL',
  description: '',
  version: '0.0.0',
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  action: {
    default_title: "Once click to copy Shopify URL",
  },
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/index.js'],
      run_at: 'document_end',
    },
  ],
  web_accessible_resources: [
    {
      resources: ['external/index.js'],
      matches: ["<all_urls>"]
    },
  ],
  permissions: ["activeTab", "scripting"],
})
