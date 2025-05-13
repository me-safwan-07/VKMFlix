import { Film, Search, Moon, Smartphone, Code, Heart } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader 
        title="About VKMFlix" 
        description="Discover how we're revolutionizing the way you explore entertainment"
      />

      <section className="mb-16">
        <div className="prose prose-lg dark:prose-invert max-w-none bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg dark:text-white">
          <p className="text-lg leading-relaxed dark:color-white color-black ">
            Welcome to <span className="font-bold text-red-600 dark:text-red-400">VKMFlix</span>, your premier destination for discovering and exploring movies and TV shows.
            Founded in 2023, we've set out to create a platform that simplifies the process of finding
            what to watch next while providing comprehensive information about your favorite entertainment.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            At VKMFlix, our mission is to connect users with the perfect entertainment content through
            an intuitive, seamless exploration experience. We believe that finding something to watch
            should be enjoyable, not overwhelming, which is why we've designed a clean, user-friendly
            interface packed with useful features and detailed information.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Kirthan",
              // role: "Developer",
              // bio: "Full-stack developer with expertise in React and Node.js. Passionate about creating intuitive user experiences and scalable applications.",
              img: "/kirthan.jpg",
            },
            {
              name: "Vignesh",
              // role: "UI/UX Designer",
              // bio: "Creative designer focused on crafting beautiful and functional interfaces. Brings user-centered design principles to every project.",
              img: "/vignesh.jpg", // Replace with actual image path or use a placeholder
            },
            {
              name: "Manish",
              // role: "Architect",
              // bio: "Experienced in building robust backend systems and APIs. Specializes in database optimization and server-side performance.",
              img: "/manish.jpg",
            }
          ].map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
            >
              <div className={`w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br flex items-center justify-center shadow-md`}>
                {member.img ? (
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Content Discovery",
              description: "Browse trending and popular movies and TV shows with our curated recommendations",
              icon: <Film size={28} className="text-red-600" />,
              delay: "100"
            },
            {
              title: "Detailed Information",
              description: "Access comprehensive details including cast, crew, ratings, trailers, and more",
              icon: <Search size={28} className="text-blue-600" />,
              delay: "200"
            },
            {
              title: "Theme Customization",
              description: "Switch between dark and light themes to suit your viewing preference",
              icon: <Moon size={28} className="text-indigo-600" />,
              delay: "300"
            },
            {
              title: "Mobile-First Design",
              description: "Enjoy a responsive interface optimized for all your devices",
              icon: <Smartphone size={28} className="text-green-600" />,
              delay: "400"
            },
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl dark:bg-gray-800 bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-transparent hover:border-red-500/20"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="flex items-center mb-5">
                <div className="p-3 rounded-lg bg-red-50 dark:bg-gray-700 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</h3>
              </div>
              <p className="dark:text-gray-300 text-gray-600 pl-16">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Technical Stack
        </h2>
        <div 
          className="dark:bg-gray-800 bg-white rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-purple-100 dark:bg-gray-700 mr-4">
              <Code size={28} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Built with Modern Technology</h3>
          </div>
          <p className="mb-6 dark:text-gray-300 text-gray-600 text-lg">
            VKMFlix is developed using a cutting-edge technology stack to ensure the best possible user experience:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "React with TypeScript for a robust, type-safe frontend",
              "Vite for lightning-fast development and optimized builds",
              "Tailwind CSS for responsive, beautiful design",
              "Redux Toolkit for efficient state management",
              "TMDB API for comprehensive movie and TV show data",
              "Framer Motion for smooth animations and transitions"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-red-500 mr-3"></span>
                <span className="dark:text-gray-300 text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose VKMFlix?
        </h2>
        <div 
          className="dark:bg-gray-800 bg-white rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-red-100 dark:bg-gray-700 mr-4">
              <Heart size={28} className="text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Created with Users in Mind</h3>
          </div>
          <p className="mb-6 dark:text-gray-300 text-gray-600 text-lg">
            We believe in putting our users first. Here's what sets VKMFlix apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Clean, intuitive interface with no distractions",
              "Fast, responsive experience on any device",
              "Comprehensive information to make informed viewing decisions",
              "Regular updates with new features and improvements",
              "No account required to browse and discover content",
              "Privacy-focused with minimal data collection"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
              >
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-red-500 flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="dark:text-gray-300 text-gray-600 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-12 bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg px-8 mb-16">
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-xl italic text-gray-700 dark:text-gray-200">
            "Entertainment should be easy to find, beautiful to explore, and unforgettable to experience."
          </p>
          <footer className="mt-4 text-gray-500 dark:text-gray-400">— VKMFlix Team</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutUs;
