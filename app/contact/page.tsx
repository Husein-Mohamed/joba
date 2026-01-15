"use client";
import { MapPin, Phone, Mail, Clock, Send, Coffee, MessageCircle, Instagram, Facebook, Twitter, CheckCircle, X } from 'lucide-react';
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Show success modal
    setShowSuccess(true);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#efebe9] via-white to-[#d7ccc8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3e2723] to-[#5d4037] text-[#efebe9] py-20 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo for dark background */}
            <div className="flex justify-center mb-8">
              <div className="relative h-16 w-48 md:h-20 md:w-56">
                <Image 
                  src="/images/joba images/logos/joba coffee branding.png" 
                  alt="Joba Coffee Logo" 
                  fill
                  className="object-contain filter brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 text-[#d7ccc8]" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[#d7ccc8] max-w-3xl mx-auto">
              Questions, orders, or curious about our beans? We'd love to hear from you
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#d7ccc8] animate-slideInLeft hover-lift">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#795548] focus:border-amber-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#795548] focus:border-amber-500 transition-all"
                    placeholder="joba@info.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#795548] focus:border-amber-500 transition-all"
                    placeholder="(+252) 614 462979"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#795548] focus:border-amber-500 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Question</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="tour">Roastery Tour</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#795548] focus:border-amber-500 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#795548] to-[#6d4c41] hover:from-[#6d4c41] hover:to-[#5d4037] text-white py-4 text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slideInRight">
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#d7ccc8]">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#795548] to-[#6d4c41] text-white p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">zoobe-street, mogadishu</p>
                    <p className="text-gray-600">Banadir, Somalia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#8d6e63] to-[#795548] text-white p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+252 (614) 462979</p>
                    <p className="text-gray-600 text-sm">Mon-Fri: 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#6d4c41] to-[#5d4037] text-white p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@jobacoffee.com</p>
                    <p className="text-gray-600">support@jobacoffee.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#a1887f] to-[#8d6e63] text-white p-3 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7am - 9pm</p>
                    <p className="text-gray-600">Saturday - Sunday: 8am - 10pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-[#6d4c41] to-[#5d4037] rounded-3xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-emerald-100 mb-6">
                Stay connected for updates, coffee tips, and special offers
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#d7ccc8]">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#795548] to-[#6d4c41] hover:from-[#6d4c41] hover:to-[#5d4037] text-white justify-start">
                  <Coffee className="w-5 h-5 mr-2" />
                  Schedule a Roastery Tour
                </Button>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50 justify-start">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Wholesale Inquiries
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d7ccc8] transform transition-all duration-300 hover:shadow-3xl">
          {/* Header Section */}
          <div className="relative p-8 border-b border-[#8d6e63]/30 bg-gradient-to-br from-[#795548] via-[#6d4c41] to-[#5d4037] overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Find Us</h2>
                  <p className="text-[#d7ccc8] text-sm mt-1">Visit our location</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white font-medium text-sm">
                  Banaadir Mall, Laamiyaraha Soobe Junction, Bula Hubey, Muqdisho
                </p>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute inset-0 rounded-b-3xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.4138492885133!2d45.3058144!3d2.0314519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58411b27a8fcc9%3A0x778dbd2f9f7184b5!2sBanaadir%20Mall!5e0!3m2!1sen!2sso!4v1768460930926!5m2!1sen!2sso"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Joba Coffee Location"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-[#d7ccc8] hidden sm:block">
              <p className="text-xs font-semibold text-[#3e2723]">📍 Interactive Map</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-gradient-to-r from-[#efebe9] via-white to-[#efebe9] border-t border-[#d7ccc8]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-[#6d4c41]">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Open 7am - 9pm Daily</span>
              </div>
              <a
                href="https://maps.app.goo.gl/RxYU24sRgbQzpeyp8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#795548] hover:bg-[#6d4c41] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Open in Google Maps</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-scaleIn border border-[#d7ccc8]">
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-br from-[#795548] to-[#6d4c41] rounded-t-3xl">
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Success!</h3>
                  <p className="text-[#d7ccc8] text-sm">Message sent successfully</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-[#3e2723] mb-2">
                  Thank You!
                </h4>
                <p className="text-[#6d4c41] leading-relaxed">
                  Your message has been sent successfully. We'll get back to you within one business day.
                </p>
              </div>

              {/* Action Button */}
              <Button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-gradient-to-r from-[#795548] to-[#6d4c41] hover:from-[#6d4c41] hover:to-[#5d4037] text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
