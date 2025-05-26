import { useState } from 'react'
import Heading from './Heading'

const faqData = [
    {
        question: 'What is ZeptoApp?',
        answer: 'ZeptoApp is a platform that helps you build landing pages quickly and easily.',
    },
    {
        question: 'How do I get started?',
        answer: 'Simply sign up and follow the onboarding steps to create your first landing page.',
    },
    {
        question: 'Is there a free trial?',
        answer: 'Yes, we offer a 14-day free trial for all new users.',
    },
]

// FAQItem subcomponent for reusability
const FAQItem = ({ question, answer, open, onClick, idx }) => (
    <div className="bg-background shadow-lg rounded-2xl overflow-hidden transition-all duration-400 ease-in-out w-full">
        <button
            className={`flex flex-row w-full justify-between items-center text-left border-none p-8 text-lg font-medium cursor-pointer outline-none transition-colors duration-200`}
            onClick={onClick}
            aria-expanded={open}
            aria-controls={`faq-answer-${idx}`}
        >
            <span className="text-text">{question}</span>
            <span className={`ml-2 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </button>
        <div
            id={`faq-answer-${idx}`}
            className={`faq-answer border-t border-primary bg-background  overflow-hidden transition-all duration-400 ease-in-out px-8 ${open ? 'max-h-40 opacity-100 py-8' : 'py-0 max-h-0 opacity-0'}`}
        >
            <span>{answer}</span>
        </div>
    </div>
)

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <div className="max-w-5xl mx-auto">
            <Heading>Frequently Asked Questions</Heading>
            <div className="flex flex-col gap-4">
                {faqData.map((item, idx) => (
                    <FAQItem
                        key={idx}
                        idx={idx}
                        question={item.question}
                        answer={item.answer}
                        open={openIndex === idx}
                        onClick={() => toggleIndex(idx)}
                    />
                ))}
            </div>
        </div>
    )
}

export default FAQ