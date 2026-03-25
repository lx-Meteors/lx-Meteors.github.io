import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Download,
  Code,
  Palette,
  Layout,
  Smartphone
} from 'lucide-react';

// --- Types ---
type Section = 'home' | 'about' | 'articles' | 'portfolio';

interface Article {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  category: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
  url?: string;
}

// --- Mock Data ---
const ARTICLES: Article[] = [
  {
    id: 1,
    title: "我的计算机AI学习之路",
    date: "2025-01",
    readTime: "15分钟",
    excerpt: "从初入计算机领域的迷茫，到科协学习Java、竞赛获奖，再到科研探索与实验室经历，不断挑战自我，最终保研NEU NLP Lab。",
    image: "https://picsum.photos/seed/learning/800/600",
    category: "NLP",
    url: "https://mp.weixin.qq.com/s/OCChF6UmovnAAlm-q9GCJg"
  },
  {
    id: 2,
    title: "十万人阅读：我的AI大模型学习路线",
    date: "2025-01",
    readTime: "10分钟",
    excerpt: "全网阅读量超10万的AI大模型学习指南。从基础理论到实战演练，为你梳理一条清晰、高效的学习路径。",
    image: "https://picsum.photos/seed/roadmap/800/600",
    category: "深度学习",
    url: "https://mp.weixin.qq.com/s/fMSw-tY0fuzCaZ77tlzPMw"
  },
  {
    id: 3,
    title: "北漂大模型算法实习之旅",
    date: "2025-02",
    readTime: "12分钟",
    excerpt: "记录在北京进行大模型算法实习的点点滴滴。分享面试经验、工作日常以及在工业界处理真实大模型问题的实战感悟。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JUibvTxR1AFJO9Z0TWRRibjAefFavyvFibGFx3CD38JzLriaEfcqtkDu8gCZvccIKM41MRF6uZystBzkA/0?wx_fmt=jpeg&quot",
    category: "趋势",
    url: "https://mp.weixin.qq.com/s/WspREo5uPDR-R6Fqlb92Xg"
  },
  {
    id: 4,
    title: "Meteor导航站年终总结",
    date: "2026-01",
    readTime: "8分钟",
    excerpt: "回顾过去一年的成长与收获。从公众号运营到学术研究，总结经验教训，展望未来，见证Meteor导航站的进化。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JXC3j2kzErSjmpGJZ3jcW0dhCNfItI2iaZTVhvd3VrQSqnk7sIz2gkicyicdcM4bFpZeop1ibVM9icLKFg/0?wx_fmt=jpeg&quot",
    category: "提示工程",
    url: "https://mp.weixin.qq.com/s/F_zG9O0cQFerfOQHriiuBQ"
  },
  {
    id: 5,
    title: "在OpenBayes的成长与收获",
    date: "2025-06",
    readTime: "14分钟",
    excerpt: "分享在OpenBayes算力平台的使用体验与成长故事。探讨如何利用高效的算力资源加速模型训练与技术沉淀。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/4iccEqkCF2JXPKmlujjwcMA2fp5eNYBfUGtqgXjUqKFJS89Frv2SHX38ibZfevcdLArKiasGOjjq09V8ficZCA5FGA/0?wx_fmt=jpeg&quot",
    category: "对齐",
    url: "https://mp.weixin.qq.com/s/3fDOijSKF2hCO4LeJ6pvYg"
  },
  {
    id: 6,
    title: "AI大模型学习速成之路",
    date: "2025-10",
    readTime: "6分钟",
    excerpt: "针对零基础读者的AI大模型快速入门指南。提炼核心知识点，避开学习坑点，在最短时间内建立系统认知。",
    image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/M7qVOd4BYQ260HuAnHftTg5ehC2KTonhdlLRIsP513K3PDelSz05NaSiaqj8uic8qsublica6gRXdPHZMC3Vh3Hibl8cfhvk702ialkI0LR7K6VI/0?wx_fmt=jpeg&quot",
    category: "效率",
    url: "https://mp.weixin.qq.com/s/5OlHjOTGMj-HalqfjLs0xg"
  }
];

const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Autoencoding-Free Context Compression for LLMs via Contextual Semantic Anchors ", 
    category: "ICLR'2026", 
    image: "img/SAC.png", 
    color: "bg-neo-blue",
    url: "https://arxiv.org/abs/2410.01258" // Placeholder/Example URL
  },
  { 
    id: 2, 
    title: "Position IDs Matter: An Enhanced Position Layout for Efficient Context Compression in Large Language Models", 
    category: "EMNLP'2025", 
    image: "img/EPL.png", 
    color: "bg-neo-pink",
    url: "https://arxiv.org/abs/2408.04614" // Placeholder/Example URL
  },
  { 
    id: 3, 
    title: "Time-based Knowledge-aware framework for Multi-Behavior Recommendation", 
    category: "ESWA'2024", 
    image: "https://picsum.photos/seed/proj3/600/400", 
    color: "bg-neo-green",
    url: "https://doi.org/10.1016/j.eswa.2023.122144" // Placeholder/Example URL
  },
];

// --- Components ---

const IDCard = () => {
  // --- 在这里修改你的图片路径 ---
  const idCardImageUrl = "img/Meteor_Card.png"; 

  return (
    <div className="relative group max-w-[500px] mx-auto">
      {/* Neo-Brutalist Shadow */}
      <div className="absolute inset-0 bg-black rounded-[2.5rem] translate-x-6 translate-y-6" />
      
      {/* Card Container - 删除了 rotate-2，让图片摆正 */}
      <div className="relative bg-white border-[8px] border-black rounded-[2.5rem] overflow-hidden transition-transform duration-300 shadow-none">
        <img 
          src={idCardImageUrl} 
          alt="ID Card" 
          className="w-full h-auto block"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

const Navbar = ({ activeSection, setActiveSection }: { activeSection: Section, setActiveSection: (s: Section) => void }) => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      <div className="bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-full px-10 py-4 flex items-center justify-between">
        <div className="flex gap-8">
          {(['home', 'about', 'articles', 'portfolio'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`font-black text-base transition-colors relative ${
                activeSection === s ? 'text-neo-blue' : 'text-black hover:text-neo-blue'
              }`}
            >
              {s === 'home' ? '首页' : s === 'about' ? '关于我' : s === 'articles' ? '文章' : '作品'}
              {activeSection === s && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-neo-blue rounded-full"
                />
              )}
            </button>
          ))}
        </div>
        <button className="bg-neo-yellow border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full font-black text-sm py-2 px-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          简历
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 max-w-7xl mx-auto">
    <div className="flex-[1.5] space-y-10 text-center lg:text-left">
      <a 
        href="https://mp.weixin.qq.com/s/example1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-neo-yellow neo-border px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest transform -rotate-2 hover:scale-105 transition-transform"
      >
        Meteor导航站
      </a>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.4] tracking-tighter">
        <span className="inline-block mb-4">
          我是 <span className="text-white bg-neo-pink px-4 py-1 neo-border inline-block transform rotate-1">流星</span>
        </span>
        <br />
        <span className="inline-block">
          一名 <span className="text-white bg-neo-blue px-4 py-1 neo-border inline-block transform -rotate-1">大模型研究员</span>
        </span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
        专注于自然语言处理与大语言模型研究，致力于探索人工智能的无限可能。
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
        <button 
          onClick={() => window.open('https://github.com/lx-Meteors', '_blank')}
          className="bg-black text-white neo-button rounded-2xl text-xl px-10 py-4 transform hover:-translate-y-1 transition-transform"
        >
          学术交流
        </button>
        <button 
          onClick={() => window.open('https://scholar.google.com/citations?user=9nGW0pAAAAAJ&hl=zh-CN', '_blank')}
          className="bg-white neo-button rounded-2xl text-xl px-10 py-4 transform hover:-translate-y-1 transition-transform"
        >
          查看研究成果
        </button>
      </div>
    </div>
    <div className="flex-1 w-full max-w-[500px] relative lg:mt-12">
      <IDCard />
    </div>
  </section>
);

const Services = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="space-y-4">
        <h2 className="text-5xl font-black">我能如何 <span className="text-neo-pink">帮助</span> 你</h2>
        <p className="text-gray-600 max-w-md">用最简单的方法，解决最复杂的问题</p>
      </div>
      <button className="neo-button bg-white rounded-xl flex items-center gap-2">
        查看所有服务 <ChevronRight size={18} />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { title: 'AI入门', icon: <Palette size={40} />, color: 'bg-neo-blue' },
    { title: 'AI学习', icon: <Layout size={40} />, color: 'bg-neo-pink' },
    { title: 'AI使用', icon: <Code size={40} />, color: 'bg-neo-green' }
  ].map((service, i) => (
    <div key={i} className="neo-card group hover:-translate-y-2 transition-transform">
      <div className={`w-20 h-20 ${service.color} neo-border rounded-2xl flex items-center justify-center mb-6`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-black mb-4">{service.title}</h3>
      <p className="text-gray-600">
        {i === 0 && '在信息过载的时代，重新理解AI的边界与可能。'}
        {i === 1 && '不追逐工具，而是让工具成为表达与效率的延伸。'}
        {i === 2 && '从使用者走向构建者，慢慢建立自己的方法论。'}
      </p>
      </div>
    ))}
  </div>
  </section>
);

const CTA = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="bg-neo-yellow neo-border neo-shadow rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
      <div className="space-y-4 relative z-10">
        <h2 className="text-5xl lg:text-7xl font-black italic uppercase leading-none tracking-tighter">
          时间不在于你拥有多少<br/>而在于你如何使用。
        </h2>
        <p className="text-xl font-bold max-w-2xl mx-auto">
          目前开放合作，感兴趣的同学与我交流联系。
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 relative z-10">
        <button 
          onClick={() => window.open('https://github.com/lx-Meteors', '_blank')}
          className="bg-black text-white neo-button rounded-2xl px-8 py-4 text-lg"
        >
          取得联系
        </button>
        <button 
          onClick={() => window.open('https://github.com/lx-Meteors', '_blank')}
          className="bg-white neo-button rounded-2xl p-4"
        >
          <Github size={24} />
        </button>
      </div>
    </div>
  </section>
);

const About = () => (
  <div className="space-y-0">
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-6xl font-black italic">
            我是 <span className="text-neo-blue">流星🌠</span>，<br />
            一位致力于AI学习的<br />
            大模型研究员。
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>你好，我是Meteor。我曾服役于武警天津市总队机动支队。目前，我是东北大学自然语言处理实验室的研究生，导师是肖桐教授。我的研究方向主要集中在文本压缩领域，包括但不限于推理链式压缩（CoT压缩）、长上下文压缩及相关领域。如果你对这些话题感兴趣，欢迎与我交流探讨。</p>
            <p>我梦想着建立自己的工作室，最终发展成一家公司，我把它命名为“Meteor导航站”。目前，我运营着一个微信公众号，分享我的个人成长经历。我也期待着硕士毕业后能获得一份有竞争力的薪水。</p>
            <p>我的个人邮箱：lx_meteor_code@163.com</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.open('https://scholar.google.com/citations?user=9nGW0pAAAAAJ&hl=zh-CN', '_blank')}
              className="bg-black text-white neo-button rounded-xl flex items-center gap-2"
            >
              <Download size={18} /> 下载学术简历
            </button>
            <button 
              onClick={() => alert('个人微信：lx-meteor_')}
              className="bg-white neo-button rounded-xl"
            >
              学术咨询
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="neo-card p-0 overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-[4/5] ">
               <img 
                src="img/myself.jpg" 
                alt="About" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-4xl font-black text-center uppercase tracking-tighter italic">我的核心技能</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'NLP / LLM / Compression / Reasoning', value: 95, color: 'bg-neo-blue' },
            { label: '大模型训练 / 微调 / 强化学习', value: 90, color: 'bg-neo-pink' },
            { label: 'Python / PyTorch', value: 92, color: 'bg-neo-yellow' },
            { label: 'Agent / Vibe Coding', value: 88, color: 'bg-neo-green' }
          ].map((skill, i) => (
            <div key={i} className="neo-card">
              <div className="flex justify-between font-black mb-4">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-6 bg-white neo-border rounded-full overflow-hidden p-1">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${skill.color} neo-border border-0 rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-4xl font-black uppercase italic">个人历程</h3>
        <div className="relative pl-8 border-l-8 border-black space-y-12">
          {[
            { date: '2025 - 至今', role: 'Master 大模型研究员', company: 'NEU NLP Lab' },
            { date: '2021 - 2025', role: 'Senior Web开发', company: 'HLJU CSTI WEB' },
            { date: '2019 - 2021', role: '战士 步枪手', company: '武警天津市总队机动支队' }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[44px] top-4 w-8 h-8 bg-black rounded-full neo-border border-white" />
              <div className="neo-card">
                <span className="text-neo-pink font-bold">{item.date}</span>
                <h4 className="text-2xl font-black mt-2">{item.role}</h4>
                <p className="font-bold text-gray-500 mb-4">{item.company}</p>
                  <p className="text-gray-600">
                    {i === 0 && '面对不断涌现的信息，尝试回到对AI本质的思考。'}
                    {i === 1 && '在不断实践中打磨技术，把想法一步步变成真实的产品。'}
                    {i === 2 && '一段塑造性格的经历，让我学会自律、坚持与面对压力。'}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </div>
);

const Articles = () => (
  <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-16">
    <div className="space-y-6">
      <h2 className="text-7xl font-black flex items-center gap-4">
        我的 
        <span className="bg-neo-blue text-white px-6 py-2 rounded-[2rem] neo-border inline-block">
          文章
        </span>
      </h2>
      <p className="text-gray-600 text-xl font-medium">. 关于 AI、大模型和个人成长感悟的随笔</p>
      <a 
        href="https://mp.weixin.qq.com/s/example1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white neo-border px-6 py-2 rounded-full font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
      >
        Meteor导航站： <span className="text-gray-500">流星成长故事</span>
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ARTICLES.map((article) => (
        <a 
          key={article.id} 
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white neo-border rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="relative h-64 overflow-hidden border-b-4 border-black">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute top-4 left-4 bg-neo-yellow neo-border px-3 py-1 rounded-lg font-black text-xs">
              {article.date}
            </div>
          </div>
          <div className="p-8 space-y-4">
            <div className="text-xs font-bold text-gray-400 flex items-center gap-2">
              <span>{article.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="text-xl font-black leading-tight group-hover:text-neo-blue transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2">
              {article.excerpt}
            </p>
            <div className="pt-2 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              阅读全文 <span className="text-lg">→</span>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="flex justify-center pt-8">
      <button 
        onClick={() => window.open('https://mp.weixin.qq.com/s/example1', '_blank')}
        className="bg-black text-white neo-button rounded-2xl text-xl px-12 py-5 flex items-center gap-3"
      >
        在微信公众号查看更多文章 <ChevronRight size={24} />
      </button>
    </div>

    <div className="bg-neo-yellow neo-border rounded-[3rem] p-16 text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="space-y-4">
        <h3 className="text-4xl font-black">订阅我的研究动态</h3>
        <p className="text-black/70 font-bold">
          关注我的微信公众号「Meteor导航站」，了解我的成长故事 | 获取最新 AI 动态。
        </p>
      </div>
      <div className="bg-white neo-border w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img 
          src="img/qrcode.jpg" 
          alt="微信公众号二维码" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', 'Papers', '网页开发'];
  
  const filteredProjects = filter === '全部' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h2 className="text-6xl font-black italic">我的 <span className="text-neo-pink">作品集</span></h2>
        <p className="text-gray-600">这里展示的是我自己的一些探索与创作，每一件作品都是思考、尝试与实践的结果。</p>
        <p className="text-gray-600">希望通过它们，让你看到我在技术、设计与思维上的一些尝试，同时也期待与志同道合的人交流、碰撞更多的可能。</p>
      </div>

      <div className="flex flex-wrap gap-4 border-b-4 border-black pb-8">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`neo-button rounded-full text-sm ${filter === c ? 'bg-black text-white' : 'bg-white'}`}
          >
            {c}
          </button> 
        ))}
      </div>    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              className="neo-card p-0 overflow-hidden group block cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white neo-border px-3 py-1 rounded-lg font-bold text-[10px] uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-white border-t-4 border-black">
                <h3 className="text-xl font-black">{project.title}</h3>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center neo-border border-white group-hover:bg-neo-pink transition-colors">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t-8 border-black py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center neo-border border-white">
          <span className="text-white font-black text-xl">🌠</span>
        </div>
        <span className="text-2xl font-black">流星 Meteor</span>
      </div>
      
      <div className="flex gap-8 font-black uppercase text-sm">
        <a href="https://github.com/lx-Meteors" target="_blank" rel="noopener noreferrer" className="hover:text-neo-blue transition-colors">Github</a>
        <a href="https://mp.weixin.qq.com/s/example1" target="_blank" rel="noopener noreferrer" className="hover:text-neo-pink transition-colors">Meteor导航站</a>
        <button onClick={() => window.open('https://github.com/lx-Meteors', '_blank')} className="hover:text-neo-green transition-colors uppercase">邮件</button>
      </div>

      <div className="text-gray-500 font-bold text-sm">
        © 2026 流星工作室。保留所有权利。
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="min-h-screen selection:bg-neo-yellow selection:text-black">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'home' && (
              <>
                <Hero />
                <Services />
                <section className="py-20 px-6 max-w-7xl mx-auto">
                  <div className="neo-card bg-white p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neo-pink -translate-y-1/2 translate-x-1/2 rotate-45 neo-border" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-neo-blue translate-y-1/2 -translate-x-1/2 -rotate-12 neo-border" />
                    
                    <div className="flex-1 space-y-6 z-10">
                      <h2 className="text-5xl font-black leading-tight">
                        展示 <br />
                        <span className="bg-neo-yellow px-2 neo-border">我的创作</span> 作品
                      </h2>
                      <p className="text-gray-600 text-lg">
                        这里汇集了我个人的探索与实践，每件作品都是对思考、技术和可能性的尝试。。
                      </p>
                      <button className="bg-black text-white neo-button rounded-xl">查看我的项目</button>
                    </div>
                    
                    <div className="flex-1 w-full lg:w-auto z-10">
                      <div className="neo-card bg-white p-4 space-y-4 border-neo-pink">
                        <div className="h-4 bg-black rounded-full w-3/4" />
                        <div className="h-4 bg-gray-200 rounded-full w-full" />
                        <div className="bg-neo-yellow h-24 rounded-2xl neo-border" />
                        <div className="flex gap-4">
                          <div className="bg-neo-blue h-10 flex-1 rounded-xl neo-border" />
                          <div className="bg-neo-green h-10 flex-1 rounded-xl neo-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
            {activeSection === 'about' && <About />}
            {activeSection === 'articles' && <Articles />}
            {activeSection === 'portfolio' && <Portfolio />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
