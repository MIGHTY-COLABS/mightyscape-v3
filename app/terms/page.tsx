import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - MIGHTYSCAPE",
  description: "Terms of Service for MIGHTYSCAPE's products and services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-24">
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-8">Last updated: March 20, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using MIGHTYSCAPE's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Availability and Support</h2>
            <p>
              We strive to provide uninterrupted service but do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Certain services may require payment. All fees are non-refundable unless otherwise specified. We reserve the right to change our prices at any time with appropriate notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by MIGHTYSCAPE and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              MIGHTYSCAPE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us at:<br />
              Email: support@mightyscape.com<br />
              Address: Building No: XVIII/419, Ayathupady, Koovappady, Ernakulam, Kunnathunad, Kerala, India, 683544
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}