
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Cookie Policy</h1>
          <p className="text-center text-gray-500 mb-8">Effective Date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Workplace uses cookies and similar tracking technologies to enhance user experience and improve our platform.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device to help us recognize you and remember your preferences.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
            <p className="mb-2">We use cookies for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential Functions:</strong> To keep you logged in and enable core platform features.</li>
              <li><strong>Analytics & Performance:</strong> To track usage and improve service efficiency.</li>
              <li><strong>Marketing & Personalization:</strong> To tailor content and communications.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">3. Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You can manage cookies by adjusting browser settings or opting out of non-essential cookies in our cookie banner.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Cookies</h2>
            <p className="mb-6">
              Some features may use third-party cookies (e.g., analytics, support chat). These are governed by third-party policies.
            </p>
            
            <p className="mb-4">
              For questions, reach out to{" "}
              <a 
                href="mailto:dennis@mybento.net" 
                className="text-workplace-purple hover:underline"
              >
                dennis@mybento.net
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
