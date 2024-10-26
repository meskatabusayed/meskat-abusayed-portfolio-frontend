import { Project } from "@/components/Projects/AllProjects";
import { useEffect, useState } from "react";
import { Blog } from "./Blogs";
import { SkillApiResponse } from "./Skills";
import SkillCard from "./SkillCard";
import Banner from "@/components/banner/Banner";
import Self from "@/components/self/self";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [skills, setSkills] = useState<SkillApiResponse | null>(null);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/projects");
      const data = await response.json();
      setProjects(data.data); // Assuming the response has a `data` property
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects on component mount
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/blogs");
      const result = await response.json();
      if (result.success) {
        // Extract the 'data' array from the response
        setBlogs(result.data);
        console.log(result.data);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchSkills = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/skills");
      const data: SkillApiResponse = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="space-y-24 bg-[#111827] text-white">
  {/* Banner Section */}
  <div className="w-full min-h-screen">
    <Banner />
  </div>
  
  {/* Self Section */}
  <div className="w-full min-h-screen">
    <Self />
  </div>

  {/* Projects Section */}
  <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
    <h1 className="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-up">
      Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-24">
      {projects.map((project) => (
        <div
          key={project._id}
          className="group transform transition duration-300 hover:scale-105 bg-yellow-500/20 shadow-xl rounded-lg overflow-hidden"
        >
          <img
            src={project.image || "https://via.placeholder.com/320x180"}
            alt="Project Image"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="p-6 text-yellow-200 space-y-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-yellow-100">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Blogs Section */}
  <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
    <h1 className="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-up">
      Blogs
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-24">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-blue-500/20 shadow-lg rounded-lg overflow-hidden transition duration-300 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-200 mb-2">
                {blog.title}
              </h2>
              <p className="text-blue-100 mb-4">{blog.description}</p>
              <a
                href={`/blogs/${blog._id}`}
                className="text-blue-400 font-semibold hover:text-blue-500 transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </div>
  </section>

  {/* Skills Section */}
  <section className="py-24 bg-gradient-to-r from-green-500 to-teal-500">
    <h1 className="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-up">
      Skills
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 px-6 lg:px-24">
      {skills?.data?.map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          estimate={skill.estimate}
        />
      ))}
    </div>
  </section>
  <div>
    <Contact/>
  </div>
  <div>
    <Footer/>
  </div>
</div>
  );
};

export default Home;
