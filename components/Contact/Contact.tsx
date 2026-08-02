"use client";
import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';

const Contact = () => {
  const phone = "+91 9660432253";
  const email = "imailmeet4000@gmail.com";
  const action = `https://formsubmit.co/${email}`;
  const [nextUrl, setNextUrl] = useState('#contact');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const base = window.location.origin + window.location.pathname;
      setNextUrl(base + '#contact');
    }
  }, []);

  return (
    <section id="contact" className="Contact py-12 px-4">
      <div className="max-w-5xl mx-auto bg-transparent text-white">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6">I'd love to hear from you. Reach out by phone, email, or send a message using the form below.</p>

              {/* Two-column layout: left (thinner) contact details, vertical divider, right (wider) form */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Left column: contact details (thinner) */}
                <div className="col-span-1 pr-4 md:pr-6 border-r md:border-r md:border-white/20">
                  <div className="sticky top-24">
                    <h3 className="text-xl font-semibold mb-4">Contact details</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <a href={`mailto:${email}`} className="text-lg text-white font-medium underline">{email}</a>
                      </div>

                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <a href={`tel:${phone}`} className="text-lg text-white font-medium underline">{phone}</a>
                      </div>

                      <div className="text-sm text-muted-foreground mt-4">
                        <p>I'll typically respond within a few hours. Feel free to include links or context in your message.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: form (wider) */}
                <div className="col-span-1 md:col-span-2">
                  <ContactForm />
                </div>
              </div>
      </div>
    </section>
  );
};

export default Contact;