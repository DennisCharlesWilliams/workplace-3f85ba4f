
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-16 px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 text-workplace-purple">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-workplace-purple">Empowering Businesses with Seamless HR & Benefits Management</h2>
            
            <p className="mb-4">
              At Workplace, we believe that managing leave and benefits should be effortless, not a headache. Designed for small to medium businesses, our platform simplifies leave tracking, benefit claims, and HR admin—so you can focus on what truly matters: growing your business and supporting your team.
            </p>
            
            <p className="mb-4">
              With an intuitive, automated, and cost-effective solution, Workplace eliminates the inefficiencies of spreadsheets, email chains, and manual approvals. Whether you're a startup scaling quickly or an established company looking to modernize, our platform grows with you.
            </p>
            
            <p className="mb-4">
              Our team brings together a powerful combination of entrepreneurial expertise, technology leadership, and deep industry insight. With extensive experience in building and scaling tech startups, we understand the unique challenges businesses face in managing HR and benefits. Our background spans engineering, fintech, user experience, and software development, equipping us with the skills to create a platform that is not only seamless and efficient but also highly user-centric.
            </p>
            
            <p className="mb-8">
              Driven by a passion for innovation and problem-solving, we have built Workplace to offer a smarter, more effective way for businesses to handle HR administration. By leveraging automation and cutting-edge technology, we empower teams to operate with greater agility, efficiency, and transparency.
            </p>
            
            <h3 className="text-lg md:text-xl font-semibold mb-4">Why Workplace?</h3>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Fast & Easy Setup</strong> – Get started in minutes, no IT team required.</li>
              <li><strong>Affordable & Scalable</strong> – Pay for what you need, no big upfront costs.</li>
              <li><strong>Seamless Automation</strong> – Say goodbye to paperwork and manual errors.</li>
              <li><strong>Compliance & Transparency</strong> – Keep leave policies and benefits in check effortlessly.</li>
            </ul>
            
            <p className="text-lg font-medium text-center">
              Join the growing number of businesses simplifying HR with Workplace today.
            </p>
            
            <div className="mt-12 text-center">
              <Button 
                className="bg-workplace-purple hover:bg-purple-600 text-white px-8 py-6"
                onClick={() => window.location.href = 'mailto:dennis@mybento.net'}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
