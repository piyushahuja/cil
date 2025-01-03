import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import ApproachSection from '@/components/approach-section'
import CaseStudiesSection from '@/components/case-studies-section'
import TeamSection from '@/components/team-section'
import BlogSection from '@/components/blog-section'
import ClientStoriesSection from '@/components/client-stories-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <ApproachSection />
        <CaseStudiesSection />
        <TeamSection />
        {/* <BlogSection /> */}
        <ClientStoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

