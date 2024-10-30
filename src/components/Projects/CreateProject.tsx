import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const CreateProject: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    techStack: [] as string[],
    repoLinkClient: "",
    repoLinkServer: "",
    liveLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTechStackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      techStack: value.split(",").map((tech) => tech.trim()),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/projects/create",
        formData
      );
      console.log("Project created:", response.data);
      setFormData({
        title: "",
        image: "",
        description: "",
        techStack: [],
        repoLinkClient: "",
        repoLinkServer: "",
        liveLink: "",
      });
      toast.success("Project added to the portfolio.");
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg lg:w-[80%] mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Create New Project</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Tech Stack (comma separated)
        </label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack.join(", ")}
          onChange={handleTechStackChange}
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Client Repository Link
        </label>
        <input
          type="url"
          name="repoLinkClient"
          value={formData.repoLinkClient}
          onChange={handleChange}
          required
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">
          Server Repository Link
        </label>
        <input
          type="url"
          name="repoLinkServer"
          value={formData.repoLinkServer}
          onChange={handleChange}
          required
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Live Link</label>
        <input
          type="url"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          className="border border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 transition duration-300 hover:bg-blue-700 hover:shadow-lg"
      >
        Create Project
      </button>
      <div className="bg-blue-100 border border-blue-300 rounded p-3 mt-4 text-blue-600 flex items-center">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 mr-2" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M13 16h-1v-4h-1m4 4h-1m1-10h-1v1h-1V6m4 4h-1v4h1m-2 2v1m-2 0h-1v-1m-1 0v-1m-1 0h-1v1m4 0v1h-1m-2 0h1m0 0h-1"
    />
  </svg>
  <span className="text-sm">
    NB: If the new project does not appear, please refresh the page.
  </span>
</div>

    </form>
  );
};

export default CreateProject;
