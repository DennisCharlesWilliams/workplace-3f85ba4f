
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Terms of Service</h1>
          <p className="text-center text-gray-500 mb-8">Effective Date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Welcome to Workplace! These Terms of Service govern your use of our platform. By using Workplace, you agree to these terms.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">1. Use of the Service</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You must be at least 18 years old and authorized to use the service on behalf of your company.</li>
              <li>You agree to provide accurate and up-to-date information.</li>
              <li>You are responsible for maintaining the security of your account.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">2. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use Workplace for any illegal, fraudulent, or unauthorized activities.</li>
              <li>Interfere with the platform's functionality.</li>
              <li>Share login credentials with unauthorized users.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">3. Subscription & Payments</h2>
            <p className="mb-4">
              Workplace operates on a subscription basis with fees detailed in our pricing page.
            </p>
            <p className="mb-4">
              Payments are processed securely, and non-payment may result in service suspension.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">4. Data & Privacy</h2>
            <p className="mb-4">
              We respect your privacy. Our <Link to="/privacy-policy" className="text-workplace-purple hover:underline">Privacy Policy</Link> outlines how we handle your data.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">5. Termination</h2>
            <p className="mb-4">
              We may suspend or terminate your access if you violate these terms. You may also cancel your account at any time.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="mb-4">
              Workplace is provided "as is" without warranties. We are not liable for indirect damages, data loss, or business interruptions.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">7. Changes to These Terms</h2>
            <p className="mb-6">
              We may update these terms periodically. Continued use of the platform constitutes acceptance of changes.
            </p>
            
            <p className="mb-4">
              For inquiries, contact us at{" "}
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

export default TermsOfService;
