import PageHeader from "../../components/PageHeader";

const PrivacyPolicy = () => {
  const lastUpdated = "April 15, 2025";

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
      />

      {/* Last Updated */}
      <div className="mb-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-indigo-600 dark:prose-h2:text-indigo-400 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-gray-700 dark:prose-h3:text-gray-300 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-p:my-4 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-800 dark:hover:prose-a:text-indigo-300">
        <p className="text-lg leading-relaxed">
          At VKMFlix, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website. By using VKMFlix,
          you agree to the terms outlined below.
        </p>

        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Personal Data</h3>
        <p>
          We may collect personal identification information when users interact with our site,
          including:
        </p>
        <ul className="space-y-2">
          <li><span className="font-medium">Name</span></li>
          <li><span className="font-medium">Email address</span></li>
          <li><span className="font-medium">Message content</span> (via contact forms)</li>
        </ul>

        <h3>1.2 Non-Personal Data</h3>
        <p>
          We may collect technical information such as:
        </p>
        <ul className="space-y-2">
          <li><span className="font-medium">Browser type</span></li>
          <li><span className="font-medium">Device type</span></li>
          <li><span className="font-medium">Operating system</span></li>
          <li><span className="font-medium">Connection details</span> (ISP, IP, etc.)</li>
        </ul>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
          <h3 className="text-lg font-medium mb-2">Note About Data Collection</h3>
          <p className="text-sm">
            We only collect the minimum amount of information necessary to provide our services and improve your experience.
          </p>
        </div>

        <h2>2. How We Use Your Information</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>To respond to support requests</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>To enhance user experience</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>To analyze usage and improve the site</span>
          </li>
        </ul>

        <h2>3. TMDB API Usage</h2>
        <p>
          We use The Movie Database (TMDB) API to fetch movie and TV data. No personally identifiable
          data is shared with TMDB. Refer to TMDB's own privacy policy for more information.
        </p>

        <h2>4. Cookies & Local Storage</h2>
        <p>
          VKMFlix uses browser cookies and local storage to remember user preferences, such as
          theme settings and search history. You may disable cookies in your browser settings.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-4 my-6">
          <p className="text-blue-700 dark:text-blue-300">
            <strong>Tip:</strong> Most browsers allow you to manage cookie preferences in their settings panel.
          </p>
        </div>

        <h2>5. Your Data Rights</h2>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Access</h3>
            <p>Request a copy of your data</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Rectification</h3>
            <p>Correct any inaccurate information</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Erasure</h3>
            <p>Request deletion under specific conditions</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Restrict/Opt-Out</h3>
            <p>Limit how we process your data</p>
          </div>
        </div>

        <h2>6. Third-Party Services</h2>
        <p>
          We may use third-party tools for performance or analytics. These vendors only access data
          necessary for their services and are bound by confidentiality.
        </p>

        <h2>7. Data Security</h2>
        <p>
          VKMFlix implements reasonable technical measures to secure personal data from unauthorized
          access, alteration, or disclosure.
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg my-6">
          <h3 className="font-medium text-lg mb-2 text-green-700 dark:text-green-300">Our Security Commitment</h3>
          <p className="text-green-700 dark:text-green-300">
            We regularly review our security practices and update our systems to protect your information.
          </p>
        </div>

        <h2>8. Policy Updates</h2>
        <p>
          We may update this policy periodically. Changes will be reflected with a revised date at the
          top. We recommend reviewing it occasionally.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, reach out to us:
        </p>
        <div className="pl-4 border-l-4 border-indigo-500 dark:border-indigo-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-r-lg mt-4">
          <p className="font-medium">Email:</p>
          <p className="mb-3">privacy@vkmflix.com</p>
          <p className="font-medium">Website:</p>
          <a 
            href="https://www.vkmflix.com/contact" 
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

export default PrivacyPolicy;