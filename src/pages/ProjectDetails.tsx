import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Project {
  _id: string;
  title: string;
  image: string;
  description: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL
  const [project, setProject] = useState<Project | null>(null); // State to hold project data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const navigate = useNavigate(); // Hook to navigate

  const fetchProjectDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/projects/${id}`);
      const data = await response.json();
      if (data.success) {
        setProject(data.data); // Set the project data
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching project details:", error);
      toast.error("Failed to fetch project details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:underline"
        >
          Go Back
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader border-t-transparent border-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : project ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Project not found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
