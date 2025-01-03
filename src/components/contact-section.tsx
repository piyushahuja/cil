import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Get in touch</h2>
      <p className="mb-4">
        Are you facing complex challenges that could benefit from advanced AI innovations or automation solutions? 
        We're always eager to tackle new problems and push the boundaries of what's possible with machine learning 
        and automation technologies.
      </p>
      <p className="mb-8">
        Let&apos;s discuss how we can work together to develop innovative AI and automation solutions tailored to your specific needs.
      </p>
      <Button asChild>
        <Link href="mailto:cambridgeinnovationlabs@gmail.com">Get in touch</Link>
      </Button>
    </section>
  )
} 