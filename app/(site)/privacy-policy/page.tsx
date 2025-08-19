import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · Offshore Pirates",
  description:
    "Learn how Offshore Pirates protects your privacy and handles your personal information with our comprehensive privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              At Offshore Pirates, protecting your privacy is our top priority.
              Learn how we collect, use, and safeguard your information.
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
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>
                  <strong>Personal Information</strong> – Name, email, phone
                  number, business details, billing information.
                </li>
                <li>
                  <strong>Non-Personal Data</strong> – Browser type, IP address,
                  location, and device information.
                </li>
                <li>
                  <strong>Service Data</strong> – Information necessary to
                  provide outsourcing and support services.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>
                  To provide and improve our BPO and outsourcing services.
                </li>
                <li>To respond to inquiries and client requests.</li>
                <li>
                  To send important updates, newsletters, and promotional offers
                  (only if you consent).
                </li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Data Protection & Security
              </h2>
              <div className="grid gap-4 mb-8">
                <div className="bg-cyan-50 dark:bg-cyan-950/50 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    🔒 Encryption protocols to secure sensitive data.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    👥 Access control for authorized personnel only.
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    🌍 Global compliance with GDPR, CCPA, HIPAA (for healthcare
                    services).
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Sharing of Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell personal data. We may share data only with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Service providers under strict confidentiality.</li>
                <li>Legal authorities when required by law.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Access, correct, or delete your personal data.</li>
                <li>Opt-out of marketing communications anytime.</li>
                <li>Request data portability in compliance with GDPR.</li>
              </ul>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-white text-center">
                <p className="text-lg">
                  📩 Contact:{" "}
                  <a
                    href="mailto:privacy@offshorepirates.com"
                    className="underline hover:no-underline"
                  >
                    privacy@offshorepirates.com
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
