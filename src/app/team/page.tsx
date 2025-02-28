import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  links?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Piyush Ahuja",
    role: "CEO + FOUNDER",
    links: {
      twitter: "https://x.com/piyushahuja_in",
      linkedin: "https://www.linkedin.com/in/piyush-ahuja-2006041b/",
      website: "https://piyushahuja.com"
    }
  },

  {
    name: "Prachi Pande",
    role: "MEMBER OF TECHNICAL STAFF",
    links: {
      
    }
  },

  {
    name: "Dr. Nitish Mital",
    role: "MEMBER OF TECHNICAL STAFF",
    links: {
      linkedin: "https://www.linkedin.com/in/nitish-mital-phd-89202647/",
      website: "https://scholar.google.com/citations?user=2ckIQtoAAAAJ&hl=en"
    }
  },

  {
    name: "Dr. Prateek Gupta",
    role: "MEMBER OF TECHNICAL STAFF",
    links: {
      twitter: "https://x.com/pguptacs",
      linkedin: "https://www.linkedin.com/in/link2prateek/",
      website: "https://www.pgupta.info/"
    }
  },

  {
    name: "Dr. Amr Gomma",
    role: "MEMBER OF TECHNICAL STAFF",
    links: {
      linkedin: "https://www.linkedin.com/in/amrgomaaelhady/",
      website: "https://amrgomaaelhady.github.io/"
    }
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <div className="mb-4">
              {/* <span className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium">
                ABOUT
              </span> */}
            </div>
            <h1 className="text-4xl font-bold mb-6">
              Our Mission
            </h1>
            <p className="text-lg mb-8">
              At Cambridge Innovation Labs, our mission is to harness AI to accelerate various sectors: enhancing educational experiences, automating time-consuming enterprise workflows, fostering mathematical discoveries, and enabling robots to perform complex tasks.
            </p>
            <a 
              href="mailto:cambridgeinnovationlab@gmail.com" 
              className="inline-block border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              JOIN THE TEAM →
            </a>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-auto">
            {/* <Image
              src="/team/team-photo.jpg"
              alt="Cambridge Innovation Labs Team"
              fill
              className="object-cover rounded-lg"
            /> */}
          </div>
        </div>
        
 
        
        <h2 className="text-3xl font-bold mb-6">Team</h2>
        
        <div className="mb-6">
          {/* <div className="flex justify-between items-center">
            <p className="text-lg">You?</p>
            <a 
              href="mailto:careers@cambridgeinnovationlabs.com" 
              className="text-blue-500 hover:underline flex items-center"
            >
              CAREERS →
            </a>
          </div> */}
          <hr className="border-gray-200 dark:border-gray-700 my-4" />
        </div>
        
        <ul>
          {teamMembers.map((member) => (
            <li key={member.name} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="font-medium">{member.name}</span>
                  <div className="flex space-x-2 ml-3">
                    {member.links?.twitter && (
                      <Link href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                    )}
                    {member.links?.linkedin && (
                      <Link href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Link>
                    )}
                    {member.links?.website && (
                      <Link href={member.links.website} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{member.role}</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-700 my-4" />
            </li>
          ))}
        </ul>
       
        <div className="mt-24">
          <h2 className="text-xl font-semibold mb-6">Sponsored by</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <Image src="/iuk.png" alt="Innovate UK" width={120} height={40} />
            <Image src="/smart-learning.svg" alt="Smart Learning" width={120} height={40} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 