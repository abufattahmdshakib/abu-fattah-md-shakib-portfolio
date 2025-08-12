import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaLanguage } from 'react-icons/fa';

const faqs = {
  en: [
    {
      question: '🛡️ What is Life Insurance?',
      answer:
        'Life insurance is a contract where you pay regular premiums and your beneficiaries receive a lump sum payment upon your death.',
    },
    {
      question: '📄 How do I apply for a new policy?',
      answer:
        'You can apply for a new life insurance policy through our Agents section or by visiting the "All Policies" page.',
    },
    {
      question: '💰 What is a premium?',
      answer:
        'A premium is the amount you pay periodically to keep your insurance policy active.',
    },
    {
      question: '🔄 Can I change my policy later?',
      answer:
        'Yes, most policies allow updates such as coverage amount, beneficiaries, or policy type.',
    },
  ],
  bn: [
    {
      question: '🛡️ লাইফ ইন্স্যুরেন্স কী?',
      answer:
        'লাইফ ইন্স্যুরেন্স একটি চুক্তি যেখানে আপনি নিয়মিত প্রিমিয়াম প্রদান করেন এবং আপনার মৃত্যুর পরে মনোনীত ব্যক্তি নির্ধারিত টাকা পান।',
    },
    {
      question: '📄 আমি কীভাবে নতুন পলিসির জন্য আবেদন করব?',
      answer:
        'আপনি আমাদের "এজেন্টস" বা "সব পলিসি" পেজ থেকে নতুন লাইফ ইন্স্যুরেন্সের জন্য আবেদন করতে পারেন।',
    },
    {
      question: '💰 প্রিমিয়াম কী?',
      answer:
        'প্রিমিয়াম হল নির্ধারিত একটি অর্থ যা আপনি নির্দিষ্ট সময়ে প্রদান করেন আপনার পলিসি সক্রিয় রাখতে।',
    },
    {
      question: '🔄 আমি কি আমার পলিসি পরিবর্তন করতে পারব?',
      answer:
        'হ্যাঁ, বেশিরভাগ পলিসিতেই কাভারেজ, বেনিফিশিয়ারি বা ধরণ পরিবর্তনের সুযোগ থাকে।',
    },
  ],
};

const Faqs = () => {
  const [language, setLanguage] = useState('en');
  const data = faqs[language];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      {/* Language Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'))}
          className="btn btn-outline btn-primary flex items-center gap-2"
        >
          <FaLanguage />
          {language === 'en' ? 'বাংলা দেখুন' : 'Show English'}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        {language === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা'}
      </h1>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {data.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 shadow-md rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content text-base text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
