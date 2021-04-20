const BLOG = {
  title: '盐袋子',
  author: '盐粒儿',
  email: 'ljmjob@live.cn',
  link: 'https://www.besalt.top',
  description: '保持好奇，保持敬畏',
  lang: 'zh-CN',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showWork: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://www.besalt.top',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-TJH40MEFRL' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'gitalk-comment', // The repository of store comments
      owner: 'rootknight',
      admin: ['rootknight'],
      clientID: 'b756126501d6638de6c4',
      clientSecret: '0c3c2d3ac1be37b26075719547bdf0502918e274',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
