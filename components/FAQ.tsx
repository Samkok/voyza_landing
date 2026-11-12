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
    <div id={id} className="scroll-mt-24 border-b border-ink/15">
      <h3>
        <button
          type="button"
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`${id}-answer`}
          className="group flex w-full items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <span className="font-display text-[21px] leading-snug text-ink sm:text-[23px]">{question}</span>
          <span
            aria-hidden="true"
            className={`relative mt-1 h-7 w-7 shrink-0 rounded-full border transition duration-300 ${
              isOpen ? 'rotate-45 border-ink bg-ink text-paper-hi' : 'border-ink/25 text-ink group-hover:border-ink'
            }`}
          >
            <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-answer`}
        aria-hidden={!isOpen}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="whitespace-pre-line pb-7 pr-2 text-[17px] leading-relaxed text-ink-soft sm:pr-12">{answer}</div>
        </div>
      </div>
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
        'No. You can start without one, and your trips stay on your device. Creating an account lets you sync trips across devices and collaborate with others.',
    },
    {
      question: 'Can I collaborate with friends on a trip?',
      answer:
        'Yes, on the free plan. Invite others to a trip by email as editors or viewers and see changes in real time. Everyone needs a free account. Viewing and editing a shared trip are free; adding new places needs VoyZa Pro for the person adding them.',
    },
    {
      question: 'Can anonymous users collaborate?',
      answer:
        'No. Planning together needs a free account on both sides, so the trip can sync between phones. Without an account you plan solo and your trips stay on your device.',
    },
    {
      question: 'What is included in VoyZa Pro?',
      answer: `Adding places to your trips, as many as you need (creating trips is free)

Auto-plan — apply a day-by-day plan across your whole trip (previewing a plan is free)

Copy more than one trip that was shared with you

Route optimization, opening hours, sharing and planning together are free for everyone. VoyZa Pro is a single plan with everything included. You can subscribe weekly (Trip Pass), monthly, or yearly, or buy Lifetime access with a one-time payment. The yearly plan starts with a 7-day free trial where the store offers it; current prices are shown in the app before you confirm.`,
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
        'You go back to the free plan: your trips and places stay, and you can still optimize, share and plan together, but you cannot add new places, apply new Auto-plan proposals, or copy further shared trips until you subscribe again.',
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
    <section id="faq" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <header data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">FAQ</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em] text-ink">
            Questions, <em className="font-accent text-[1.08em] italic text-coral">answered.</em>
          </h2>
          <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink-soft">
            Something else? Write to{' '}
            <a href="mailto:hengsamkok76@gmail.com" className="text-ink underline decoration-coral decoration-2 underline-offset-4">
              hengsamkok76@gmail.com
            </a>
            .
          </p>
        </header>
        <div className="border-t border-ink/15">
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
