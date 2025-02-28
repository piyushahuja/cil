import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
          Interested in our AI solutions for education and learning? Have questions about our research or potential collaborations? We'd love to hear from you.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="mailto:contact@cambridgeinnovationlabs.com" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Contact Us
          </a>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Cambridge Innovation Labs<br />
            Cambridge, United Kingdom
          </p>
        </div>
      </div>
    </section>
  )
} 