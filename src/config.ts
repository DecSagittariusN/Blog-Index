/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "链接",
    sites: [
      {
        title: "NAS",
        url: "http://http://nas.lowkingonline.love:9999//",
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
  BACKGROUND_IMG_URL: "https://bz.qianxingtu.com/2024/04/003439-17135444792cad.jpg",
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
