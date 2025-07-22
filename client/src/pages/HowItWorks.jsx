import {
  UserPlus,
  Brain,
  Edit3,
  Target,
  Download,
  Share2,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  BarChart3,
  FileText,
  Sparkles,
  RefreshCw,
  Eye,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import { usePageTitle } from "../util/usePageTitle";

function HowItWorks() {
  usePageTitle("Working");

  const [activeStep, setActiveStep] = useState(0);

  const mainSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Sign Up & Input Your Information",
      description:
        "Create your account and provide basic information about your career, education, and experience.",
      details: [
        "Quick registration process",
        "Import from LinkedIn or manual entry",
        "Secure data encryption",
        "Profile completion guidance",
      ],
      time: "2-3 minutes",
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Generates Your Content",
      description:
        "Our advanced AI analyzes your information and generates professional, tailored resume content.",
      details: [
        "Industry-specific language optimization",
        "Achievement-focused descriptions",
        "Keyword integration for ATS",
        "Multiple content variations",
      ],
      time: "30 seconds",
    },
    {
      step: 3,
      icon: Edit3,
      title: "Customize & Edit",
      description:
        "Use our intuitive editor to personalize your resume and make it uniquely yours.",
      details: [
        "Real-time editing interface",
        "Template customization",
        "Section reordering",
        "Style and color adjustments",
      ],
      time: "5-10 minutes",
    },
    {
      step: 4,
      icon: Target,
      title: "Check ATS Score",
      description:
        "Get instant feedback on how well your resume performs against Applicant Tracking Systems.",
      details: [
        "Real-time ATS compatibility score",
        "Keyword optimization suggestions",
        "Format and structure analysis",
        "Industry-specific recommendations",
      ],
      time: "Instant",
    },
    {
      step: 5,
      icon: RefreshCw,
      title: "Optimize & Improve",
      description:
        "Use AI suggestions and ATS feedback to continuously improve your resume's effectiveness.",
      details: [
        "Smart improvement recommendations",
        "A/B testing different versions",
        "Performance tracking",
        "Continuous optimization",
      ],
      time: "Ongoing",
    },
    {
      step: 6,
      icon: Download,
      title: "Export & Apply",
      description:
        "Download your optimized resume and start applying to your dream jobs with confidence.",
      details: [
        "Multiple export formats (PDF, Word)",
        "ATS-friendly formatting",
        "Shareable links",
        "Version management",
      ],
      time: "1 minute",
    },
  ];
  const StepIcon = mainSteps[activeStep].icon;

  const atsProcess = [
    {
      icon: FileText,
      title: "Resume Parsing",
      description: "Our AI scans your resume just like an ATS system would",
    },
    {
      icon: Eye,
      title: "Content Analysis",
      description:
        "Analyzes keywords, skills, and formatting for compatibility",
    },
    {
      icon: BarChart3,
      title: "Score Generation",
      description: "Provides a detailed compatibility score with explanations",
    },
    {
      icon: TrendingUp,
      title: "Improvement Suggestions",
      description: "Offers specific recommendations to boost your score",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster",
      description: "Create professional resumes in minutes, not hours",
      stat: "Average time: 15 minutes vs 3 hours traditional",
    },
    {
      icon: Target,
      title: "95% ATS Pass Rate",
      description:
        "Our users see significantly higher application success rates",
      stat: "Industry average: 75% vs Our users: 95%",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Quality",
      description: "Professional-grade content that stands out to recruiters",
      stat: "50% more interview callbacks reported",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          How It <span className="text-blue-600">Works</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
          From zero to job-ready resume in just 6 simple steps. Our AI-powered
          platform makes resume building effortless and effective.
        </p>
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">No experience required</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Clock className="h-5 w-5" />
            <span className="font-medium">15 minutes average</span>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">
            Step-by-Step Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to create a professional, ATS-optimized
            resume that gets results
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {mainSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeStep === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              Step {step.step}
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <StepIcon className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Step {mainSteps[activeStep].step}
                  </span>
                  <span className="text-blue-600 font-medium flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {mainSteps[activeStep].time}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {mainSteps[activeStep].title}
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  {mainSteps[activeStep].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mainSteps[activeStep].details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            {mainSteps.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-3 h-3 rounded-full transition-all ${index <= activeStep ? "bg-blue-600" : "bg-gray-300"
                    }`}
                />
                {index < mainSteps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 ${index < activeStep ? "bg-blue-600" : "bg-gray-300"
                      }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ATS Process Section */}
      <section className="py-16 bg-gray-50 px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">
            How Our ATS Checker Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI simulates how Applicant Tracking Systems analyze resumes,
            giving you the inside advantage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atsProcess.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              {index < atsProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-4 mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">
            Why Our Process Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the measurable difference our AI-powered approach makes for job
            seekers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 mb-4">{benefit.description}</p>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <span className="text-blue-600 font-semibold text-sm">
                  {benefit.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-4 mx-auto max-w-screen-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-3xl text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                How accurate is the ATS scoring?
              </h3>
              <p className="text-gray-600">
                Our ATS checker uses the same parsing algorithms as major ATS
                systems, providing 95%+ accuracy in compatibility scoring.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I create multiple versions of my resume?
              </h3>
              <p className="text-gray-600">
                Yes! You can create unlimited resume versions tailored for
                different roles and industries, all with individual ATS scores.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use enterprise-grade encryption and never share
                your personal information with third parties.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long does the entire process take?
              </h3>
              <p className="text-gray-600">
                Most users create their first optimized resume in 15-20 minutes,
                with ongoing improvements taking just a few minutes each.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
