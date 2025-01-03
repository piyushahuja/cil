import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Cambridge Innovation Labs</h1>
        <p className="text-xl mb-8">AI Innovations and Automation Specialists</p>
        <Button asChild>
          <Link href="#contact">Get in touch</Link>
        </Button>
      </div>
      {/* <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
        <Image
          src="/hero-image.jpeg"
          alt="King's College Chapel and punting boats on the River Cam, Cambridge"
          fill
          className="object-cover"
          priority
        />
      </div> */}
    </section>
  )
} 