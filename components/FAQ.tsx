'use client'

import { useState, useEffect, type ReactNode } from 'react'

interface FAQItemProps {
  question: string
  answer: string | ReactNode
  id: string
  isActive: boolean
  onOpen: () => void
}

function FAQItem({ question, answer, id, isActive, onOpen }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isActive && !isOpen) {
      setIsOpen(true)
      onOpen()
    }
  }, [isActive, isOpen, onOpen])

  const handleClick = () => {
    setIsOpen(!isOpen)
    // Update URL hash when clicking
    window.history.pushState(null, '', `#${id}`)
  }

  return (
    <div id={id} className="scroll-mt-20 bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-primary-300 transition-colors">
      <button
        onClick={handleClick}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-bold text-gray-900 flex-1">{question}</h3>
        <svg
          className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-0">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const generateId = (question: string) => {
    return question
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    // Check for hash on mount
    const hash = window.location.hash.slice(1) // Remove the #
    if (hash) {
      setActiveId(hash)
      // Scroll to element after a short delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1)
      if (newHash) {
        setActiveId(newHash)
        setTimeout(() => {
          const element = document.getElementById(newHash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        setActiveId(null)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleOpen = (id: string) => {
    setActiveId(id)
  }

  const faqs = [
    {
      question: 'What is VoyZa?',
      answer:
        "VoyZa is a smart trip planner that helps you organize multiple locations, visualize them on a map, optimize your travel route, and collaborate with others on shared trips. It's designed for solo travelers, friends, families, or groups planning complex trips.",
    },
    {
      question: 'Do I need to create an account to use VoyZa?',
      answer:
        'No. You can start using VoyZa as an anonymous user and save locations locally on your device. Creating an account lets you sync trips across devices, access premium features, and collaborate with others.',
    },
    {
      question: 'How many locations can I add in the free version?',
      answer:
        'Free users can add up to 5 locations per trip. To add unlimited locations, remove ads, and access advanced features like offline maps and route optimization, you can upgrade to VoyZa Pro.',
    },
    {
      question: 'What happens if I exceed the free location limit?',
      answer:
        "When you try to add your 6th location, VoyZa will prompt you to either watch an ad (if you're a free user) or upgrade to VoyZa Pro for unlimited locations.",
    },
    {
      question: 'Can I collaborate with friends on a trip?',
      answer:
        'Yes. VoyZa Pro + Collaboration allows you to invite others to a trip, assign permissions (read-only or write access), and update locations in real-time. One person must be the trip owner and have a subscription; collaborators join for free.',
    },
    {
      question: 'Can anonymous users collaborate?',
      answer:
        'No. Collaboration requires an authenticated account and a Pro subscription for the trip owner. Anonymous users can only plan solo trips on their device.',
    },
    {
      question: 'What is included in VoyZa Pro?',
      answer: `Unlimited locations

Ad-free experience

Offline maps

Route optimization

Ability to create trips for collaboration

VoyZa Pro + Collaboration adds the ability to invite others, assign permissions, and sync trips in real-time.`,
    },
    {
      question: 'How does payment and subscription work?',
      answer:
        'VoyZa subscriptions are handled through the Apple App Store or Google Play Store. Payments are secure and automatically renewed unless canceled via your store account. VoyZa does not directly handle billing or refunds.',
    },
    {
      question: 'Can I restore my purchase on a new device?',
      answer:
        'Yes. VoyZa supports restoring purchases via the "Restore Purchases" option. If you were an anonymous user who paid, the subscription will be tied to your App Store or Google Play account. After signing in, your subscription is merged with your account.',
    },
    {
      question: 'What happens if my subscription expires?',
      answer:
        'You will lose access to Pro features, unlimited locations, offline maps, and collaboration privileges. Trips you created remain visible, but some actions (adding new locations, inviting collaborators, route optimization) will be restricted.',
    },
    {
      question: 'Is my data safe?',
      answer:
        "Yes. VoyZa respects your privacy. Anonymous data is stored locally. Authenticated users' data is securely stored in our backend (Supabase). For full details, see our Privacy Policy.",
    },
    {
      question: 'Can I cancel my subscription?',
      answer:
        'Yes. Subscriptions can be canceled anytime through Apple App Store or Google Play Store. Cancelling stops future payments but does not automatically refund prior charges.',
    },
    {
      question: 'Who do I contact for support?',
      answer: 'For questions, troubleshooting, or feedback, contact us at hengsamkok76@gmail.com',
    },
    {
      question: 'How can I delete my VoyZa account?',
      answer: `Authenticated users can permanently delete their account through the Settings → Delete Account option in the app.

Deleting your account will remove:

All your personal information stored in our database

All trips you created

Any collaboration privileges you had as a trip owner

Any local data stored on your device (for anonymous trips) must be deleted manually by removing the app or clearing local storage.

Important: Account deletion is permanent and cannot be undone. If you wish to return to VoyZa later, you must create a new account.`,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-teal-50/30 to-primary-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 via-teal-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Everything you need to know about VoyZa
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const id = generateId(faq.question)
            return (
              <FAQItem
                key={index}
                id={id}
                question={faq.question}
                answer={faq.answer}
                isActive={activeId === id}
                onOpen={() => handleOpen(id)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
