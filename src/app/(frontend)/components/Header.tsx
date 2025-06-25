"use client";

import { useState } from 'react';

export default function Header() {
  const [isCommandDeckOpen, setIsCommandDeckOpen] = useState(false);

  const toggleCommandDeck = () => {
    setIsCommandDeckOpen(!isCommandDeckOpen);
  };

  return (
    <>
      <header className="mission-control-hud">
        <nav className="p-4 w-full max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="logo-circle"
                d="M16 2.66663C8.63636 2.66663 2.66669 8.63632 2.66669 16C2.66669 23.3636 8.63636 29.3333 16 29.3333C23.3637 29.3333 29.3334 23.3636 29.3334 16C29.3334 8.63632 23.3637 2.66663 16 2.66663Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="logo-cross-1"
                d="M21.3333 10.6667L10.6667 21.3334"
                stroke="#A3E635"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="logo-cross-2"
                d="M10.6667 10.6667L21.3333 21.3334"
                stroke="#A3E635"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-xl text-white">CDH</span>
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <div id="hud-deals" className="hud-item" data-type="Deal" data-target="#deals-section">
              <div className="hud-label">Active Deals</div>
              <div className="hud-value">3</div>
            </div>
            <div
              id="hud-invoices"
              className="hud-item"
              data-type="Invoice"
              data-target="#finance-section"
            >
              <div className="hud-label">Overdue</div>
              <div className="hud-value overdue">1</div>
            </div>
            <div
              id="hud-contacts"
              className="hud-item"
              data-type="Contact"
              data-target="#contacts-section"
            >
              <div className="hud-label">Key Contacts</div>
              <div className="hud-value">1</div>
            </div>
          </div>
          <button
            onClick={toggleCommandDeck}
            className="p-2 rounded-md hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div id="command-deck" className={isCommandDeckOpen ? 'open' : ''}>
        <button
          onClick={toggleCommandDeck}
          className="absolute top-8 right-8 p-2 text-gray-400 hover:text-white"
          aria-label="Close navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto text-center">
          <a href="/blog" className="nav-card">
            <h3 className="text-xl font-bold mb-2">Blog</h3>
            <p className="text-gray-300 text-sm">
              Insights and strategies from the forefront of the creator economy.
            </p>
          </a>
          <a href="/pricing" className="nav-card">
            <h3 className="text-xl font-bold mb-2">Pricing</h3>
            <p className="text-gray-300 text-sm">
              Simple, transparent plans that scale with your success.
            </p>
          </a>
          <a href="/about" className="nav-card">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-300 text-sm">
              Learn about our mission to empower professional creators.
            </p>
          </a>
          <button className="nav-card text-left">
            <h3 className="text-xl font-bold mb-2">Login</h3>
            <p className="text-gray-300 text-sm">Access your Creator&apos;s Deal Hub account.</p>
          </button>
        </div>
      </div>
    </>
  );
}