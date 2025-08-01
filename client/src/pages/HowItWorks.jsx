
import { Atom, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Build Your Resume <span className='text-blue-600'>With AI</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
          Effortlessly Craft a Standout Resume with Our AI-Powered Builder
        </p>
        <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a 
            href="/register" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a 
            href="https://github.com/AbhinavDhiman34/SmartC.V." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl text-center">
        <h2 className="font-bold text-3xl text-gray-900 mb-2">How it Works</h2>
        <p className="text-gray-600 mb-12">Create your resume in just 3 simple steps</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
            <Atom className='h-8 w-8 text-blue-600 mb-4'/>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Generate Content</h3>
            <p className="text-gray-600">
              Use AI to generate professional resume content tailored to your experience and target role.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
            <Edit className='h-8 w-8 text-blue-600 mb-4'/>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customize & Edit</h3>
            <p className="text-gray-600">
              Edit and customize your resume with our intuitive editor to match your personal style.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
            <Share2 className='h-8 w-8 text-blue-600 mb-4' />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Export & Share</h3>
            <p className="text-gray-600">
              Download your resume as PDF or share it directly with potential employers.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 bg-gray-50 px-4 mx-auto max-w-screen-xl text-center">
        <h2 className="font-bold text-3xl text-gray-900 mb-4">Open Source & Community Driven</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          This project is part of GirlScript Summer of Code and welcomes contributions from developers worldwide. 
          Help us build the best AI-powered resume builder for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/AbhinavDhiman34/SmartC.V." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contribute on GitHub
          </a>
          <a 
            href="/docs" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Documentation
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
