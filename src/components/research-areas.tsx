import Image from 'next/image'
import Link from 'next/link'

interface ResearchArea {
  title: string;
  description: string;
  image: string;
  relatedLinks: {
    title: string;
    url: string;
  }[];
}

const researchAreas: ResearchArea[] = [
  {
    title: "AI in Education",
    description: "We explore how large language models can be adapted to educational contexts to provide meaningful interactions and support for learners. We currently have two systems in production: Platonia and Dialogue Moderator. ",
    image: "/edu.jpeg",
    relatedLinks: [
      {
        title: "Dialogue Moderator Case Study",
        url: "/case-studies/ai-dialogue-moderator"
      },
      {
        title: "Learning Web",
        url: "https://www.deficambridge.org/platonia-the-first-worldwide-learning-web/"
      }
    ]
  },
  {
    title: "AI and Enterprise Data",
    description: "Our enterprise AI agent automates data cleaning by performing subjective evaluation and context-specific interpretation - tasks that have always require domain knowledge and human intervention. Existing tools either rigidly follow human-engineered rules or simply export data cleaning to expensive human teams. DataKleen is an intelligent, scalable, adaptive agent that integrates with legacy systems.",
    image: "/cleaning.jpeg",
    relatedLinks: [
      {
        title: "Can Foundation Models Wrangle Your Data?",
        url: "https://arxiv.org/abs/2205.09911"
      },
      {
        title: "AI Data Cleaner Demo",
        url: "https://datakleen.com/demo//"
      }
    ]
  },
  {
    title: "Automated Theorem Proving",
    description: "Currently in stealth",
    image: "/theorem.jpg",
    relatedLinks: [
      {
        title: "Automated Theorem Proving Project",
        url: "/case-studies/automated-theorem-proving"
      }
    ]
  }
];

export default function ResearchAreas() {
  return (
    <section className="mb-16">

      <div className="space-y-12">
        {researchAreas.map((area, index) => (
          <div key={area.title} className={`flex flex-col gap-8`}>
            {/* <div className="md:w-1/3 relative h-64">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover rounded-lg"
              />
            </div> */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
              <p className="mb-4">{area.description}</p>
              {area.relatedLinks.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Links:</h4>
                  <ul className="list-disc pl-5">
                    {area.relatedLinks.map(link => (
                      <li key={link.title}>
                        <Link href={link.url} className="text-blue-600 hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 