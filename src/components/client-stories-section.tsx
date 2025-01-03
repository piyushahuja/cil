import ClientStory from './client-story'

export default function ClientStoriesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Client Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ClientStory
          clientName="Smart Learning"
          story="Cambridge Innovation Labs' AI Dialogue Moderator has transformed our online courses. Students are more engaged, and we've seen a significant improvement in learning outcomes."
        />
        {/* <ClientStory
          clientName="Global Manufacturing Co."
          story="The predictive maintenance system developed by Cambridge Innovation Labs has saved us millions in prevented downtime and optimized our maintenance schedules."
        /> */}
      </div>
    </section>
  )
} 