import { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        // In a real app, this would be an API call to your backend
        // const response = await axios.get('/api/team');
        // setTeamMembers(response.data);
        
        // Mock data for demonstration
        const mockTeam = [
          {
            name: "John Doe",
            role: "CEO",
            bio: "Founder with 10+ years of experience",
            image: "/images/team1.jpg"
          },
          {
            name: "Jane Smith",
            role: "CTO",
            bio: "Technology expert and innovator",
            image: "/images/team2.jpg"
          }
        ];
        setTeamMembers(mockTeam);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading team...</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                {/* In a real app, this would be an actual image */}
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👤
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;