import { headers as getHeaders } from 'next/headers.js'
import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f3f3f4]">
      {/* Hero Section */}
      <section className="hero-section h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="inline-block bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Living Business
            <br />
            <span className="text-[#EEFC97]">Constellation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop chasing data. Start seeing the connections.
          </p>
          <button className="cta-glow bg-[#EEFC97] text-[#1D1F04] font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section id="deals-section" className="content-section min-h-screen flex items-center justify-center px-6">
        <div className="content-box max-w-2xl bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#EEFC97]">Active Deals</h2>
          <p className="text-gray-300 text-lg">
            Track your business relationships in real-time. See how every deal connects to your broader ecosystem.
          </p>
        </div>
      </section>

      <section id="finance-section" className="content-section min-h-screen flex items-center justify-center px-6">
        <div className="content-box max-w-2xl bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#EEFC97]">Financial Overview</h2>
          <p className="text-gray-300 text-lg">
            Never miss a payment again. Your financial constellation keeps everything in perfect orbit.
          </p>
        </div>
      </section>

      <section id="contacts-section" className="content-section min-h-screen flex items-center justify-center px-6">
        <div className="content-box max-w-2xl bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#EEFC97]">Key Contacts</h2>
          <p className="text-gray-300 text-lg">
            Your network is your net worth. See how every contact influences your business universe.
          </p>
        </div>
      </section>
    </div>
  )
}
