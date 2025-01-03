import Link from 'next/link'
import { Button } from "@/components/ui/button"
import BlogPost from './blog-post'

export default function BlogSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogPost
          title="Advancements in Few-Shot Learning for NLP Tasks"
          excerpt="Exploring recent breakthroughs in few-shot learning and their implications for natural language processing applications."
          date="2023-05-15"
          slug="few-shot-learning-nlp"
        />
        <BlogPost
          title="Ethical Considerations in AI-Powered Decision Making Systems"
          excerpt="Examining the ethical challenges and potential solutions in developing AI systems for critical decision-making processes."
          date="2023-04-28"
          slug="ethical-considerations-ai-decision-making"
        />
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" asChild>
          <Link href="/blog">View all posts</Link>
        </Button>
      </div>
    </section>
  )
} 