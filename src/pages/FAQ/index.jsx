import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqItems = [
    {
      question: "What is VKMFlix?",
      answer: "VKMFlix is a comprehensive movie and TV show discovery platform that helps you find your next favorite entertainment. We provide detailed information about movies and TV shows, including ratings, reviews, cast information, trailers, and recommendations."
    },
    {
      question: "Is VKMFlix free to use?",
      answer: "Yes! VKMFlix is completely free to use. You can browse movies, TV shows, read reviews, and get recommendations without any cost. We believe everyone should have access to great entertainment discovery tools."
    },
    {
      question: "Where does VKMFlix get its data from?",
      answer: "VKMFlix uses data from The Movie Database (TMDB) API. TMDB is a community-built movie and TV database that provides comprehensive, up-to-date information about entertainment content."
    },
    {
      question: "Can I watch movies and TV shows on VKMFlix?",
      answer: "VKMFlix is a discovery platform, not a streaming service. We help you find great content to watch and provide information about where you can stream or purchase it, but we don't host any video content directly."
    },
    {
      question: "How often is the content updated?",
      answer: "Our content is updated in real-time through the TMDB API. This means you'll always see the latest movie and TV show information, including new releases, ratings, and reviews."
    },
    {
      question: "How can I search for specific content?",
      answer: "You can use our search feature to find specific movies or TV shows. The search supports titles, actors, directors, and genres. You can also use filters to narrow down results by year, rating, or genre."
    },
    {
      question: "Why should I use VKMFlix instead of other platforms?",
      answer: "VKMFlix offers a clean, intuitive interface focused on discovery. Our platform combines comprehensive information with powerful search and filtering tools, making it easier to find content you'll love. We also offer a distraction-free experience with no ads."
    },
    {
      question: "How do I report incorrect information?",
      answer: "If you notice any incorrect information, please use our Contact form to report it. Include the title of the movie or TV show and specify what information needs to be corrected. We'll review and update it as soon as possible."
    },
    {
      question: "Does VKMFlix have a mobile app?",
      answer: "While we don't currently have a dedicated mobile app, our website is fully responsive and works great on mobile devices. You can access all features through your mobile browser for a seamless experience."
    },
    {
      question: "How can I save my favorite movies and TV shows?",
      answer: "Currently, we're working on implementing a feature that will allow users to create accounts and save their favorites. Stay tuned for updates about this upcoming feature!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Frequently Asked Questions" 
        description="Find answers to common questions about VKMFlix and our services"
      />
      
      <div className="mt-12 space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? 'bg-gradient-to-br from-red-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 shadow-lg' 
                : 'bg-white dark:bg-gray-900 shadow-sm hover:shadow-md'
            }`}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
          >
            <button
              className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-200 ${
                openIndex === index ? 'text-red-600 dark:text-red-400' : 'text-gray-800 dark:text-gray-200'
              }`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-lg md:text-xl text-left pr-4">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 h-6 w-6" />
              ) : (
                <ChevronDown className="flex-shrink-0 h-6 w-6" />
              )}
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
              }`}
            >
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700"
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button
            onClick={() => window.location.href = '/contact-us'}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Support
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ); 
};

export default FAQ;