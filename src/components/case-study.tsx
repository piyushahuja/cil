import { ReactNode } from "react";

interface CaseStudyProps {
  title: string;
  description: string;
  client: ReactNode;
}

export default function CaseStudy({ title, description, client }: CaseStudyProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="font-semibold">Client: {client}</p>
    </div>
  )
}

