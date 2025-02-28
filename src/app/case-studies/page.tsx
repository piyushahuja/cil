import Header from '@/components/header'
import Footer from '@/components/footer'
import CaseStudy from '@/components/case-study'
import Link from 'next/link'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        <p className="text-lg mb-8">
          Explore our portfolio of successful AI and automation projects in education and learning.
          Each case study demonstrates our approach to solving complex challenges with innovative technology solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/case-studies/ai-dialogue-moderator" className="block">
            <CaseStudy
              title="AI Dialogue Moderator for Smart Learning"
              description="An API-based dialogue moderation system that uses Large Language Models to facilitate group discussions in classroom settings. The system enables administrators and teachers to create topic-specific dialogues and associate them with customizable moderation profiles that guide the LLM's behavior."
              client={<span className="text-blue-600 hover:underline">Smart Learning</span>}
            />
          </Link>
          
          <Link href="/case-studies/platonia" className="block">
            <CaseStudy
              title="Platonia"
              description="Platonia is a learning network that uses ML algorithms to create connections based on teachable skills and learning requirements. The platform integrates with WhatsApp via a chatbot that handles user onboarding, performs skill-based matching, and automates peer introductions through natural language processing."
              client="Cambridge Connect"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
} 