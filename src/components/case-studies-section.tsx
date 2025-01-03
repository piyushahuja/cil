import CaseStudy from './case-study'

export default function CaseStudiesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CaseStudy
          title="AI Dialogue Moderator for Smart Learning"
          description="An API-based dialogue moderation system that uses Large Language Models to facilitate group discussions in classroom settings.The system enables administrators and teachers to create topic-specific dialogues and associate them with customizable moderation profiles that guide the LLM's behavior."
          client={<a href="https://www-smartlearning-dk" className="text-blue-600 hover:underline">Smart Learning</a>}
        />
        <CaseStudy
          title="Platonia"
          description="Our team created a machine learning model that predicts equipment failures in manufacturing plants, reducing downtime and maintenance costs."
          client="Clients using this system have reported a 30% reduction in unexpected downtime and a 20% decrease in maintenance expenses."
        />
      </div>
    </section>
  )
} 