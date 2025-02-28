import Header from '@/components/header'
import Footer from '@/components/footer'
import ResearchAreas from '@/components/research-areas'
import Publications from '@/components/publications'
import Partners from '@/components/partners-section'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Research Areas & Focus</h1>
        <ResearchAreas />
        {/* <Publications /> */}
        {/* <Partners /> */}
      </main>
      <Footer />
    </div>
  )
} 