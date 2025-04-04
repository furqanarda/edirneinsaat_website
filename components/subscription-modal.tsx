"use client"

import { useState } from "react"

interface SubscriptionModalProps {
  label: string
  lang: string
}

export default function SubscriptionModal({ label, lang }: SubscriptionModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    // Reset the submission state after modal is closed
    setTimeout(() => {
      setIsSubmitted(false)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // For example, send the data to your API or email service
    setIsSubmitted(true)
    // Don't close the modal, show success message instead
  }

  return (
    <>
      <button 
        onClick={openModal}
        className="stylish-button primary px-8 py-6 text-base font-medium"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="p-8 rounded-lg bg-black/90 backdrop-blur-lg border border-gray-800 max-w-md w-full relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{label}</h2>
                <p className="mb-6">
                  {lang === 'en' 
                    ? "We'll notify you as soon as our website goes live!" 
                    : "Web sitemiz yayına girdiğinde size haber vereceğiz!"}
                </p>
                
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder={lang === 'en' ? "Your name" : "Adınız"} 
                      className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder={lang === 'en' ? "Your email address" : "E-posta adresiniz"} 
                      className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <button type="submit" className="w-full stylish-button primary py-3">
                    {lang === 'en' ? "Get Notified" : "Bana Haber Ver"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-6 h-24 w-24 flex items-center justify-center rounded-full bg-primary/20">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-primary" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {lang === 'en' ? "Thank You!" : "Teşekkürler!"}
                </h2>
                <p className="mb-8 text-lg">
                  {lang === 'en' 
                    ? "Thank you for subscribing! We will notify you when our website goes live." 
                    : "Abone olduğunuz için teşekkürler! Web sitemiz yayına girdiğinde size haber vereceğiz."}
                </p>
                <button 
                  onClick={closeModal} 
                  className="stylish-button primary px-8 py-3 text-base font-medium"
                >
                  {lang === 'en' ? "OK" : "Tamam"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
} 