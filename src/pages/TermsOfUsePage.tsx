import React from 'react';
import SEO from '../components/SEO';

const TermsOfUsePage = () => {
  return (
    <>
      <SEO 
        title="Terms of Use - Syntellite"
        description="Terms of Use for Syntellite Innovations Private Limited. Learn about the terms and conditions for using our services and website."
      />
      
      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Use</h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the Syntellite website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Services</h2>
              <p className="text-gray-300 mb-4">
                Syntellite Innovations Private Limited provides technology solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Web development and design</li>
                <li>Mobile application development</li>
                <li>Software development and consulting</li>
                <li>Cloud solutions and DevOps</li>
                <li>Digital marketing and SEO services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality on our website are owned by Syntellite Innovations Private Limited and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-300 mb-4">
                For custom development projects, intellectual property rights will be defined in the project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms for our services will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Payments are due as per the agreed schedule</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to the terms in the project agreement</li>
                <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                Syntellite Innovations Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">7. Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">8. Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                We respect the confidentiality of our clients' information and will not disclose confidential information to third parties without consent, except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">9. Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate services with appropriate notice as specified in the project agreement. Upon termination, all obligations and liabilities that accrued prior to termination will survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of the courts in Bangalore, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">11. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Syntellite Innovations Private Limited</strong>
                </p>
                <p className="text-gray-300 mb-2">
                  Email: <a href="mailto:hello@syntellite.com" className="text-blue-400 hover:text-blue-300">hello@syntellite.com</a>
                </p>
                <p className="text-gray-300">
                  Phone: <a href="tel:+919972200910" className="text-blue-400 hover:text-blue-300">+91 99722 00910</a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">12. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website and updating the "Last updated" date.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUsePage;
