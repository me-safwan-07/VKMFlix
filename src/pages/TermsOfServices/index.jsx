import PageHeader from "../../components/PageHeader";

const TermsOfService = () => {
  const lastUpdated = "April 15, 2025";
  
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <PageHeader
        title="Terms of Service" 
        description="Please read these terms carefully before using VKMFlix"
      />
      
      {/* Last Updated */}
      <div className="mb-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Last Updated: {lastUpdated}
        </p>
      </div>
      
      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-indigo-600 dark:prose-h2:text-indigo-400 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-gray-700 dark:prose-h3:text-gray-300 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-p:my-4 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-800 dark:hover:prose-a:text-indigo-300">
        {/* Introduction */}
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            Welcome to VKMFlix. Please read these Terms of Service ("Terms", "Terms of Service") 
            carefully before using the VKMFlix website (the "Service") operated by VKMFlix ("us", "we", or "our").
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Your access to and use of the Service is conditioned on your acceptance of and compliance 
            with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 rounded-r">
            <p className="font-medium text-yellow-700 dark:text-yellow-300">
              <strong>Important:</strong> By accessing or using the Service, you agree to be bound by these Terms. 
              If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        {/* Section 1 */}
        <h2>1. Service Usage Conditions</h2>
        <p>
          VKMFlix provides a platform for users to discover and learn about movies and TV shows. 
          Our service includes information about titles, cast, crew, ratings, trailers, and other 
          relevant content details.
        </p>
        
        <h3>1.1 Eligibility</h3>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p>
            You must be at least <span className="font-medium">13 years old</span> to use the Service. By using the Service, you represent 
            and warrant that you meet this eligibility requirement.
          </p>
        </div>
        
        <h3>1.2 Service Availability</h3>
        <p>
          We strive to ensure that our Service is available 24/7. However, we do not guarantee 
          that the Service will be available at all times. We may experience hardware, software, 
          or other problems, or need to perform maintenance related to the Service, resulting in 
          interruptions, delays, or errors.
        </p>

        {/* Section 2 */}
        <h2>2. User Responsibilities</h2>
        <p>
          When using our Service, you agree to:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Use the Service only for lawful purposes and in accordance with these Terms.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Not use the Service in any way that violates any applicable laws or regulations.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Not attempt to probe, scan, or test the vulnerability of the Service.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Not interfere with or disrupt the integrity or performance of the Service.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Not engage in any automated use of the system.</span>
          </li>
        </ul>

        {/* Section 3 */}
        <h2>3. TMDB API Attribution</h2>
        <p>
          This product uses the TMDB API but is not endorsed or certified by TMDB. All movie and 
          TV show data, including images, are provided by The Movie Database (TMDB) API.
        </p>
        
        <div className="my-8 p-6 border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <p className="font-medium text-indigo-700 dark:text-indigo-300">Attribution Notice:</p>
          <p className="text-indigo-700 dark:text-indigo-300 mt-2">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
          <div className="mt-4 flex items-center">
            <img 
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
              alt="TMDB Logo" 
              className="h-8" 
            />
            <span className="ml-2 text-sm text-indigo-600 dark:text-indigo-400">The Movie Database</span>
          </div>
        </div>
        
        <p>
          As per TMDB's terms of use, you acknowledge that:
        </p>
        <ul className="space-y-2">
          <li>Information displayed via our service is sourced from TMDB.</li>
          <li>VKMFlix is not responsible for the accuracy, relevance, copyright compliance, legality, or decency of material displayed through the TMDB API.</li>
        </ul>

        {/* Section 4 */}
        <h2>4. Intellectual Property Rights</h2>
        <p>
          The Service and its original content (excluding content provided through the TMDB API), 
          features, and functionality are and will remain the exclusive property of VKMFlix. 
          The Service is protected by copyright, trademark, and other laws.
        </p>
        
        <p>
          Our trademarks and trade dress may not be used in connection with any product or service 
          without the prior written consent of VKMFlix.
        </p>

        {/* Section 5 */}
        <h2>5. Prohibited Activities</h2>
        <p>
          You agree not to engage in any of the following prohibited activities:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 dark:border-red-600">
            <h3 className="font-medium text-red-700 dark:text-red-300">Content Misuse</h3>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">Copying, distributing, or disclosing any part of the Service</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 dark:border-red-600">
            <h3 className="font-medium text-red-700 dark:text-red-300">Automated Access</h3>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">Using any automated system to access the Service</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 dark:border-red-600">
            <h3 className="font-medium text-red-700 dark:text-red-300">Spam</h3>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">Transmitting spam or unsolicited communications</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 dark:border-red-600">
            <h3 className="font-medium text-red-700 dark:text-red-300">Security</h3>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">Attempting to interfere with service security</p>
          </div>
        </div>

        {/* Section 6 */}
        <h2>6. Content Accuracy Disclaimer</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p>
            We make every effort to provide accurate information through our Service. However, 
            we cannot guarantee the absolute correctness, completeness, or suitability of the 
            information displayed. Any reliance you place on such information is strictly at your own risk.
          </p>
        </div>

        {/* Section 7 */}
        <h2>7. Modification Rights</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
          If a revision is material, we will try to provide at least 30 days' notice prior to any new 
          terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-4 border-l-4 border-blue-400 dark:border-blue-600">
          <p className="text-blue-700 dark:text-blue-300">
            <strong>Note:</strong> By continuing to access or use our Service after revisions become effective, 
            you agree to be bound by the revised terms. If you do not agree to the new terms, 
            please stop using the Service.
          </p>
        </div>

        {/* Section 8 */}
        <h2>8. Limitation of Liability</h2>
        <p>
          In no event shall VKMFlix, nor its directors, employees, partners, agents, suppliers, 
          or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
          damages, including without limitation, loss of profits, data, use, goodwill, or other 
          intangible losses, resulting from:
        </p>
        <ul className="space-y-2">
          <li>Your access to or use of or inability to access or use the Service;</li>
          <li>Any conduct or content of any third party on the Service;</li>
          <li>Any content obtained from the Service; and</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>

        {/* Section 9 */}
        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, 
          without regard to its conflict of law provisions.
        </p>
        
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. 
          If any provision of these Terms is held to be invalid or unenforceable by a court, the 
          remaining provisions of these Terms will remain in effect.
        </p>

        {/* Section 10 */}
        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <div className="pl-4 border-l-4 border-indigo-500 dark:border-indigo-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-r-lg mt-4">
          <p className="font-medium">Email:</p>
          <p className="mb-3">legal@vkmflix.com</p>
          <p className="font-medium">Website:</p>
          <a 
            href="https://www.vkmflixs.com/contact-us" 
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline inline-flex items-center"
          >
            www.vkmflix.com/contact
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;