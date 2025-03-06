import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, CheckCircle2, ChevronRight, Smartphone, Globe, Clock, Calendar, CreditCard, Users, Building, FileText, Shield, Heart, Wallet, Zap, ChevronLeft, Quote, Star, ArrowLeft, ArrowRight, Award, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePartnerCategory, setActivePartnerCategory] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const partnerCategoriesRef = useRef<HTMLDivElement>(null);
  
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
  
  const partnerCategories = [
    [
      {
        category: "Retirement",
        providers: "Sygnia Signature RA Funds",
        price: "Starting from R500 p/employee/month"
      },
      {
        category: "Medical Aid",
        providers: "Discovery Medical Aid",
        price: "Starting from R1180 per employee per month"
      },
      {
        category: "Employee Assistance Program",
        providers: "Lyra Health (EAP)",
        price: "From R39 p/employee/month",
        description: "Hotline and Apps to support Mental health, family support, Legal and Financial Advice."
      }
    ],
    [
      {
        category: "Savings & Investments",
        providers: "Sygnia, Allan Gray",
        price: "Starting from R500 p/employee/month"
      },
      {
        category: "Medical Insurance",
        providers: "Momentum & Discovery Primary Care",
        price: "Starting from R280 per employee per month"
      },
      {
        category: "Health Care - Mobile and Telemedicine",
        providers: "Kena Health (Telemedicine), Zoie Health (WhatsApp Counselling)",
        price: "From R39 p/employee/month"
      }
    ],
    [
      {
        category: "Holistic Wellbeing",
        providers: "Strove (Physical and mental wellness), SoSerene (holistic wellbeing)",
        price: "From R160 p/employee/month",
        description: "Nutrition, Mental and Physical wellness"
      },
      {
        category: "Mental Health Counselling",
        providers: "Ollie Health (Online 1-on-1 sessions)",
        price: "From R300 per session"
      },
      {
        category: "Financial Management",
        providers: "FinWise (Personal finance tools)",
        price: "Free or from R68 p/month"
      }
    ],
    [
      {
        category: "Career Growth",
        providers: "Coursera, Udemy and other online learning platforms",
        price: "Budget per month, quarter or year"
      },
      {
        category: "More integrations continuously added",
        providers: "Transport, Retail discounts, Equipment - the possibilities are endless",
        price: ""
      }
    ]
  ];

  const awards = [
    {
      title: "Next176 Invests in Bento",
      description: "Empowering Bento to Enhance Employee Benefits for SMEs Across Africa",
      icon: "Award"
    },
    {
      title: "AlphaCode Incubate Winner",
      description: "Recipient of grant funding from South Africa's leading fintech incubator.",
      icon: "Trophy"
    },
    {
      title: "Innovation Bridge Awardee",
      description: "Selected for funding and support to drive innovation and growth.",
      icon: "Award"
    },
    {
      title: "Featured at Startup Club ZA",
      description: "2023's Startup of the Year Runner-up, nominated by South Africa's leading tech startup community.",
      icon: "Trophy"
    },
    {
      title: "Funded by The World Bank",
      description: "Proud partner in fostering global economic development.",
      icon: "Award"
    },
    {
      title: "SAFT Most Innovative Idea Winner",
      description: "Awarded for pioneering solutions in digital employee benefits for SMEs.",
      icon: "Trophy"
    },
    {
      title: "HeavyChef Top 5 Most Exciting Startups Award",
      description: "Nominated for 2024's Top 5 Startups by HeavyChef, Daily Maverick, SAFT, and Hasso Plattner d-school.",
      icon: "Award"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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

  const nextPartnerCategory = () => {
    setActivePartnerCategory((prev) => (prev + 1) % partnerCategories.length);
  };

  const prevPartnerCategory = () => {
    setActivePartnerCategory((prev) => (prev - 1 + partnerCategories.length) % partnerCategories.length);
  };

  const goToPartnerCategory = (index: number) => {
    setActivePartnerCategory(index);
  };

  return (
    <div className="min-h-screen">
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

      <section className="pt-32 pb-16 px-4 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-workplace-beige/60 via-white to-workplace-khaki/20"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
            
            <div className="order-2 md:order-2 flex justify-center md:justify-end">
              <div className="w-64 md:w-96 lg:w-[450px]">
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
              <Smartphone className="h-5 w-5 mr-2 text-workplace-maroon" />
              <span>Mobile friendly</span>
            </div>
            
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-workplace-maroon" />
              <span>Built for South African Businesses</span>
            </div>
            
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-workplace-maroon" />
              <span>Cut 90% of manual effort</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={`py-16 md:py-24 bg-workplace-beige/30 px-4 ${isSectionVisible('features') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scaleable HR modules to design your employee's Workhub offering</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your team and HR processes efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-1' : 'opacity-0'}`}>
              <Calendar className="h-10 w-10 text-workplace-maroon mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leave Management</h3>
              <p className="text-gray-600 mb-4">Streamlined leave tracking with payroll integration and self-service options.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Payroll integrated</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Self service with live accrual</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integrated Approvals, admin and reporting</span>
                </li>
              </ul>
            </div>
            
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-2' : 'opacity-0'}`}>
              <CreditCard className="h-10 w-10 text-workplace-maroon mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expense & Benefits</h3>
              <p className="text-gray-600 mb-4">Reimbursement engine to set budgets for benefits</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Training and development</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transport</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>WFH data and much more</span>
                </li>
              </ul>
            </div>
            
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-3' : 'opacity-0'}`}>
              <Heart className="h-10 w-10 text-workplace-maroon mb-4" />
              <h3 className="text-xl font-semibold mb-2">Employee Support</h3>
              <p className="text-gray-600 mb-4">Comprehensive tools to support employee wellbeing and growth.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employee assistance program</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emergency hotline</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health, legal & financial advice</span>
                </li>
              </ul>
            </div>
            
            <div className={`feature-card ${isSectionVisible('features') ? 'section-fade section-fade-delay-4' : 'opacity-0'}`}>
              <Wallet className="h-10 w-10 text-workplace-maroon mb-4" />
              <h3 className="text-xl font-semibold mb-2">Holistic array of benefits</h3>
              <p className="text-gray-600 mb-4">Give your employees access to personalised benefit origination and administration.</p>
              <ul className="space-y-2">
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Savings and Retirement</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Medical Aid and Dr consultations</span>
                </li>
                <li className="feature-list-item">
                  <Check className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                  <span>Wellness and Mental health access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className={`py-16 md:py-24 px-4 bg-workplace-beige/30 ${isSectionVisible('packages') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable solutions that grow with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Self-service leave management</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Payroll integration</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee onboarding and offboarding</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee and team information</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee remuneration and payslips</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee vault for documentation</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
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
                    <CheckCircle2 className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All Basic features, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reimbursement and claims engine</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Budgeted reimbursements</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Training and development</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Data and communications</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Travel & Transport</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Office Supplies</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Meals & Entertainment</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
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
                    <CheckCircle2 className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All Basic & Benefits features, plus:</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Benefits origination and administration</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Retirement and savings</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Medical aid and doctor consultations</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Insurance</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mental Wellbeing</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
                    <span>Physical Wellness</span>
                  </li>
                  <li className="feature-list-item">
                    <CheckCircle2 className="h-4 w-4 text-workplace-maroon mr-2 flex-shrink-0 mt-0.5" />
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

      <section id="benefits-partners" className={`py-16 md:py-24 px-4 ${isSectionVisible('benefits-partners') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Add-Ons & Partner Benefits to provide a holistic WorkLife for your employees (available via MyBento today)
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto" ref={partnerCategoriesRef}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activePartnerCategory * 100}%)` }}
              >
                {partnerCategories.map((categoryGroup, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {categoryGroup.map((category, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-workplace-beige/40 transition-all hover:shadow-md hover:border-workplace-maroon/30">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{category.category}</h3>
                              {category.description && (
                                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                              )}
                              <p className="text-gray-700">{category.providers}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <p className="font-semibold text-workplace-maroon">{category.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-workplace-maroon text-workplace-maroon"
                onClick={prevPartnerCategory}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              
              <div className="flex space-x-2">
                {partnerCategories.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      activePartnerCategory === index ? 'bg-workplace-maroon' : 'bg-gray-300'
                    }`}
                    onClick={() => goToPartnerCategory(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-workplace-maroon text-workplace-maroon"
                onClick={nextPartnerCategory}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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
                        <Quote className="h-10 w-10 text-workplace-maroon opacity-40 mr-4" />
                        <div className="flex flex-col">
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
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
            
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-workplace-maroon text-workplace-maroon"
                onClick={prevTestimonial}
              >
                <ArrowLeft className="h-6 w-6" />
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
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="recognition" className={`py-16 md:py-24 px-4 bg-workplace-beige/30 ${isSectionVisible('recognition') ? 'section-fade' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recognition & Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our journey has been recognized by industry leaders and partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-sm p-6 border border-workplace-beige/40 transition-all hover:shadow-md hover:border-workplace-maroon/30 ${isSectionVisible('recognition') ? `section-fade section-fade-delay-${index % 4 + 1}` : 'opacity-0'}`}
              >
                <div className="flex flex-col items-center text-center">
                  {award.icon === "Award" ? 
                    <Award className="h-12 w-12 text-workplace-maroon mb-4" /> : 
                    <Trophy className="h-12 w-12 text-workplace-maroon mb-4" />
                  }
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-workplace-maroon/5 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started today and see the difference in your team's productivity and happiness
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Button className="w-full md:w-auto bg-workplace-maroon hover:bg-workplace-maroon/90 text-white px-8 py-6 text-lg" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
              Start Free Trial
            </Button>
            
            <Button variant="outline" className="w-full md:w-auto border-workplace-maroon text-workplace-maroon hover:bg-workplace-maroon/5 px-8 py-6 text-lg" onClick={() => window.location.href = 'mailto:dennis@mybento.net'}>
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-workplace-maroon to-workplace-maroon/70">Workplace</div>
              <p className="text-sm text-gray-500 mt-2">
                Simple, Fast & Affordable HR for Growing Teams
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-medium mb-2">Contact</h4>
                <p className="text-sm text-gray-500">dennis@mybento.net</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Legal</h4>
                <div className="flex flex-col gap-1">
                  <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-workplace-maroon">Privacy Policy</Link>
                  <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-workplace-maroon">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Workplace by MyBento. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
