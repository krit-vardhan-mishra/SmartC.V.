// src/global/Footer.jsx

import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Blue CTA Section */}
      <section className="py-16 bg-blue-600 mx-auto text-center">
        <h2 className="font-bold text-3xl text-white mb-4">
          Ready to Start Your Success Story?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Join thousands of job seekers who have transformed their careers with
          our AI-powered resume builder
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Get Started Now - It's Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/features"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Learn More About Features
          </a>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mx-auto">
        <div className="text-center">
          <p className="text-gray-400">
            Made with ❤️ for GirlScript Summer of Code • Open Source Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
