import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · Offshore Pirates",
  description:
    "Read the terms and conditions for using Offshore Pirates' BPO and outsourcing services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Welcome to Offshore Pirates. By accessing and using our website
              and services, you agree to the following terms.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                These Terms of Service govern all use of Offshore Pirates'
                website, products, and services. By using our site, you agree to
                these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                2. Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We provide global BPO, outsourcing, and offshoring solutions
                across industries including: finance, healthcare, IT,
                hospitality, construction, logistics, and more.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Provide accurate and lawful information.</li>
                <li>Use our services in compliance with regulations.</li>
                <li>
                  Respect intellectual property rights of Offshore Pirates.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                4. Payment & Billing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                All fees are outlined in client agreements. Payments must be
                made in USD (or agreed currency) within defined timelines.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Offshore Pirates is not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Third-party service interruptions.</li>
                <li>Data loss due to external cyberattacks.</li>
                <li>Indirect, incidental, or consequential damages.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                All website content, logos, and service descriptions belong to
                Offshore Pirates. Unauthorized use is prohibited.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                7. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                These Terms are governed by U.S. and International Business
                Laws.
              </p>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-white text-center">
                <p className="text-lg">
                  📩 For legal queries:{" "}
                  <a
                    href="mailto:legal@offshorepirates.com"
                    className="underline hover:no-underline"
                  >
                    legal@offshorepirates.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
