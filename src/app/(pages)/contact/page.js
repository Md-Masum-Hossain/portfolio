import React from 'react'
import ContactFrom from '@/app/components/ContactFrom';
import ContactAddress from '@/app/components/ContactAddress';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact | Masum Hossain',
  description: 'Initiate contact with Masum Hossain for full-stack software engineering, SaaS product development, and technical consulting.',
}

function ContactPage() {
  return (
    <div className="w-[95%] max-w-6xl mx-auto py-10 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-accent" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
          Initiate <span className="gradient-text">Collaboration</span>
        </h1>
        <p className="text-secondary text-sm md:text-base leading-relaxed">
          Have an upcoming product, scalable architecture requirement, or engineering role? Send a direct message or connect through professional networks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-5">
          <ContactAddress />
        </div>
        <div className="lg:col-span-7">
          <ContactFrom />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
