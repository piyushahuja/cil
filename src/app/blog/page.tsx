import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogPost from '@/components/blog-post'

const blogPosts = [
  {
    title: "Advancements in Few-Shot Learning for NLP Tasks",
    excerpt: "Exploring recent breakthroughs in few-shot learning and their implications for natural language processing applications.",
    date: "2023-05-15",
    slug: "few-shot-learning-nlp"
  },
  {
    title: "Ethical Considerations in AI-Powered Decision Making Systems",
    excerpt: "Examining the ethical challenges and potential solutions in developing AI systems for critical decision-making processes.",
    date: "2023-04-28",
    slug: "ethical-considerations-ai-decision-making"
  },
  {
    title: "The Future of Automated Manufacturing: AI and Robotics",
    excerpt: "Analyzing the impact of AI and robotics on the future of manufacturing and the potential for increased efficiency and productivity.",
    date: "2023-04-10",
    slug: "future-automated-manufacturing"
  },
  {
    title: "Explainable AI: Making Black Box Models Transparent",
    excerpt: "Discussing the importance of explainable AI and techniques for making complex machine learning models more interpretable.",
    date: "2023-03-22",
    slug: "explainable-ai-transparent-models"
  },
  {
    title: "The Role of AI in Cybersecurity: Threats and Opportunities",
    excerpt: "Exploring how AI is being used to both enhance cybersecurity measures and create new types of cyber threats.",
    date: "2023-03-05",
    slug: "ai-cybersecurity-threats-opportunities"
  },
  {
    title: "Reinforcement Learning in Robotics: Recent Advances",
    excerpt: "Examining the latest developments in applying reinforcement learning techniques to robotic systems for improved adaptability and performance.",
    date: "2023-02-18",
    slug: "reinforcement-learning-robotics"
  },
  {
    title: "AI in Healthcare: Revolutionizing Diagnosis and Treatment",
    excerpt: "Analyzing the impact of AI on healthcare, from improving diagnostic accuracy to personalizing treatment plans.",
    date: "2023-02-01",
    slug: "ai-healthcare-diagnosis-treatment"
  },
  {
    title: "The Challenges of Implementing AI in Legacy Systems",
    excerpt: "Discussing strategies and best practices for integrating AI technologies into existing legacy systems and infrastructure.",
    date: "2023-01-15",
    slug: "ai-implementation-legacy-systems"
  },
  {
    title: "Natural Language Processing and the Future of Human-Computer Interaction",
    excerpt: "Exploring how advancements in NLP are shaping the way we interact with computers and digital assistants.",
    date: "2023-01-02",
    slug: "nlp-future-human-computer-interaction"
  },
  {
    title: "AI-Powered Predictive Maintenance: Reducing Downtime and Costs",
    excerpt: "Examining how AI is being used to predict equipment failures and optimize maintenance schedules in various industries.",
    date: "2022-12-20",
    slug: "ai-predictive-maintenance"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

