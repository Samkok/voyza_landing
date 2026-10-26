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
        "VoyZa is a trip route planner for iPhone and Android. It turns the places you save into the smartest route for each day of your trip, spreads them across the days, shows opening hours on the map, and follows along once you are there. It\'s for solo travelers, couples, families and groups with more places than fit in a day.",
    },
    {
      question: 'Do I need to create an account to use VoyZa?',
      answer:
        'No. You can start using VoyZa as an anonymous user and save locations locally on your device. Creating an account lets you sync trips across devices, access premium features, and collaborate with others.',
    },
    {
      question: 'Can I collaborate with friends on a trip?',
      answer:
        'Yes, on the free plan. Invite others to a trip by email as editors or viewers and update places in real time. Everyone needs a free account; nobody needs VoyZa Pro to plan together.',
    },
    {
      question: 'Can anonymous users collaborate?',
      answer:
        'No. Planning together needs a free account on both sides, so the trip can sync between phones. Without an account you plan solo and your trips stay on your device.',
    },
    {
      question: 'What is included in VoyZa Pro?',
      answer: `Unlimited saved places (the free plan has 10, plus any referral bonus)

Auto-plan — apply a day-by-day plan across your whole trip (previewing a plan is free)

Copy more than one trip that was shared with you

Route optimization, opening hours, sharing and planning together are free for everyone. VoyZa Pro is a single plan with everything included. You can subscribe weekly (Trip Pass), monthly, or yearly, or buy Lifetime access with a one-time payment. Current prices and any free-trial offer are shown in the app before you confirm.`,
    },
    {
      question: 'How does payment and subscription work?',
      answer:
        'VoyZa purchases are handled through the Apple App Store or Google Play Store. Payments are secure. Subscription plans (Trip Pass, monthly, and yearly) renew automatically unless canceled via your store account; Lifetime is a one-time purchase that does not renew. VoyZa does not directly handle billing or refunds.',
    },
    {
      question: 'Can I restore my purchase on a new device?',
      answer:
        'Yes. VoyZa supports restoring purchases via the "Restore Purchases" option. If you were an anonymous user who paid, the subscription will be tied to your App Store or Google Play account. After signing in, your subscription is merged with your account.',
    },
    {
      question: 'What happens if my subscription expires?',
      answer:
        'You go back to the free plan: your trips and places stay, but you cannot add places beyond the free allowance, apply new Auto-plan proposals, or copy further shared trips until you subscribe again.',
    },
    {
      question: 'Is my data safe?',
      answer:
        "Yes. VoyZa respects your privacy. Anonymous data is stored locally. Authenticated users' data is securely stored in our backend (Supabase). For full details, see our Privacy Policy.",
    },
    {
      question: 'Can I cancel my subscription?',
      answer:
        'Yes. Subscriptions can be canceled anytime through Apple App Store or Google Play Store. Cancelling stops future payments but does not automatically refund prior charges. Lifetime access is a one-time purchase, so there is nothing to cancel.',
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
