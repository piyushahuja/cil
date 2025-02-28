import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

interface NewsItem {
  title: string;
  date: string;
  source: string;
  excerpt: string;
  url: string;
  image?: string;
  type: 'media' | 'press-release';
}

const newsItems: NewsItem[] = [
  // {
  //   title: "Cambridge Innovation Labs Launches AI Dialogue Moderator for Educational Settings",
  //   date: "2025-01-15",
  //   source: "EdTech Today",
  //   excerpt: "Cambridge Innovation Labs has unveiled a new AI-powered dialogue moderation system designed to enhance online learning experiences by facilitating meaningful discussions in educational settings.",
  //   url: "https://example.com/edtech-today/cambridge-innovation-labs-launches-ai-dialogue-moderator",
  //   image: "/news/dialogue-moderator-launch.jpg",
  //   type: "media"
  // },
  // {
  //   title: "AI in Education: Cambridge Innovation Labs Partners with Smart Learning",
  //   date: "2024-07-22",
  //   source: "Tech Innovators",
  //   excerpt: "Cambridge Innovation Labs and Smart Learning announce a strategic partnership to develop AI-powered educational tools that aim to transform online learning experiences.",
  //   url: "https://example.com/tech-innovators/cambridge-innovation-labs-partners-with-smart-learning",
  //   image: "/news/partnership-announcement.jpg",
  //   type: "media"
  // },
 
  {
    title: "Our team wins the Grand Prize in London AI Interpretibility Hackathon",
    date: "2025-01-18",
    source: "Society for Technological Advancement",
    excerpt: "They made an agent system work for automatic interpretations of neurons.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7287150457280450561/",
    image: "/sota.jpg",
    type: "media"
  },
  {
    title: "Platonia unveiled at Cambridge GenAI Conference",
    date: "2024-05-26",
    image: "/conference.jpg",
    source: "Digital Education Futures Initiative",
    excerpt: "We caused quite a buzz in the EdTech Developers showcase in AI-Powered Pedagogy : Designing the Future of Education, where we showcased the first version of Platonia ",
    url: "https://deficambridge.glueup.com/event/ai-powered-pedagogy-designing-the-future-of-education-101394/",
    type: "media"
  },
  {
    title: "Cambridge Innovation Labs Awarded Innovate UK Grant for Learning Web",
    date: "2024-03-06",
    source: "Business Weekly",
    excerpt: "We are pleased to announce that Cambridge Innovation Labs has been awarded a research grant to further develop AI technologies for educational applications.",
    url: "https://www.businessweekly.co.uk/posts/cambridge-entrepreneur-backed-by-innovate-uk-to-build-the-first-worldwide-learning-web",
    type: "press-release"
  },
];

export default function NewsPage() {
  // Group news items by year
  const newsItemsByYear = newsItems.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<number, NewsItem[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(newsItemsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">In The News</h1>
        <p className="text-lg mb-8">
          Stay updated with the latest media coverage, press releases, and announcements 
          about Cambridge Innovation Labs
        </p>
        
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">All</button>
            <button className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow">Media Coverage</button>
            <button className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow">Press Releases</button>
          </div>
        </div>
        
        {sortedYears.map(year => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{year}</h2>
            <div className="space-y-8">
              {newsItemsByYear[year].map((item, index) => (
                <article key={index} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {item.image && (
                      <div className="md:w-1/3 relative h-60 md:h-auto">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${item.image ? 'md:w-2/3' : 'w-full'}`}>
                      <div className="flex items-center mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${item.type === 'media' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {item.type === 'media' ? 'Media Coverage' : 'Press Release'}
                        </span>
                        <time className="text-sm text-slate-500 ml-2">{item.date}</time>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-600 mb-4">{item.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.source}</span>
                        <Link 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
} 