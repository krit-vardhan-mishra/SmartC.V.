import {
  Bot,
  FileText,
  Target,
  Zap,
  Download,
  Shield,
  Palette,
  Clock,
  CheckCircle,
  BarChart3,
  Eye,
  RefreshCw,
  Globe,
  Users,
  Star
} from 'lucide-react'
import React from 'react'
import { usePageTitle } from '../util/usePageTitle'

function Features() {

  usePageTitle("Features");

  const mainFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Content Generation",
      description: "Our advanced AI analyzes your experience and generates compelling, professional resume content tailored to your target role and industry.",
      benefits: ["Industry-specific language", "Achievement-focused descriptions", "Keyword optimization"]
    },
    {
      icon: Target,
      title: "ATS Score Checker",
      description: "Get real-time feedback on how well your resume performs against Applicant Tracking Systems used by top companies.",
      benefits: ["Instant ATS compatibility score", "Keyword gap analysis", "Formatting recommendations"]
    },
    {
      icon: FileText,
      title: "Multiple Resume Templates",
      description: "Choose from a variety of professionally designed templates optimized for different industries and career levels.",
      benefits: ["Modern & clean designs", "ATS-friendly formats", "Customizable layouts"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your resume's performance with detailed analytics and insights to continuously improve your job applications.",
      benefits: ["View & download statistics", "Improvement suggestions", "Success rate tracking"]
    }
  ]

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate and optimize your resume in minutes, not hours."
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Download your resume as PDF, Word, or share with a unique link."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is secure and private. We never share your information."
    },
    {
      icon: Palette,
      title: "Easy Customization",
      description: "Intuitive editor to personalize colors, fonts, and layouts."
    },
    {
      icon: Clock,
      title: "Version History",
      description: "Keep track of different versions and revert changes anytime."
    },
    {
      icon: RefreshCw,
      title: "Real-time Preview",
      description: "See changes instantly as you edit your resume content."
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Create resumes in multiple languages for global opportunities."
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Share drafts with mentors and get feedback before applying."
    }
  ]

  const stats = [
    { number: "50,000+", label: "Resumes Created" },
    { number: "95%", label: "ATS Pass Rate" },
    { number: "4.8/5", label: "User Rating" },
    { number: "24/7", label: "AI Availability" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Powerful Features for <span className="text-blue-600">Perfect Resumes</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
          Everything you need to create, optimize, and track your resume's success in today's competitive job market
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-gray-50 px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">Core Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with user-friendly design to deliver the ultimate resume building experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From creation to optimization, our comprehensive feature set ensures your resume stands out
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How ATS Scoring Works */}
      <section className="py-16 bg-blue-50 px-4 mx-auto max-w-screen-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">How Our ATS Scoring Works</h2>
          <p className="text-gray-600 mb-8">
            Our AI analyzes your resume against the same criteria that Applicant Tracking Systems use
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Content Analysis</h3>
              <p className="text-gray-600 text-sm">Scans for relevant keywords, skills, and experience matching job requirements</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Format Check</h3>
              <p className="text-gray-600 text-sm">Ensures your resume format is readable by ATS systems and properly structured</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Score & Recommendations</h3>
              <p className="text-gray-600 text-sm">Provides actionable feedback and suggestions to improve your ATS compatibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl text-center">
        <h2 className="font-bold text-3xl text-gray-900 mb-4">Ready to Build Your Perfect Resume?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume builder
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Start Building Now
            <Star className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Pricing
          </a>
        </div>
      </section>
    </div>
  )
}

export default Features
