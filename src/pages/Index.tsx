
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, CheckCircle2, ChevronRight, Smartphone, Globe, Clock, Calendar, CreditCard, Users, Building, FileText, Shield, Heart } from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-workplace-purple to-purple-700">Workplace</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-workplace-purple transition-colors">Features</a>
              <a href="#packages" className="text-sm font-medium text-gray-600 hover:text-workplace-purple transition-colors">Packages</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-workplace-purple transition-colors">Contact Us</a>
            </nav>
            <div>
              <Button className="bg-workplace-purple hover:bg-purple-600 transition-colors text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-workplace-lightblue/50 via-white to-workplace-lightgreen/40"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              The Easy & Affordable HR and Benefits hub that scales with your company
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Seamless Leave Management & Benefit Claims - Made Simple to automate and digitise your startup in minutes
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
              <Button className="w-full md:w-auto bg-workplace-purple hover:bg-purple-600 transition-all text-white px-8 py-6 text-lg rounded-xl">
                Start Free Trial
              </Button>
              
              <Button variant="outline" className="w-full md:w-auto border-workplace-purple text-workplace-purple hover:bg-workplace-purple/5 px-8 py-6 text-lg rounded-xl">
                Book a Demo <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-workplace-purple" />
                <span>Mobile friendly</span>
              </div>
              
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-workplace-purple" />
                <span>Built for South African Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-16 md:py-24 bg-workplace-lightgray/50 px-4 ${isSectionVisible('features') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scaleable HR modules to design your employee's Workhub offering</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your team and HR processes efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-1' : 'opacity-0'}`}>
              <Calendar className="h-10 w-10 text-workplace-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leave Management</h3>
              <p className="text-gray-600 mb-4">Streamlined leave tracking with payroll integration and self-service options.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Payroll integrated</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Self service for employees</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Endlessly configurable</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-2' : 'opacity-0'}`}>
              <CreditCard className="h-10 w-10 text-workplace-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expense & Benefits</h3>
              <p className="text-gray-600 mb-4">Reimbursement engine to set budgets for benefits</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Training and development</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transport</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>WFH data and much more</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-3' : 'opacity-0'}`}>
              <Heart className="h-10 w-10 text-workplace-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Employee Support</h3>
              <p className="text-gray-600 mb-4">Comprehensive tools to support employee wellbeing and growth.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employee assistance program</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emergency hotline</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health, legal & financial advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className={`py-16 md:py-24 px-4 ${isSectionVisible('packages') ? 'section-fade' : 'opacity-0'}`}>
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
                  <span className="text-3xl font-bold">R40</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Get up and running</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Payroll integration</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee onboarding and offboarding</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee and team information</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee remuneration and payslips</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee vault for documentation</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>HR policies management</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Self-service leave management</span>
                  </li>
                </ul>
              </div>
              
              <div className="package-card-footer">
                <Button className="w-full text-workplace-purple hover:bg-workplace-purple/5 border-workplace-purple">
                  Select Basics
                </Button>
              </div>
            </div>
            
            {/* Plus Package */}
            <div className={`package-card relative ${isSectionVisible('packages') ? 'section-fade section-fade-delay-2' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 bg-workplace-purple text-white px-3 py-1 text-xs font-medium">
                Popular
              </div>
              
              <div className="package-card-header bg-workplace-purple/5">
                <h3 className="font-semibold text-workplace-purple mb-1">Add benefits</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">R80</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Enhance your employee experience with benefit reimbursements</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item font-medium text-black">
                    <span>Everything in Basics, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reimbursement and claims engine</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Budgeted reimbursements</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Training and development</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data and communications</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Configure any perk</span>
                  </li>
                </ul>
              </div>
              
              <div className="package-card-footer">
                <Button className="w-full bg-workplace-purple hover:bg-purple-600 text-white">
                  Select Benefits
                </Button>
              </div>
            </div>
            
            {/* Extra Package */}
            <div className={`package-card ${isSectionVisible('packages') ? 'section-fade section-fade-delay-3' : 'opacity-0'}`}>
              <div className="package-card-header">
                <h3 className="font-semibold text-gray-500 mb-1">Empower employees</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">R120</span>
                  <span className="text-gray-500 ml-1">/ month per employee</span>
                </div>
                <p className="text-sm text-gray-500">Offer access to a full range of benefits to ensure your employees wellness</p>
              </div>
              
              <div className="package-card-content">
                <ul className="space-y-3">
                  <li className="feature-list-item font-medium text-black">
                    <span>Everything in Benefits, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Benefits origination and administration</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Retirement and savings</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Medical aid and doctor consultations</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Insurance</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee assistance program</span>
                  </li>
                </ul>
              </div>
              
              <div className="package-card-footer">
                <Button className="w-full text-workplace-purple hover:bg-workplace-purple/5 border-workplace-purple">
                  Select Empower
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-workplace-purple/10 to-workplace-lightblue/20 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="glass-panel max-w-4xl mx-auto rounded-2xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your HR processes?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Join hundreds of South African businesses already using Workplace to simplify their HR and benefits management.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button className="bg-workplace-purple hover:bg-purple-600 text-white px-8">Get Started Today</Button>
              <Button variant="outline" className="border-workplace-purple text-workplace-purple hover:bg-workplace-purple/5">
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
              Have questions about our packages or need a customized solution? Reach out to us!
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8 border border-workplace-lightgray">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border border-workplace-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-purple/30"
                  placeholder="Full Name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-workplace-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-purple/30"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                <input
                  id="company"
                  type="text"
                  className="w-full p-3 border border-workplace-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-purple/30"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-workplace-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-workplace-purple/30"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button className="w-full bg-workplace-purple hover:bg-purple-600 text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 border-t border-workplace-lightgray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-workplace-purple to-purple-700">Workplace</h3>
              <p className="text-gray-600 mt-4">The easy and affordable HR and benefits hub that scales with your company.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Leave Management</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Expense Claims</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Benefits Administration</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Employee Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-workplace-purple transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-workplace-purple transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Workplace. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-workplace-purple transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-workplace-purple transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-workplace-purple transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
