interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  url: string;
}

interface AuthorPublications {
  name: string;
  publications: Publication[];
}

const publicationsByAuthor: AuthorPublications[] = [
  {
    name: "Dr. Piyush Ahuja",
    publications: [
      {
        title: "Dialogue Moderation in Educational Settings Using Large Language Models",
        authors: ["Ahuja, P.", "Smith, J.", "Johnson, K."],
        journal: "Journal of Educational Technology",
        year: 2023,
        url: "https://example.com/publication1"
      },
      {
        title: "Peer Learning Networks: A Computational Approach to Skill Matching",
        authors: ["Ahuja, P.", "Williams, R."],
        journal: "International Conference on AI in Education",
        year: 2022,
        url: "https://example.com/publication2"
      }
    ]
  },
  {
    name: "Dr. Amr Gomma",
    publications: [
      {
        title: "Multimodal Interactions in Educational AI Systems",
        authors: ["Gomma, A.", "Chen, L.", "Ahuja, P."],
        journal: "IEEE Transactions on Learning Technologies",
        year: 2023,
        url: "https://example.com/publication3"
      }
    ]
  },
  {
    name: "Dr. Prateek Gupta",
    publications: [
      {
        title: "Human-Machine Co-evolution in Educational Contexts",
        authors: ["Gupta, P.", "Ahuja, P.", "Miller, S."],
        journal: "Nature Machine Intelligence",
        year: 2022,
        url: "https://example.com/publication4"
      },
      {
        title: "Deep Learning Approaches to Scientific Discovery in Education",
        authors: ["Gupta, P.", "Zhang, Y."],
        journal: "AI for Science Conference",
        year: 2023,
        url: "https://example.com/publication5"
      }
    ]
  }
];

export default function Publications() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Publications</h2>
      <div className="space-y-8">
        {publicationsByAuthor.map((author) => (
          <div key={author.name} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">{author.name}</h3>
            <ul className="space-y-4">
              {author.publications.map((pub) => (
                <li key={pub.title} className="border-l-4 border-blue-500 pl-4">
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-blue-600"
                  >
                    {pub.title}
                  </a>
                  <p className="text-sm text-gray-600">
                    {pub.authors.join(", ")} ({pub.year})
                  </p>
                  <p className="text-sm italic">{pub.journal}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 