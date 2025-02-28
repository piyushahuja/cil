import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/contact-section'
import PartnersSection from '@/components/partners-section'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      
      {/* Hero Section with Cambridge Background */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cam.jpeg"
            alt="Cambridge University"
            fill
            className="object-cover object-top brightness-[0.3] opacity-99"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
               Cambridge Innovation Labs
            </h1>
            <p className="text-xl mb-8">
              We are a group of researchers and engineers that specialize in novel applications of AI. Our current projects span the use of AI in education, enterprise data, automated theorem proving, and robotics. 
              
            </p>
            <Link 
              href="#what-we-do" 
              className="inline-block border border-white px-6 py-3 font-medium hover:bg-white hover:text-slate-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Research</h3>
              <p className="text-gray-700">
                We collaborate with research groups across Cambridge and around the world. Our teams has published in top conferences and journals. 
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Development</h3>
              <p className="text-gray-700">
                We develop AI-driven tools and applications. We work with the entire stack: from advanced model architectures to neat prompt engineering.  Our projects include dialogue moderation systems, learning web, and enterprise data cleaning tailored for diverse industry needs  
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Collaboration</h3>
              <p className="text-gray-700">
                We partner with educational institutions and enterprises clients to integrate AI solutions into real-world applications, with a focus on performance, accuracy, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Highlight */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Project</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/moderator.jpeg"
                  alt="AI Dialogue Moderator"
                  className="object-cover"
                  width={640} // Specify desired width
                  height={360} // Specify desired height
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">AI Dialogue Moderator</h3>
                <p className="text-gray-700 mb-6">
                  Our AI Dialogue Moderator helps facilitate productive educational discussions by providing 
                  real-time guidance, ensuring balanced participation, and promoting deeper engagement with 
                  learning materials.
                </p>
                <Link 
                  href="/case-studies/ai-dialogue-moderator" 
                  className="text-blue-600 hover:underline"
                >
                  Read the case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      {/* <PartnersSection /> */}
      
      {/* Subtle Contact Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-4">
            Interested in working with us? We'd love to hear from you.
          </p>
          <a 
            href="mailto:contact@cambridgeinnovationlabs.com" 
            className="text-blue-600 hover:underline"
          >
            cambridgeinnovationlabs@gmail.com
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

