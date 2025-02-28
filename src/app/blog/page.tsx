import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import Footer from '@/components/footer'
import BlogPost from '@/components/blog-post'
import Image from 'next/image'

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "few-shot-learning-nlp",
    title: "Advancements in Few-Shot Learning for NLP Tasks",
    date: "2023-05-15",
    author: "Dr. Prateek Gupta",
    excerpt: "Exploring recent breakthroughs in few-shot learning and their implications for natural language processing applications in educational contexts.",
    coverImage: "/blog/few-shot-learning.jpg",
    tags: ["NLP", "Few-Shot Learning", "AI Research"]
  },
  {
    slug: "ethical-considerations-ai-decision-making",
    title: "Ethical Considerations in AI-Powered Decision Making Systems",
    date: "2023-04-28",
    author: "Piyush Ahuja",
    excerpt: "Examining the ethical challenges and potential solutions in developing AI systems for critical decision-making processes in educational settings.",
    coverImage: "/blog/ethical-ai.jpg",
    tags: ["Ethics", "AI", "Education"]
  },
  {
    slug: "future-of-educational-ai",
    title: "The Future of Educational AI: Trends and Predictions",
    date: "2023-03-10",
    author: "Dr. Amr Gomma",
    excerpt: "Analyzing emerging trends in AI for education and making predictions about how these technologies will shape learning experiences in the coming years.",
    coverImage: "/blog/future-ai-education.jpg",
    tags: ["Future Trends", "EdTech", "AI"]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg mb-12">
          Insights, analyses, and perspectives on AI innovations, educational technology, 
          and the future of learning from our team of researchers and engineers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <article className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{post.author}</span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
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

