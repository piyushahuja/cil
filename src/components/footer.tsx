import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Cambridge Innovation Labs</h3>
            <p className="text-sm">AI Innovations and Automation Specialists</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="#case-studies" className="hover:text-blue-400">Case Studies</Link></li>
              <li><Link href="#team" className="hover:text-blue-400">Team</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: cambridgeinnovationlabs@gmail.com</p>
            <p className="text-sm">Phone: +44 (0)07788508261</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Cambridge Innovation Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

