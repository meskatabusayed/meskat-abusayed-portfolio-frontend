import { useEffect, useState } from "react";
import AddSkillForm from "./AddSkillForm";
import SkillCard from "./SkillCard";
import { toast } from "sonner";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export interface Skill {
  name: string;
  estimate: number;
}

export interface SkillApiResponse {
  data: Skill[];
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillApiResponse | null>(null); // State for skills data
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const navigate = useNavigate();

  const fetchSkills = async (): Promise<void> => {
    setLoading(true); // Start loading before fetching
    try {
      const response = await fetch("http://localhost:5000/api/v1/skills");
      const data: SkillApiResponse = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
      toast.error("Error fetching skills");
    } finally {
      setLoading(false); // Stop loading after fetch is done
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen p-6">
      {/* Back Button */}
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 pb-5 cursor-pointer hover:text-blue-600 transition duration-300"
      >
        <BiArrowBack className="text-3xl transform transition-transform duration-300 hover:scale-110" />
        <h2 className="text-black font-semibold">Go Back</h2>
      </div>

      {/* Add Skill Form */}
      <AddSkillForm />

      {/* Skills Section */}
      <div>
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-bounce">My Skills</h2>

            {/* Loader */}
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader border-t-transparent border-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
              </div>
            ) : (
              // Display Skills if not loading
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills?.data?.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    estimate={skill.estimate}
                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
