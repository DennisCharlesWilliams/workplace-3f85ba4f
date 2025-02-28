
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, CheckCircle2, ChevronRight, Smartphone, Globe, Clock, Calendar, CreditCard, Users, Building, FileText, Shield, Heart, Wallet, Zap, ChevronLeft, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Workplace has completely transformed our leave management! What used to take hours of back-and-forth emails is now handled in minutes. The automation has saved us so much time, and the cost is unbeatable for the value it provides.",
      author: "Sarah M.",
      position: "HR Manager",
      company: "Tech Startup"
    },
    {
      quote: "As a small business, we needed an HR solution that didn't break the bank but still made life easier. Workplace was the perfect fit—fast to set up, simple to use, and it keeps our team organized without any admin headaches.",
      author: "James T.",
      position: "Founder",
      company: "Digital Agency"
    },
    {
      quote: "We were drowning in spreadsheets trying to track leave and benefits. Workplace streamlined everything overnight! We now have a clear system in place, and the cost savings from reducing errors and manual work have been incredible.",
      author: "Priya K.",
      position: "Operations Director",
      company: "E-commerce Business"
    },
    {
      quote: "Managing leave requests used to be a nightmare—constant follow-ups, lost emails, and payroll mismatches. Workplace took all of that stress away. It's easy, affordable, and has given us back precious hours each month!",
      author: "David L.",
      position: "People & Culture Lead",
      company: "Growing SaaS Company"
    }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Check which sections are visible
      document.querySelectorAll('section[id]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const inView = (
          rect.top <= window.innerHeight * 0.75 &&
          rect.bottom >= window.innerHeight * 0.25
        );
        
        if (inView) {
          setVisibleSections(prev => new Set(prev).add(section.id));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isSectionVisible = (id: string) => visibleSections.has(id);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);
  };

  // Custom hand-illustrated style icon renderer
  const HandDrawnIcon = ({ children, className = "" }) => (
    <div className={`hand-drawn-icon ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-workplace-beige/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-workplace-maroon to-workplace-maroon/70">Workplace</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-workplace-maroon transition-colors">Features</a>
              <a href="#packages" className="text-sm font-medium text-gray-600 hover:text-workplace-maroon transition-colors">Packages</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-workplace-maroon transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-workplace-maroon transition-colors">Contact Us</a>
            </nav>
            <div>
              <Button className="bg-workplace-maroon hover:bg-workplace-maroon/90 transition-colors text-white" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-workplace-beige/60 via-white to-workplace-khaki/20"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="order-1 text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Simple, Fast & Affordable Leave & Benefits for Growing Teams
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                The no-fuss solution to streamline leave and benefit claims - get started today with minimal effort.
              </p>
              
              <div className="flex flex-col md:flex-row justify-start items-center gap-4 mb-12">
                <Button className="w-full md:w-auto bg-workplace-maroon hover:bg-workplace-maroon/90 transition-all text-white px-8 py-6 text-lg rounded-xl" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                  Start Free Trial
                </Button>
                
                <Button variant="outline" className="w-full md:w-auto border-workplace-maroon text-workplace-maroon hover:bg-workplace-maroon/5 px-8 py-6 text-lg rounded-xl" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                  Book a Demo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="order-2 md:order-2 flex justify-center md:justify-end">
              <div className="w-52 md:w-72 lg:w-80">
                <img 
                  src="/lovable-uploads/1b85f901-bd2c-4c9d-8fbb-ca8796b44396.png" 
                  alt="Person with heart illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600 mt-4">
            <div className="flex items-center">
              <div className="hand-drawn-icon text-workplace-maroon mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated">
                  <path d="M7 19c-1.5-1.5-3-4.5-3-8 0-5 3-7 6-7s6 2 6 7c0 3.5-1.5 6.5-3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 5c1 2 2 5 2 7 0 2-1 5-2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 15h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Mobile friendly</span>
            </div>
            
            <div className="flex items-center">
              <div className="hand-drawn-icon text-workplace-maroon mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 3v6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 16l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Built for South African Businesses</span>
            </div>
            
            <div className="flex items-center">
              <div className="hand-drawn-icon text-workplace-maroon mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated">
                  <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Cut 90% of manual effort</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-16 md:py-24 bg-workplace-beige/30 px-4 ${isSectionVisible('features') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scaleable HR modules to design your employee's Workhub offering</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your team and HR processes efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-1' : 'opacity-0'}`}>
              <div className="hand-drawn-icon text-workplace-maroon mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-10 h-10">
                  <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 15h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 15h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 19h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 19h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 19h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leave Management</h3>
              <p className="text-gray-600 mb-4">Streamlined leave tracking with payroll integration and self-service options.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Payroll integrated</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Self service with live accrual</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Integrated Approvals, admin and reporting</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-2' : 'opacity-0'}`}>
              <div className="hand-drawn-icon text-workplace-maroon mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-10 h-10">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 15h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expense & Benefits</h3>
              <p className="text-gray-600 mb-4">Reimbursement engine to set budgets for benefits</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Training and development</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Transport</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>WFH data and much more</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-3' : 'opacity-0'}`}>
              <div className="hand-drawn-icon text-workplace-maroon mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-10 h-10">
                  <path d="M19.5 12.572L12 20l-7.5-7.428m0 0A5 5 0 1112 4.006a5 5 0 017.5 8.566" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Employee Support</h3>
              <p className="text-gray-600 mb-4">Comprehensive tools to support employee wellbeing and growth.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Employee assistance program</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Emergency hotline</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Mental health, legal & financial advice</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4 - New Module */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-4' : 'opacity-0'}`}>
              <div className="hand-drawn-icon text-workplace-maroon mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-10 h-10">
                  <path d="M4 4a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 14l-3 3v3a2 2 0 002 2h8a2 2 0 002-2v-3l-3-3H9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 6h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic array of benefits</h3>
              <p className="text-gray-600 mb-4">Give your employees access to personalised benefit origination and administration.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Savings and Retirement</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Medical Aid and Dr consultations</span>
                </li>
                <li className="feature-list-item">
                  <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Wellness and Mental health access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 md:py-24 px-4 ${isSectionVisible('testimonials') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses who've transformed their HR processes with Workplace
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto" ref={testimonialRef}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-workplace-beige">
                      <div className="flex items-start mb-6">
                        <div className="hand-drawn-icon text-workplace-maroon opacity-40 mr-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-10 h-10">
                            <path d="M7 16.3c-.8.5-1.5.3-2-.4-1.6-2.2-2-6 .5-11l.3-.5h3.7L8 9c0 .5.3 1 .8 1.5.6.5 1 1.3 1 2.1 0 1-.3 1.8-.9 2.4-.5.6-1.3.9-2 .9zm9.5 0c-.8.5-1.5.3-2-.4-1.6-2.2-2-6 .5-11l.3-.5h3.7L17.5 9c0 .5.3 1 .8 1.5.6.5 1 1.3 1 2.1 0 1-.3 1.8-.9 2.4-.5.6-1.2.9-2 .9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="hand-drawn-icon text-yellow-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-5 h-5">
                                  <path d="M12.5 3l1.7 5.7h5.8l-4.7 3.8 1.8 5.7-4.6-3.4-4.6 3.4 1.8-5.7-4.7-3.8h5.8L12.5 3z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed mb-6 text-gray-700 italic">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="bg-workplace-maroon/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <span className="text-workplace-maroon font-semibold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-workplace-maroon text-workplace-maroon"
                onClick={prevTestimonial}
              >
                <div className="hand-drawn-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-6 h-6">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index ? 'bg-workplace-maroon' : 'bg-gray-300'
                    }`}
                    onClick={() => goToTestimonial(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-workplace-maroon text-workplace-maroon"
                onClick={nextTestimonial}
              >
                <div className="hand-drawn-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-6 h-6">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className={`py-16 md:py-24 px-4 bg-workplace-beige/30 ${isSectionVisible('packages') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable solutions that grow with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Base Package */}
            <div className={`package-card ${isSectionVisible('packages') ? 'section-fade section-fade-delay-1' : 'opacity-0'}`}>
              <div className="package-card-header">
                <h3 className="font-semibold text-gray-500 mb-1">Get the basics</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">R45</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Get up and running fast with all the basics you need to save on time, effort and manual mistakes</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Self-service leave management</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Payroll integration</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Employee onboarding and offboarding</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Employee and team information</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Employee remuneration and payslips</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Employee vault for documentation</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>HR policies management</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500 mt-4 text-center">
                  VAT inclusive
                </div>
              </div>
              
              <div className="package-card-footer">
                <Button variant="outline" className="w-full text-workplace-maroon hover:bg-workplace-maroon hover:text-white border-workplace-maroon" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                  Select Basics
                </Button>
              </div>
            </div>
            
            {/* Plus Package */}
            <div className={`package-card relative ${isSectionVisible('packages') ? 'section-fade section-fade-delay-2' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 bg-workplace-maroon text-white px-3 py-1 text-xs font-medium">
                Popular
              </div>
              
              <div className="package-card-header bg-workplace-maroon/5">
                <h3 className="font-semibold text-workplace-maroon mb-1">Add benefits</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">R90</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Enhance your employee experience with benefit reimbursements</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item text-gray-400">
                    <div className="hand-drawn-icon text-gray-400 mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>All Basic features, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Reimbursement and claims engine</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Budgeted reimbursements</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Training and development</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Data and communications</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Travel & Transport</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Office Supplies</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Meals & Entertainment</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Configure any perk</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500 mt-4 text-center">
                  VAT inclusive
                </div>
              </div>
              
              <div className="package-card-footer">
                <Button className="w-full bg-workplace-maroon hover:bg-workplace-maroon/90 text-white" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                  Select Benefits
                </Button>
              </div>
            </div>
            
            {/* Extra Package */}
            <div className={`package-card ${isSectionVisible('packages') ? 'section-fade section-fade-delay-3' : 'opacity-0'}`}>
              <div className="package-card-header">
                <h3 className="font-semibold text-gray-500 mb-1">Empower employees</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">R200</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Offer access to a full range of holistic, modern benefits that ensure your employees wellness</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item text-gray-400">
                    <div className="hand-drawn-icon text-gray-400 mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>All Basic & Benefits features, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Benefits origination and administration</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Retirement and savings</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Medical aid and doctor consultations</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Insurance</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Mental Wellbeing</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Physical Wellness</span>
                  </li>
                  <li className="feature-list-item">
                    <div className="hand-drawn-icon text-workplace-maroon mr-2 flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-illustrated w-4 h-4">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Employee assistance program</span>
                  </li>
                </ul>
                <div className="text-xs text-gray-500 mt-4 text-center">
                  VAT inclusive
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  Monetary contributions to savings and insurance excluded
                </div>
              </div>
              
              <div className="package-card-footer">
                <Button variant="outline" className="w-full text-workplace-maroon hover:bg-workplace-maroon hover:text-white border-workplace-maroon" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                  Select Empower
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-workplace-maroon/10 to-workplace-khaki/20 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="glass-panel max-w-4xl mx-auto rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your HR processes?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Join progressive South African businesses already using Workplace to simplify their HR and benefits management.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="bg-workplace-maroon hover:bg-workplace-maroon/90 text-white px-8" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>Get Started Today</Button>
              <Button variant="outline" className="border-workplace-maroon text-workplace-maroon hover:bg-workplace-maroon hover:text-white" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 px-4 ${isSectionVisible('contact') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our packages or need a customised solution? Reach out to us!
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8 border border-workplace-beige">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:dennis@mybento.net';
            }}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30"
                  placeholder="Full Name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="companySize" className="text-sm font-medium">Size of Company</label>
                <select
                  id="companySize"
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30 bg-white"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-200">100-200</option>
                  <option value="200-500">200-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="payrollSystem" className="text-sm font-medium">Current Payroll System</label>
                <select
                  id="payrollSystem"
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30 bg-white"
                >
                  <option value="">Select your payroll system</option>
                  <option value="None / Excel">None / Excel</option>
                  <option value="SimplePay">SimplePay</option>
                  <option value="Payspace">Payspace</option>
                  <option value="KarbonPay">KarbonPay</option>
                  <option value="Sage">Sage</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-workplace-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-maroon/30"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-workplace-maroon hover:bg-workplace-maroon/90 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-workplace-beige/40 py-12 px-4 border-t border-workplace-beige">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-workplace-maroon to-workplace-maroon/80">Workplace</h3>
              <p className="text-gray-600 mt-4">The easy and affordable HR and benefits hub that scales with your company.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-workplace-maroon transition-colors">Leave Management</a></li>
                <li><a href="#features" className="hover:text-workplace-maroon transition-colors">Expense Claims</a></li>
                <li><a href="#features" className="hover:text-workplace-maroon transition-colors">Benefits Administration</a></li>
                <li><a href="#features" className="hover:text-workplace-maroon transition-colors">Employee Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about-us" className="hover:text-workplace-maroon transition-colors">About Us</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-workplace-maroon transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-workplace-maroon transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-workplace-maroon transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Workplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .hand-illustrated {
          stroke-dasharray: 100;
          animation: sketch 2s ease-in-out forwards;
        }
        
        @keyframes sketch {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .hand-drawn-icon svg {
          filter: url(#marker-effect);
        }
      `}</style>
      
      {/* SVG Filter for hand-drawn effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="marker-effect" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" seed="1" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default Index;
