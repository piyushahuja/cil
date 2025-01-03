interface ClientStoryProps {
  clientName: string;
  story: string;
}

export default function ClientStory({ clientName, story }: ClientStoryProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{clientName}</h3>
      <p className="italic">"{story}"</p>
    </div>
  )
}

