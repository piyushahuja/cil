import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AIDialogueModeratorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">AI Dialogue Moderator for Smart Learning</h1>
          <p className="text-xl mb-8">A case study in AI-powered educational discussion facilitation</p>
          
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            {/* <Image
              src="/case-studies/dialogue-moderator.jpg"
              alt="AI Dialogue Moderator interface"
              fill
              className="object-cover"
            /> */}
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
            <p className="mb-4">
              Smart Learning, a leading educational technology provider in Denmark, needed a solution to facilitate 
              meaningful group discussions in online classroom settings. Traditional discussion forums lacked the 
              guidance and structure needed to keep conversations productive and on-topic, while manual moderation 
              was too resource-intensive for teachers.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Solution</h2>
            <p className="mb-4">
              We developed an API-based dialogue moderation system powered by Large Language Models that:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Enables administrators to create topic-specific dialogues</li>
              <li>Allows customizable moderation profiles to guide the LLM's behavior</li>
              <li>Provides real-time feedback and guidance to keep discussions productive</li>
              <li>Summarizes key points and insights from discussions</li>
              <li>Integrates seamlessly with existing learning management systems</li>
            </ul>
            
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold mb-4">Technical Architecture</h3>
              <div className="relative w-full h-[300px] mb-4">
                {/* <Image
                  src="/case-studies/dialogue-moderator-architecture.png"
                  alt="System architecture diagram"
                  fill
                  className="object-contain"
                /> */}
              </div>
              <p>
                The system uses a microservices architecture with a React frontend, Node.js backend, 
                and integrates with OpenAI's GPT models through a custom prompt engineering layer.
              </p>
              <p className="mt-2">
                <Link href="https://github.com/cambridge-innovation-labs/dialogue-moderator" 
                  className="text-blue-600 hover:underline flex items-center" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View GitHub Repository
                </Link>
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">40%</h3>
                <p>Increase in student participation</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">25%</h3>
                <p>Improvement in knowledge retention</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">60%</h3>
                <p>Reduction in off-topic discussions</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
              <blockquote className="italic border-l-4 border-blue-500 pl-4">
                "Cambridge Innovation Labs' AI Dialogue Moderator has transformed our online courses. 
                Students are more engaged, and we've seen a significant improvement in learning outcomes. 
                The system's ability to guide discussions while allowing natural conversation flow has been 
                invaluable for our teachers and students alike."
                <footer className="mt-2 font-medium not-italic">
                  — Lars Jensen, CTO at Smart Learning
                </footer>
              </blockquote>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
            <p className="mb-4">
              Interested in how our AI Dialogue Moderator could benefit your educational platform?
            </p>
            <Link href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in touch
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
} 