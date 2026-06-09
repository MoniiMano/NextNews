import { Article, LatestHeadline } from "./types";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "global-leaders-climate-deadline",
    title: "Global Leaders Convene as Climate Deadline Looms",
    excerpt:
      "Delegates from over 190 nations gathered this week to negotiate sweeping emissions targets, as scientists warn the window to avert irreversible damage is rapidly closing.",
    content: `Delegates from over 190 nations gathered this week in a critical summit to negotiate sweeping emissions reduction targets. Scientists warn that the window to avert irreversible climate damage is rapidly closing, with key metrics showing alarming trends in global temperature increases.

When Speed Meets Scrutiny

The conference marked a pivotal moment in international climate negotiations, with major economies committing to ambitious renewable energy transition plans. Climate experts emphasized the need for immediate action, noting that delays in implementation could significantly impact global ecosystems.

"The decisions made in the next twelve months will define the trajectory of our planet for generations."

Key agreements include commitments to phase out coal usage by 2035 and transition to 100% renewable energy by 2050. The summit also established new funding mechanisms to support developing nations in their climate transition efforts.`,
    category: "WORLD",
    author: "Elena Marsh",
    publishedAt: "May 23, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Global climate summit conference",
    readingTime: 8,
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "2",
    slug: "quiet-revolution-ai-chip-foundries",
    title: "The Quiet Revolution Inside AI Chip Foundries",
    excerpt:
      "A new generation of semiconductors promises to reshape how data centers consume power across the globe.",
    content: `The semiconductor industry is experiencing a transformative period as new chip architectures emerge to power artificial intelligence applications. Leading foundries are investing billions in cutting-edge manufacturing facilities to produce the next generation of AI processors.

When Speed Meets Scrutiny

These specialized chips are designed to optimize machine learning workloads while significantly reducing power consumption. The efficiency gains could translate to substantial cost savings for data center operators worldwide.

"Every watt saved at the chip level compounds across millions of servers," noted Marcus Chen, semiconductor analyst at Meridian Research.

Competition among chip manufacturers is intensifying, with multiple companies racing to develop superior architectures. Industry analysts predict this competition will accelerate innovation in the AI computing space.`,
    category: "TECH",
    author: "Eleanor Hayes",
    publishedAt: "June 10, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Advanced semiconductor chip",
    readingTime: 6,
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: "3",
    slug: "markets-rally-central-banks",
    title: "Markets Rally as Central Banks Signal Rate Pause",
    excerpt:
      "Investors cheered fresh inflation data, sending major indices to record highs in early trading.",
    content: `Financial markets experienced significant gains following positive economic indicators from major central banks. Recent inflation data came in lower than expected, prompting speculation about a potential pause in interest rate increases.

Investors responded positively to the news, with stock indices climbing to record levels. Bond markets also reflected the optimism, with yields declining across multiple maturities.

Analysts suggest this market movement reflects growing confidence in the effectiveness of monetary policy measures implemented over the past year.`,
    category: "BUSINESS",
    author: "Sarah Mitchell",
    publishedAt: "June 11, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1526628653108-92e7e01d3a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Stock market trading floor",
    readingTime: 5,
  },
  {
    id: "4",
    slug: "modern-art-exhibition-retrospective",
    title: "Inside the Year's Most Talked-About Retrospective",
    excerpt:
      "A sprawling new exhibition reframes a forgotten movement for a contemporary audience.",
    content: `A major retrospective exhibition has opened at the city's premier art institution, showcasing the work of a visionary artist whose influence shaped modern art. The exhibition draws together over 150 works spanning multiple decades.

Curators blended immersive technology with classic artworks to create an engaging experience that resonates with contemporary audiences.`,
    category: "CULTURE",
    author: "James Richardson",
    publishedAt: "June 9, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1578926314433-90ac9b3a1f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Modern art gallery exhibition",
    readingTime: 7,
  },
  {
    id: "5",
    slug: "chipmakers-race-ai-era",
    title: "AI Chipmakers Race to Power the Next Computing Era",
    excerpt:
      "A new generation of processors promises to reshape data centers as demand for machine learning infrastructure surges worldwide.",
    content: `Semiconductor manufacturers are experiencing unprecedented demand for specialized AI chips, driving expansion plans across multiple regions.`,
    category: "TECH",
    author: "Daniel Cho",
    publishedAt: "May 13, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1520591497918-21cea50fade4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Semiconductor manufacturing",
    readingTime: 6,
  },
  {
    id: "6",
    slug: "markets-steady-turbulent-trading",
    title: "Markets Steady After a Turbulent Trading Week",
    excerpt:
      "Investors weigh interest rate signals as major indices recover from early losses across the board.",
    content: `Financial markets showed resilience following a volatile trading week characterized by conflicting economic signals.`,
    category: "BUSINESS",
    author: "Emily Watson",
    publishedAt: "June 7, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Stock market chart",
    readingTime: 5,
  },
  {
    id: "7",
    slug: "art-galleries-reimagine-exhibition",
    title: "Galleries Reimagine the Modern Exhibition",
    excerpt:
      "Curators blend immersive technology with classic works to draw a new generation of visitors.",
    content: `Museums and galleries are experimenting with innovative exhibition designs that combine traditional artworks with modern presentation techniques.`,
    category: "CULTURE",
    author: "Victoria Blake",
    publishedAt: "June 6, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80",
    imageAlt: "Art gallery interior",
    readingTime: 4,
  },
];

export const editorPicks: Article[] = [
  {
    id: "ep1",
    slug: "cities-rethinking-skyline",
    title: "How Cities Are Rethinking the Skyline",
    excerpt:
      "Urban planners are embracing vertical gardens and mixed-use towers to reshape metropolitan landscapes.",
    category: "URBAN",
    author: "Rachel Kim",
    publishedAt: "May 20, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Modern city skyline",
    readingTime: 5,
  },
  {
    id: "ep2",
    slug: "movement-reshaping-policy",
    title: "The Movement Reshaping Policy from the Streets",
    excerpt:
      "Grassroots climate activists are forcing governments to accelerate emissions targets.",
    category: "CLIMATE",
    author: "Tom Bradley",
    publishedAt: "May 18, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Climate protest",
    readingTime: 6,
  },
  {
    id: "ep3",
    slug: "breakthrough-lab-results",
    title: "Breakthrough Lab Results Challenge Old Theories",
    excerpt:
      "New findings in molecular biology are upending decades of established scientific consensus.",
    category: "SCIENCE",
    author: "Dr. Lisa Park",
    publishedAt: "May 15, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9db881cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Scientist in laboratory",
    readingTime: 7,
  },
  {
    id: "ep4",
    slug: "telescope-deepest-view",
    title: "New Telescope Captures the Deepest View Yet",
    excerpt:
      "Astronomers reveal stunning images from the edge of the observable universe.",
    category: "SPACE",
    author: "James Ortega",
    publishedAt: "May 12, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Deep space nebula",
    readingTime: 5,
  },
];

export const latestHeadlines: LatestHeadline[] = [
  { id: "l1", title: "Global Leaders Convene as Climate Deadline Looms", slug: "global-leaders-climate-deadline" },
  { id: "l2", title: "The Quiet Revolution Inside AI Chip Foundries", slug: "quiet-revolution-ai-chip-foundries" },
  { id: "l3", title: "Markets Rally as Central Banks Signal Rate Pause", slug: "markets-rally-central-banks" },
  { id: "l4", title: "Inside the Year's Most Talked-About Retrospective", slug: "modern-art-exhibition-retrospective" },
];

export const mobileCategoryFilters = [
  { label: "Top Stories", value: "HOME" },
  { label: "Politics", value: "WORLD" },
  { label: "Science", value: "TECH" },
  { label: "Health", value: "BUSINESS" },
  { label: "Culture", value: "CULTURE" },
];

export const categoriesNav = [
  { label: "Home", href: "/" },
  { label: "World", href: "/?category=WORLD" },
  { label: "Tech", href: "/?category=TECH" },
  { label: "Business", href: "/?category=BUSINESS" },
  { label: "Culture", href: "/?category=CULTURE" },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  const fromMain = mockArticles.find((article) => article.slug === slug);
  if (fromMain) return fromMain;
  return editorPicks.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (category?: string): Article[] => {
  if (!category || category === "HOME") return mockArticles;
  return mockArticles.filter((article) => article.category === category);
};
