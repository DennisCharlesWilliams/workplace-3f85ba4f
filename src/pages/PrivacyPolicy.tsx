
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Privacy Policy</h1>
          <p className="text-center text-gray-500 mb-8">Effective Date: January 1, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              At Workplace, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="mb-2">We collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, company details, and job title.</li>
              <li><strong>Usage Data:</strong> Logins, preferences, and activity within the platform.</li>
              <li><strong>Cookies & Tracking Technologies:</strong> To improve user experience and analytics.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use your data to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and improve our services.</li>
              <li>Process leave requests and benefit claims.</li>
              <li>Send important notifications and updates.</li>
              <li>Enhance security and prevent fraud.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">3. Data Protection & Security</h2>
            <p className="mb-4">
              We take data security seriously, employing encryption, secure storage, and access controls to protect your information.
            </p>
            
            <h2 className="text-xl font-semibold mb-3">4. Sharing Your Information</h2>
            <p className="mb-2">
              We do not sell or rent your data. Information may be shared with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Third-party service providers (for processing payments or analytics).</li>
              <li>Legal authorities (when required by law).</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-3">5. Your Rights & Choices</h2>
            <p className="mb-6">
              You can access, edit, or delete your data by contacting us. You can also manage cookie settings in your browser.
            </p>
            
            <p className="mb-4">
              For questions about this policy, contact us at{" "}
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

export default PrivacyPolicy;
