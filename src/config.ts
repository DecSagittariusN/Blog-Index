/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "链接",
    sites: [
      {
        title: "NAS",
        url: "http://nas.lowkingonline.love:9999/",
        description: "绿联私有云是一款管理绿联网络私有云存储设备的应用，提供海量云存储空间，支持多终端并用，随时随地备份照片、视频、音频、文档等，更有RAID1备份模式、加密空间、用户访问权限管理等，重重安全防护.",
        icon: "https://pp.myapp.com/ma_icon/0/icon_54195933_1713812517/256",
        color: "#0171CD",
      },
      {
        title: "摸鱼云",
        url: "https://www.moyucloud.com/",
        description: "通过我们的服务享受极速的海外互联 我们在世界各地提供网络解决方案，以本地内联网传输和加密通道处理为标准，利用多个网络提供商、优化的路由和多级冗余来确保服务的可靠性。",
        icon: "https://www.moyucloud.com/assets/moyu-b1f10aa5.webp",
        color: "#0171CD",
      },
      {
        title: "悠兔",
        description: "悠兔机场运营与 2022 年，支持 Shadowsocks 协议，公网隧道中转和专线混合网络，有家宽 IP 节点提供。悠兔机场注册可免费试用，对 Netflix、Disney+ 流媒体解锁服务也还不错。另外，悠兔机场地址为 youtu.shop，跟 YToo 机场不是同一家，YToo 机场中文名为歪兔。",
        url: "https://link3.yootu.shop/register?aff=qi0A5TL7",
        icon: "https://img.imgdd.com/f210f3.4118c3bc-587e-4f38-a58a-b8c9c312b503.png",
      },
      {
        title: "Next-ChatGPT",
        description: "A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",
        url: "https://chat.lowkingonline.love",
        icon: "https://chat.lowkingonline.love/favicon.ico",
      },
      {
        title: "ChatGPT",
        description: "获取答案。寻找灵感。提高工作效率。免费使用。易于尝试。只需询问，ChatGPT 可以帮助写作、学习、头脑风暴等。",
        url: "https://openai.com/chatgpt/",
        icon: "https://openai.com/favicon.ico",
      },
      {
        title: "GitHub",
        description: "GitHub 是一个基于 Git 的版本控制和协作平台，广泛用于软件开发和版本管理。自 2008 年成立以来，GitHub 已成为全球开发者和团队共享、管理和协作代码的重要工具。",
        url: "https://github.com/",
        icon: "https://github.com/favicon.ico",
      },
      {
        title: "vercel",
        description: "Vercel 提供开发人员工具和云基础设施，用于构建、扩展和保护更快、更个性化的 Web。",
        url: "https://vercel.com/home",
        icon: "https://vercel.com/favicon.ico",
      },
      {
        title: "ChatAnywhere API 用量查询",
        description: "ChatAnywhere API 用量查询。",
        url: "https://api.chatanywhere.org/",
        icon: "https://ice.frostsky.com/2024/09/05/dcc1a6e5cddd06e14678ee13c1713948.jpeg",
      },
      {
        title: "mjj.today",
        description: "mjj.today免费图床，上传图片分享",
        url: "https://mjj.today/",
        icon: "https://mjj.today/favicon.ico",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "静观",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://www.lowkingonline.love",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/DecSagittariusN",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: {
    url: "https://ice.frostsky.com/2024/09/05/89429b96f7e2236c360798dbf4b54a6a.jpeg",
    alt: "89429b96f7e2236c360798dbf4b54a6a.jpeg?raw=true"
  },
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
