interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

export default function TeamMember({ name, role, bio }: TeamMemberProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-blue-600 mb-4">{role}</p>
      <p>{bio}</p>
    </div>
  )
}

