import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Syntellite"
        description="Privacy Policy for Syntellite Innovations Private Limited. Learn how we collect, use, and protect your personal information."
      />

      <div className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Fill out contact forms on our website</li>
                <li>Request quotes or consultations</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you project updates and communications</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                3. Information Sharing
              </h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  Service providers who assist us in operating our website and
                  conducting business
                </li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                4. Data Security
              </h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                5. Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                Our website may use cookies to enhance user experience. You can
                choose to disable cookies through your browser settings, though
                this may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                6. Your Rights
              </h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                7. Contact Us
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Syntellite Innovations Private Limited</strong>
                </p>
                <p className="text-gray-300 mb-2">
                  Email:{" "}
                  <a
                    href="mailto:hello@syntellite.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    contact@syntellite.com
                  </a>
                </p>
                <p className="text-gray-300">
                  Phone:{" "}
                  <a
                    href="tel:+919972200910"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    +91 99722 00910
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
