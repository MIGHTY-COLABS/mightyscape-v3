import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MIGHTYSCAPE",
  description: "Privacy Policy for MIGHTYSCAPE's services and products.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pt-24">
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-8">Last updated: March 20, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              MIGHTYSCAPE PRIVATE LIMITED ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining our services</li>
              <li>Processing payments</li>
              <li>Communicating with you</li>
              <li>Improving our services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy, please contact us at:<br />
              Email: support@mightyscape.com<br />
              Address: Building No: XVIII/419, Ayathupady, Koovappady, Ernakulam, Kunnathunad, Kerala, India, 683544
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}