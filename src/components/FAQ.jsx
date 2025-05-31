import { useState } from "react";
import Heading from "./Heading";
import ComponentLayout from "../layouts/ComponentLayout";

const faqData = [
    {
        question: "Why Zepto Sign Customizer?",
        answer: "While others charge a premium, we deliver the same powerful features at an unbeatable price. Zepto is faster, easier to use, and completely transparent—without draining your budget.",
    },
    {
        question: "Can the App Set Different Pricing Per Letter Based on Size?",
        answer: "Definitely! With Zepto’s advanced pricing options, you can set custom pricing per letter based on its width and height—giving you full control over how each design is priced.",
    },
    {
        question: "Can I Show the Width and Height Calculation?",
        answer: "Yes! Zepto Sign Customizer accurately calculates and displays the width and height of each sign in the live preview. With our advanced pricing model, you can even set unique width and height rules for each font—ensuring precision and flexibility for every custom order.",
    },
    {
        question: "Is Volumetric Weight Calculation Available?",
        answer: "Certainly! Zepto Sign Customizer includes volumetric weight calculation based on the dimensions of the sign. This allows you to apply accurate shipping costs based on weight. Alternatively, you can set flat shipping rates based on the product’s area—offering flexibility in how you manage logistics and pricing.",
    },
    {
        question: "Can My Customers Submit a Quote Request?",
        answer: "Absolutely! Zepto Sign Customizer lets you create a fully customizable quote request form. Collect customer emails, design files, usage details, and any other necessary information. All submissions are sent directly to your email for quick follow-up and easy communication.",
    },
    {
        question: "The App Is Easy to Set Up—But Can I Get Help?",
        answer: "Always! We're here whenever you need help, with expert support just a message away.",
    },
];

// FAQItem subcomponent for reusability
const FAQItem = ({ question, answer, open, onClick, idx }) => (
    <div className="shadow-lg rounded-2xl overflow-hidden transition-all duration-400 ease-in-out w-full">
        <button
            className={`flex flex-row w-full justify-between items-start bg-background shadow text-left p-8 text-lg font-medium cursor-pointer`}
            onClick={onClick}
            aria-expanded={open}
            aria-controls={`faq-answer-${idx}`}
        >
            <span className="text-text">{question}</span>
            <span
                className={`ml-2 transform transition-transform duration-200 ${open ? "rotate-180" : ""
                    }`}
            >
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
            className={`faq-answer bg-background/40 overflow-hidden transition-all duration-500 ease-in-out px-8 leading-relaxed ${open ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0 py-0"
                }`}
        >
            <span>{answer}</span>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="py-15 bg-background/70 pb-24">
            <Heading>Frequently Asked Questions</Heading>
            <ComponentLayout>
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
            </ComponentLayout>
        </div>
    );
};

export default FAQ;
