import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Cambridge Innovation Labs',
  description: 'Insights, analyses, and perspectives on AI innovations, educational technology, and the future of learning',
}

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
    slug: "robotics",
    title: "The Frontiers of Robotics",
    date: "2024-05-15",
    author: "Piyush Ahuja",
    excerpt: "",
    coverImage: "theorem.jpg",
    tags: ["Robotics"]
  },
  // {
  //   slug: "ethical-considerations-ai-decision-making",
  //   title: "Ethical Considerations in AI-Powered Decision Making Systems",
  //   date: "2023-04-28",
  //   author: "Piyush Ahuja",
  //   excerpt: "Examining the ethical challenges and potential solutions in developing AI systems for critical decision-making processes in educational settings.",
  //   coverImage: "/blog/ethical-ai.jpg",
  //   tags: ["Ethics", "AI", "Education"]
  // },
  // {
  //   slug: "future-of-educational-ai",
  //   title: "The Future of Educational AI: Trends and Predictions",
  //   date: "2023-03-10",
  //   author: "Dr. Amr Gomma",
  //   excerpt: "Analyzing emerging trends in AI for education and making predictions about how these technologies will shape learning experiences in the coming years.",
  //   coverImage: "/blog/future-ai-education.jpg",
  //   tags: ["Future Trends", "EdTech", "AI"]
  // }
];

export const dynamic = 'force-static'

export default function BlogPage() {
  const currentPage = 1;
  const selectedCategory: string = '';
  
  const filteredPosts = selectedCategory 
    ? (blogPosts as BlogPost[]).filter(post => 
        post.tags.some((tag: string) => tag.toLowerCase() === selectedCategory.toLowerCase())
      )
    : (blogPosts as BlogPost[]);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / 9);
  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg mb-12">
          Insights, analyses, and perspectives on AI innovations, educational technology, 
          and the future of learning from our team of researchers and engineers.
        </p>
        
        {allTags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/blog"
                className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                All
              </Link>
              {allTags.map(tag => (
                <Link
                  key={tag}
                  href={`/blog?category=${tag}`}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === tag ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
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
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Link
                  key={page}
                  href={`/blog?page=${page}${selectedCategory ? `&category=${selectedCategory}` : ''}`}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </nav>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

