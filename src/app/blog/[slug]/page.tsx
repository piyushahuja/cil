import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <time className="text-sm text-slate-500">{post.date}</time>
          <div dangerouslySetInnerHTML={{ __html: require('marked').marked(post.content) }} />
        </article>
      </main>
      <Footer />
    </div>
  )
} 