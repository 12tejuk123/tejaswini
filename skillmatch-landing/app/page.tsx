"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="SkillMatch Logo" width={120} height={40} className="h-8 w-auto" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#0FB3A1] transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0FB3A1] transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0FB3A1] transition-colors duration-200">
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-[#0FB3A1]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#F9FAFB] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Find Your Perfect Career Path with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SkillMatch uses AI to match your skills with career opportunities tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#0FB3A1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0DA58E] transition-colors duration-200 shadow-lg">
                  Get Started
                </button>
                <a
                  href="#"
                  className="text-[#0FB3A1] font-semibold text-lg hover:text-[#0DA58E] transition-colors duration-200 flex items-center justify-center"
                >
                  Learn More
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/hero-illustration.png"
                alt="AI Career Matching Illustration"
                width={600}
                height={500}
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <Image src="/icon-check.png" alt="Check Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI analyzes your skills and matches you with the most suitable career paths based on market
                demand and your interests.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <Image src="/icon-check.png" alt="Check Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Get tailored career suggestions that align with your unique skill set, experience level, and
                professional goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-6">
                <Image src="/icon-check.png" alt="Check Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with the latest industry trends and job market insights to make informed career decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Form Section */}
      <section className="py-16 lg:py-24 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Discover Your Career Path</h2>
            <p className="text-xl text-gray-600">Answer a few questions and let our AI do the rest.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FB3A1] focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Skills
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FB3A1] focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your skills, experience, and interests..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0FB3A1] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0DA58E] transition-colors duration-200 shadow-lg"
                >
                  Find My Career Path
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 sm:mb-0">
              <Image src="/logo.png" alt="SkillMatch Logo" width={100} height={32} className="h-6 w-auto" />
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm">© 2025 SkillMatch. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
