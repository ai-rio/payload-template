/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, FormEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

type AuthView = 'signin' | 'signup'

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState<AuthView>('signin')
  const [mounted, setMounted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Form states
  const [signInData, setSignInData] = useState({ email: '', password: '' })
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    // Reset state on close
    setShowSuccess(false)
    setActiveView('signin')
    setSignInData({ email: '', password: '' })
    setSignUpData({ name: '', email: '', password: '' })
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleTabSwitch = (view: AuthView) => {
    setActiveView(view)
    setShowSuccess(false)
  }

  const handleSignInSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate API call
    setSuccessMessage('Welcome back, Commander! Launching Command Center...')
    setShowSuccess(true)
  }

  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate API call
    setSuccessMessage('Account created successfully! Welcome to the constellation.')
    setShowSuccess(true)
  }

  if (!isOpen) {
    return <div data-testid="auth-modal" style={{ display: 'none' }} />
  }

  if (!mounted) {
    return null
  }

  const modalContent = (
    <div
      id="auth-modal"
      data-testid="auth-modal"
      className={`modal ${isOpen ? 'open' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-content overflow-hidden relative">
        <button
          onClick={handleClose}
          className="modal-close-btn absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors duration-200 z-20 bg-white/5 hover:bg-white/10 rounded-full"
          aria-label="Close form"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        {!showSuccess ? (
          <>
            <div className="relative auth-toggle-bg p-1.5 rounded-2xl flex items-center mb-8 bg-white/5 border border-white/10">
              <div
                className={`auth-toggle-slider absolute top-1.5 left-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] bg-gradient-to-r from-[#EEFC97] to-[#A3E635] rounded-xl transition-all duration-500 ease-out shadow-lg ${
                  activeView === 'signup' ? 'translate-x-full' : ''
                }`}
              ></div>
              <button
                onClick={() => handleTabSwitch('signin')}
                className={`auth-toggle-button w-1/2 p-3 rounded-xl relative z-10 font-semibold text-base transition-all duration-300 ${
                  activeView === 'signin'
                    ? 'active text-[#1D1F04]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleTabSwitch('signup')}
                className={`auth-toggle-button w-1/2 p-3 rounded-xl relative z-10 font-semibold text-base transition-all duration-300 ${
                  activeView === 'signup'
                    ? 'active text-[#1D1F04]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="relative min-h-[420px]">
              {/* Sign In View */}
              <div
                id="signin-view"
                className={`auth-form-view ${activeView === 'signin' ? '' : 'hidden-form'}`}
              >
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#EEFC97] to-[#A3E635] rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-[#1D1F04]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Welcome Back, Commander</h3>
                  <p className="text-gray-400 text-base">
                    Enter your credentials to access the constellation.
                  </p>
                </div>
                <form className="space-y-6" onSubmit={handleSignInSubmit}>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-input w-full p-4 rounded-xl text-white text-base bg-white/5 border border-white/10 focus:border-[#EEFC97] focus:ring-2 focus:ring-[#EEFC97]/20 transition-all duration-300 placeholder-gray-400"
                        required
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-input w-full p-4 rounded-xl text-white text-base bg-white/5 border border-white/10 focus:border-[#EEFC97] focus:ring-2 focus:ring-[#EEFC97]/20 transition-all duration-300 placeholder-gray-400"
                        required
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full cta-glow bg-gradient-to-r from-[#EEFC97] to-[#A3E635] text-[#1D1F04] font-bold text-lg p-4 rounded-xl mt-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#EEFC97]/30"
                  >
                    Launch Command Center
                  </button>
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-6 text-sm text-gray-400 font-medium">OR</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button className="social-icon-btn group">
                    <i className="fab fa-google text-xl group-hover:scale-110 transition-transform duration-200"></i>
                  </button>
                  <button className="social-icon-btn group">
                    <i className="fab fa-apple text-2xl group-hover:scale-110 transition-transform duration-200"></i>
                  </button>
                </div>
              </div>

              {/* Sign Up View */}
              <div
                id="signup-view"
                className={`auth-form-view ${activeView === 'signup' ? '' : 'hidden-form'}`}
              >
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#A3E635] to-[#EEFC97] rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-[#1D1F04]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Join the Constellation</h3>
                  <p className="text-gray-400 text-base">
                    Create your account to map your business universe.
                  </p>
                </div>
                <form className="space-y-6" onSubmit={handleSignUpSubmit}>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-input w-full p-4 rounded-xl text-white text-base bg-white/5 border border-white/10 focus:border-[#EEFC97] focus:ring-2 focus:ring-[#EEFC97]/20 transition-all duration-300 placeholder-gray-400"
                        required
                        value={signUpData.name}
                        onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-input w-full p-4 rounded-xl text-white text-base bg-white/5 border border-white/10 focus:border-[#EEFC97] focus:ring-2 focus:ring-[#EEFC97]/20 transition-all duration-300 placeholder-gray-400"
                        required
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-input w-full p-4 rounded-xl text-white text-base bg-white/5 border border-white/10 focus:border-[#EEFC97] focus:ring-2 focus:ring-[#EEFC97]/20 transition-all duration-300 placeholder-gray-400"
                        required
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full cta-glow bg-gradient-to-r from-[#A3E635] to-[#EEFC97] text-[#1D1F04] font-bold text-lg p-4 rounded-xl mt-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#EEFC97]/30"
                  >
                    Create My Account
                  </button>
                </form>
                <p className="text-sm text-center text-gray-400 mt-6 leading-relaxed">
                  By signing up, you agree to our{' '}
                  <span className="text-[#EEFC97] hover:text-white cursor-pointer transition-colors">
                    Terms of Service
                  </span>
                  .
                </p>
              </div>
            </div>
          </>
        ) : (
          <div id="success-message" className="success-message">
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#EEFC97] to-[#A3E635] rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <svg
                    className="w-10 h-10 text-[#1D1F04]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-[#EEFC97] to-[#A3E635] bg-clip-text text-transparent">
                Success!
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                {successMessage}
              </p>
              <div className="mt-8">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

export default AuthModal
