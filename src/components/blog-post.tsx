import Link from 'next/link'

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  slug?: string;
}

export default function BlogPost({ title, excerpt, date, slug }: BlogPostProps) {
  // Convert title to slug if none provided
  const postSlug = slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  
  return (
    <Link href={`/blog/${postSlug}`} className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <article>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{excerpt}</p>
        <time className="text-sm text-slate-500">{date}</time>
      </article>
    </Link>
  )
}

