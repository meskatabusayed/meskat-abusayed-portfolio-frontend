import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export interface Blog {
  _id: string;
  title: string;
  image: string;
  description: string;
  __v: number;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true); // Start loading before fetching
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/blogs"
      );
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
    } finally {
      setLoading(false); // Stop loading after fetch is done
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 pb-5 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <BiArrowBack className="text-3xl text-gray-700 hover:text-gray-900" />
        <h2 className="text-black font-semibold">Go Back</h2>
      </div>
      <CreateBlog />
      <span className="text-sm text-blue-300 text-center block mb-4">
        NB: If the new blog does not appear, please refresh the page
      </span>

      <h2 className="text-center text-4xl font-bold text-gray-800 py-10 underline">
        /Blogs
      </h2>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="loader border-t-transparent border-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              >
                {/* Blog Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
