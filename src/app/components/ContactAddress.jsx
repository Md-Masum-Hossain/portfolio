import React from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MotionWrapper } from './motion/MotionWrapper';
import siteConfig from '@/config/siteConfig';

function ContactAddress() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: siteConfig.links.email,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/[\s-]/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location,
      href: siteConfig.locationUrl,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: siteConfig.links.github,
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: siteConfig.links.linkedin,
      ariaLabel: 'Connect on LinkedIn',
    },
    {
      name: 'Email',
      icon: Mail,
      href: siteConfig.links.email,
      ariaLabel: 'Send an email',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: siteConfig.links.facebook,
      ariaLabel: 'Facebook profile',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Direct Info Cards */}
      <section className="space-y-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <MotionWrapper key={info.label} delay={index * 0.1} type="left">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-subtle bg-surface transition-all duration-200 hover:border-accent/40 group">
                <div className="w-11 h-11 shrink-0 rounded-md border border-subtle bg-base flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-secondary">
                    {info.label}
                  </p>
                  <a
                    href={info.href}
                    className="text-sm font-semibold text-primary hover:text-accent transition-colors truncate block mt-0.5"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </section>

      {/* Follow Me Section - Clean Monochrome Polish */}
      <MotionWrapper type="left" delay={0.35}>
        <section className="p-5 rounded-lg border border-subtle bg-surface">
          <h4 className="text-xs font-mono uppercase tracking-wider text-secondary mb-4">
            Connect & Follow
          </h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-3 rounded-lg border border-subtle bg-base text-secondary hover:text-primary hover:border-accent/40 transition-all duration-200 inline-flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </section>
      </MotionWrapper>

      {/* Embedded Location Map Frame */}
      <MotionWrapper type="left" delay={0.45}>
        <section className="p-3 rounded-lg border border-subtle bg-surface">
          <div className="flex items-center gap-2 mb-2.5 px-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-secondary">Dhaka, Bangladesh</span>
          </div>
          <div className="overflow-hidden rounded-md border border-subtle bg-base">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024864868234!2d90.3917183149812!3d23.750903394589736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0b2f6e6b7%3A0x7d5a4f4c4e4e4e4e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale opacity-80 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title="Location Map"
            />
          </div>
        </section>
      </MotionWrapper>
    </div>
  );
}

export default ContactAddress;
