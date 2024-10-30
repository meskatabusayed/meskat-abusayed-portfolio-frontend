import AllProjects from "@/components/Projects/AllProjects";
import CreateProject from "@/components/Projects/CreateProject";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full p-5 bg-gray-100 min-h-screen">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 pb-5 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <BiArrowBack className="text-3xl text-blue-600 transition-colors duration-300 hover:text-blue-800" />
        <h2 className="text-xl font-semibold text-gray-800">Go Back</h2>
      </div>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 mb-5 border-l-4 border-blue-500 transition-shadow duration-300 hover:shadow-xl">
        <CreateProject />
      </div>
      <div className="w-full max-w-2xl">
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
