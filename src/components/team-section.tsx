import TeamMember from './team-member'

export default function TeamSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TeamMember
          name="Piyush Ahuja"
          role="Founder and CEO"
          bio="Digital education innovator at University of Cambridge. IIT Delhi graduate in Mathematics and Computing, Oxford PPE alumnus. Recognized by Tech Nation as exceptional leader in digital technology."
        />
        <TeamMember
  name="Dr. Amr Gomma"
  role="AI Research Scientist"
  bio="Expert in human-centered AI with focus on multimodal interactions and LLMs. Led interdisciplinary projects with BMW, IAV, and Carl Zeiss in automotive, robotics, and rehabilitation domains."
/>

<TeamMember
  name="Dr. Prateek Gupta "
  role="AI Research Scientist"
  bio="Postdoctoral Researcher at Max Planck Institute studying human-machine co-evolution. DPhil in Deep Learning from Oxford, Expertise in AI-driven scientific discovery, with background in Operations Research and Engineering."
/>

<TeamMember
  name="Prachi Pande"
  role="Software Engineer"
  bio="Specialized in robotics systems and LLM-powered applications, combining practical engineering with advanced AI integration."
/>
      </div>
    </section>
  )
} 