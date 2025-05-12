import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from '../../utils/config';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize emailjs (you need to create an account on emailjs.com)
      emailjs.init(EMAIL_JS_USER_ID);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'mesafwan07@gmail.com',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        templateParams
      );

      toast.success('Message sent successfully!', {
        icon: <CheckCircle className="text-green-500" />,
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#1F2937',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px'
        }
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        icon: <XCircle className="text-red-500" />,
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#1F2937',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px'
        }
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster />
      <PageHeader
        title="Contact Us" 
        description="We'd love to hear from you. Reach out with any questions or feedback."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="dark:text-gray-300 text-gray-600 mb-6 text-lg">
              Have a question about VKMFlix? Want to provide feedback or report an issue?
              We're here to help! Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-3 bg-red-100 dark:bg-gray-700 rounded-lg mr-4">
                  <Mail className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Email Us</h3>
                  <p className="dark:text-gray-300 text-gray-600">support@vkmflix.com</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg mr-4">
                  <Clock className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Response Time</h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    We aim to respond within 24-48 hours during business days (Monday-Friday).
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/50 to-white/80 dark:from-gray-800/50 dark:to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Preferred Contact Method
            </h2>
            <p className="dark:text-gray-300 text-gray-600 text-lg">
              For the fastest response, we recommend using the contact form. Our team monitors these submissions
              continuously during business hours. For general inquiries, email is also a good option.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white/80 to-white dark:from-gray-800/80 dark:to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none"
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Business Inquiry">Business Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2" size={18} />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;