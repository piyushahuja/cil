import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

interface ResourceSection {
  title: string;
  description: string;
  path: string;
  featuredItems: {
    title: string;
    date?: string;
    excerpt: string;
    link: string;
  }[];
}

const resourceSections: ResourceSection[] = [
  {
    title: "Research",
    description: "Explore our research areas, academic publications, and ongoing projects in AI for education and learning.",
    path: "/research",
    featuredItems: [
      {
        title: "AI in Education",
        excerpt: "Our research focuses on developing AI systems that enhance educational experiences through personalized learning, automated feedback, and intelligent tutoring systems.",
        link: "/research#ai-in-education"
      },
      {
        title: "Natural Language Processing for Learning",
        excerpt: "We investigate how NLP techniques can be applied to analyze and enhance educational discourse and provide automated feedback.",
        link: "/research#nlp-learning"
      }
    ]
  },
  {
    title: "Blog",
    description: "Read our latest thoughts, insights, and analyses on AI innovations, educational technology, and the future of learning.",
    path: "/blog",
    featuredItems: [
      {
        title: "Advancements in Few-Shot Learning for NLP Tasks",
        date: "2023-05-15",
        excerpt: "Exploring recent breakthroughs in few-shot learning and their implications for natural language processing applications.",
        link: "/blog/few-shot-learning-nlp"
      },
      {
        title: "Ethical Considerations in AI-Powered Decision Making Systems",
        date: "2023-04-28",
        excerpt: "Examining the ethical challenges and potential solutions in developing AI systems for critical decision-making processes.",
        link: "/blog/ethical-considerations-ai-decision-making"
      }
    ]
  },
  {
    title: "In The News",
    description: "Stay updated with the latest media coverage, press releases, and announcements about Cambridge Innovation Labs.",
    path: "/news",
    featuredItems: [
      {
        title: "Cambridge Innovation Labs Launches AI Dialogue Moderator for Educational Settings",
        date: "2023-09-15",
        excerpt: "Cambridge Innovation Labs has unveiled a new AI-powered dialogue moderation system designed to enhance online learning experiences.",
        link: "/news#2023"
      },
      {
        title: "AI in Education: Cambridge Innovation Labs Partners with Smart Learning",
        date: "2023-07-22",
        excerpt: "Cambridge Innovation Labs and Smart Learning announce a strategic partnership to develop AI-powered educational tools.",
        link: "/news#2023"
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <p className="text-lg mb-12">
          Explore our collection of research publications, blog posts, news coverage, and other resources 
          related to our work in AI innovations for education and learning.
        </p>
        
        <div className="space-y-16">
          {resourceSections.map((section) => (
            <section key={section.title} className="border-b pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                <Link 
                  href={section.path} 
                  className="text-blue-600 hover:underline mt-2 md:mt-0"
                >
                  View all {section.title.toLowerCase()} →
                </Link>
              </div>
              
              <p className="text-lg mb-8">{section.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.featuredItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={item.link} className="hover:text-blue-600">
                        {item.title}
                      </Link>
                    </h3>
                    {item.date && (
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    )}
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <Link 
                      href={item.link} 
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
} 