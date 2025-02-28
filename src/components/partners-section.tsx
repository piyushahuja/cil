import Image from 'next/image'
import Link from 'next/link'

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "University of Cambridge",
    logo: "/partners/cambridge.png",
    url: "https://www.cam.ac.uk/"
  },
  {
    name: "Smart Learning",
    logo: "/partners/smart-learning.png",
    url: "https://www.smartlearning.dk/"
  },
  {
    name: "Cambridge Connect",
    logo: "/partners/cambridge-connect.png",
    url: "https://www.cambridgeconnect.org/"
  }
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Partner logos */}
          <div className="flex items-center justify-center">
            <Image 
              src="/partners/partner1.png" 
              alt="Partner 1" 
              width={150} 
              height={80} 
              className="max-h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="/partners/partner2.png" 
              alt="Partner 2" 
              width={150} 
              height={80} 
              className="max-h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="/partners/partner3.png" 
              alt="Partner 3" 
              width={150} 
              height={80} 
              className="max-h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="/partners/partner4.png" 
              alt="Partner 4" 
              width={150} 
              height={80} 
              className="max-h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 