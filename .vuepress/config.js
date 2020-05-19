
module.exports = {
  title: 'Tsinan Tech',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    search: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '系统架构', link: '/system/' },
      { text: '人工智能', link: '/ai/' },
      { text: '业务领域', link: '/industry/' },
      { text: '我的项目', link: '/project/' }
    ],
    sidebar: {
      '/system/': [
        '',
        'hardware',
        'algorithm',
        'architecture',
        'other'
      ],
      '/ai/': [
        '',
        'ml',
        'cv',
        'nlp',
        'anomaly_detection',
        'other'
      ],
      '/industry/': [
        '',
        'public_security',
        'enterprise_security',
        'network_performance',
        'other'
      ],
      '/project/': [
        '',
        'laurasia',
        'gondwana',
      ]
    },
    lastUpdated: 'Last Updated'
  }
}
