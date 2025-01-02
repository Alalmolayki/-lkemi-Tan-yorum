import React from 'react';
import AlaImage from '/public/image/ala.jpg';
import KenanImage from '/public/image/kenan_hoca.png';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Kenan Şengül',
    role: 'Danışman Öğretmen',
    image: KenanImage,
    bio: '',
    social: {
      
    }
  },
  {
    name: 'Ala Almolayki',
    role: 'Yazılım Geliştirici',
    image: AlaImage,
    bio: '',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:ayse@example.com'
    }
  },
  {
    name: 'Musab Sabır',
    role: 'PR ve İletişim',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: '',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:mehmet@example.com'
    }
  }
];

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold text-center mb-8">Ekibimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-600 mb-2">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              {member.social.github && (
                <a
                  href={member.social.github}
                  className="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              )}
              {member.social.email && (
                <a
                  href={member.social.email}
                  className="text-gray-600 hover:text-blue-600"
                >
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};