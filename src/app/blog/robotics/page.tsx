import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function FewShotLearningRoboticsBlogPost() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
            ← Back to all posts
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">The Frontiers of Robotics</h1>
            <div className="flex justify-between items-center text-gray-600">
              <span>By Piyush Ahuja</span>
              <span>May 15, 2024</span>
            </div>
          </div>
          
          {/* <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="/theorem.jpg"
              alt="Few-Shot Learning in Robotics"
              fill
              className="object-cover"
            />
          </div> */}
         
        </article>
      </main>
      <Footer />
    </div>
  )
} 