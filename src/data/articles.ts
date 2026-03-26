export interface Article {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  category: string;
  url: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "我的计算机AI学习之路",
    date: "2025-01-29",
    readTime: "20分钟",
    excerpt: "从初入计算机领域的迷茫，到科协学习Java、竞赛获奖，再到科研探索与实验室经历，不断挑战自我，最终保研NEU NLP Lab。",
    image: "https://picsum.photos/seed/learning/800/600",
    category: "NLP",
    url: "https://mp.weixin.qq.com/s/OCChF6UmovnAAlm-q9GCJg"
  },
  {
    id: 2,
    title: "十万人阅读：我的AI大模型学习路线",
    date: "2025-01-30",
    readTime: "30分钟",
    excerpt: "全网阅读量超10万的AI大模型学习指南。从基础理论到实战演练，为你梳理一条清晰、高效的学习路径。",
    image: "https://picsum.photos/seed/roadmap/800/600",
    category: "深度学习",
    url: "https://mp.weixin.qq.com/s/fMSw-tY0fuzCaZ77tlzPMw"
  },
  {
    id: 3,
    title: "北漂大模型算法实习之旅",
    date: "2025-02-22",
    readTime: "12分钟",
    excerpt: "记录在北京进行大模型算法实习的点点滴滴。分享面试经验、工作日常以及在工业界处理真实大模型问题的实战感悟。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JUibvTxR1AFJO9Z0TWRRibjAefFavyvFibGFx3CD38JzLriaEfcqtkDu8gCZvccIKM41MRF6uZystBzkA/0?wx_fmt=jpeg&quot",
    category: "趋势",
    url: "https://mp.weixin.qq.com/s/WspREo5uPDR-R6Fqlb92Xg"
  },
  {
    id: 4,
    title: "Meteor导航站年终总结",
    date: "2026-01-10",
    readTime: "8分钟",
    excerpt: "回顾过去一年的成长与收获。从公众号运营到学术研究，总结经验教训，展望未来，见证Meteor导航站的进化。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JXC3j2kzErSjmpGJZ3jcW0dhCNfItI2iaZTVhvd3VrQSqnk7sIz2gkicyicdcM4bFpZeop1ibVM9icLKFg/0?wx_fmt=jpeg&quot",
    category: "提示工程",
    url: "https://mp.weixin.qq.com/s/F_zG9O0cQFerfOQHriiuBQ"
  },
  {
    id: 5,
    title: "在OpenBayes的成长与收获",
    date: "2025-06-04",
    readTime: "14分钟",
    excerpt: "分享在OpenBayes算力平台的使用体验与成长故事。探讨如何利用高效的算力资源加速模型训练与技术沉淀。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JXPKmlujjwcMA2fp5eNYBfUGtqgXjUqKFJS89Frv2SHX38ibZfevcdLArKiasGOjjq09V8ficZCA5FGA/0?wx_fmt=jpeg&quot",
    category: "对齐",
    url: "https://mp.weixin.qq.com/s/3fDOijSKF2hCO4LeJ6pvYg"
  },
  {
    id: 6,
    title: "AI大模型学习速成之路",
    date: "2025-03-04",
    readTime: "16分钟",
    excerpt: "针对零基础读者的AI大模型快速入门指南。提炼核心知识点，避开学习坑点，在最短时间内建立系统认知。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JVEKaJtIn0NeW7kMFuNtgtZI5Iibprkuw29mtcOWYJfbicqngJiaWgMtqkt2ibvibW443tqXUp7ckhJThQ/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/5OlHjOTGMj-HalqfjLs0xg"
  },
    {
    id: 11,
    title: "2026: 关键的一年",
    date: "2026-02-19",
    readTime: "15分钟",
    excerpt: "黑神话悟空的CEO曾说过“踏上取经路，比抵达灵山更重要”，我想真的是这样。我希望在2026年能够过的精彩一些，不去和任何人比较、不内耗、不因无意义的事情而焦虑",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/M7qVOd4BYQ260HuAnHftTg5ehC2KTonhdlLRIsP513K3PDelSz05NaSiaqj8uic8qsublica6gRXdPHZMC3Vh3Hibl8cfhvk702ialkI0LR7K6VI/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/fSP1VD0nISKHI6uPkT_2Ng"
  },
    {
    id: 10,
    title: "写给研一上学期结束的一封信",
    date: "2025-10-08",
    readTime: "15分钟",
    excerpt: "在这段时间里，我经历了从迷茫到逐渐清晰的过程。虽然还没有完全找到自己的方向，但我已经开始学会享受这个探索的过程，不再过于焦虑未来，而是专注于当下的成长和积累。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JVZxp1d9GRpbVwiaoz0le8GkNpxycu89sUuexeBmFnz99G0kiammnfh6AIJBJ4ibmOpoEIJdRYMf6nibA/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/6MUL4NlizVYk7gGOPgWKMw"
  },
    {
    id: 9,
    title: "DeepSeek-R1的推理能力分析",
    date: "2025-02-06",
    readTime: "10分钟",
    excerpt: "DeepSeek-R1的推理能力分析，探讨其在复杂任务中的表现与优势。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JV7xox3986GtcLPzgxYnMHhKUZzOZoQQucxBGnnEtrtTN0gyeIVHacIE0PQD03tNhumbKVSCNNBEQ/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/WuvHXRL1_Ozlv2z6tT1NEw"
  },
  {
    id: 8,
    title: "迷茫中的自己 | 决定沉淀一段时间",
    date: "2025-02-11",
    readTime: "15分钟",
    excerpt: "黑神话悟空的CEO曾说过“踏上取经路，比抵达灵山更重要”，我想真的是这样。我希望在2025年能够过的精彩一些，不去和任何人比较、不内耗、不因无意义的事情而焦虑",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JUMufbPgepk3wquAySIkgD2hNCzWMTpLQtEJ12EmgKCzTWLUcuCAibQYRkd21k0ciablAXiauNJB35OQ/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/vKyv3xzntJX9VoaVGwufug"
  },
  {
    id: 7,
    title: "手把手教你在本地安装和使用DeepSeek",
    date: "2025-02-04",
    readTime: "15分钟",
    excerpt: "DeepSeek傻瓜式教学，从安装到使用，详细步骤图文并茂。让你轻松上手这个强大的本地大模型工具，开启AI探索之旅。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JUeWVGO7icpcadiafTII0wNtQ4xu6neHXh5czViaG8kabfqeEOSv99viacY7MvuHOicT5B44JM5W1iasJ0g/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/0y3nMb65-HsgCiTBQ63-_A"
  },
];
