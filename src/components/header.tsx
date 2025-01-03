import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Cambridge Innovation Labs</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#case-studies" className="hover:text-blue-600">Case Studies</Link></li>
          <li><Link href="#team" className="hover:text-blue-600">Team</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

