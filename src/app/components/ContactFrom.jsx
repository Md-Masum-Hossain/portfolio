'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Send, Loader2 } from 'lucide-react'
import { MotionWrapper } from './motion/MotionWrapper'

function ContactFrom() {
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value,
        }),
      });

      if (res.ok) {
        setIsLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message Transmitted Successfully",
          text: "Thank you for reaching out. I will respond to your inquiry promptly.",
          showConfirmButton: false,
          timer: 2000,
          background: "#141417",
          color: "#F4F4F5",
        });
        form.reset();
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Transmission Failed",
          text: "Something went wrong while delivering the message. Please try again or email directly.",
          background: "#141417",
          color: "#F4F4F5",
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please verify your connection or email directly.",
        background: "#141417",
        color: "#F4F4F5",
      });
    }
  };

  return (
    <MotionWrapper type="right" delay={0.15}>
      <div className="p-6 md:p-8 rounded-lg border border-subtle bg-surface shadow-2xl">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-1">
          Send a Message
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-secondary mb-6">
          Direct communication channel for contracts and collaborations
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-secondary flex items-center justify-between">
                <span>Your Name</span>
                <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Alex Morgan"
                autoComplete="name"
                required
                className="w-full p-3 rounded-md border border-subtle bg-base text-primary placeholder:text-secondary/40 focus:border-accent focus:outline-none transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-secondary flex items-center justify-between">
                <span>Email Address</span>
                <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="alex@company.com"
                autoComplete="email"
                required
                className="w-full p-3 rounded-md border border-subtle bg-base text-primary placeholder:text-secondary/40 focus:border-accent focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-secondary flex items-center justify-between">
              <span>Subject</span>
              <span className="text-accent">*</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Full-Stack Application Development Inquiry"
              required
              className="w-full p-3 rounded-md border border-subtle bg-base text-primary placeholder:text-secondary/40 focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-secondary flex items-center justify-between">
              <span>Message</span>
              <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              placeholder="Outline project specifications, engineering challenges, timeline, or scope..."
              required
              className="w-full p-3 rounded-md border border-subtle bg-base text-primary placeholder:text-secondary/40 focus:border-accent focus:outline-none transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isloading}
            className={`btn-primary w-full py-3.5 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 ${
              isloading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:brightness-105'
            }`}
          >
            {isloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </MotionWrapper>
  );
}

export default ContactFrom;
