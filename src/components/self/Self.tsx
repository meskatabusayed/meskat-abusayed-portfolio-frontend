import { FaBrain, FaUniversity } from 'react-icons/fa';

const Self = () => {
  return (
    <div className="lg:px-10  space-y-24 text-white">
      {/* Self-Description and Introduction Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg animate-fade-in">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-yellow-200 animate-slide-in">
            About Me
          </h1>
          <p className="text-lg md:text-xl font-medium text-yellow-100 max-w-3xl mx-auto">
            Hi, I’m Meskat Mohammad Abu Sayed, a CSE student specializing in AI and ML at Brainware University. 
            Currently, I am focused on building robust web applications as a MERN stack developer.
          </p>
          <div className="mt-8 flex justify-center">
            <FaBrain className="text-yellow-200 text-6xl transform transition-transform duration-500 hover:scale-110" />
          </div>
        </div>
      </section>

      {/* Educational Information Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg animate-fade-in">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-pink-200 animate-slide-in">
            Educational Information
          </h1>
          <div className="flex flex-col items-center">
            <FaUniversity className="text-pink-300 text-6xl mb-4 transform transition-transform duration-500 hover:scale-110" />
            <p className="text-lg md:text-xl font-medium text-pink-100 max-w-3xl">
              Currently pursuing a Bachelor’s degree in Computer Science and Engineering, with a specialization in AI and ML, at Brainware University.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Self;
