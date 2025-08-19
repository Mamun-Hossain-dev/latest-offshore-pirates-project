import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy · Offshore Pirates",
  description:
    "Learn about how Offshore Pirates uses cookies to enhance your browsing experience and improve our services.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              At Offshore Pirates, we believe in full transparency. This Cookie
              Policy explains how we use cookies and similar technologies.
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
                What Are Cookies?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Cookies are small text files stored on your device (computer,
                smartphone, tablet) when you visit a website. They help us
                remember your preferences, improve site performance, and deliver
                personalized content.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why We Use Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>
                  <strong>Ensure website functionality</strong> – Essential
                  cookies keep our site secure and operational.
                </li>
                <li>
                  <strong>Enhance user experience</strong> – Remembering
                  preferences and saved sessions.
                </li>
                <li>
                  <strong>Analytics & Performance</strong> – Track how visitors
                  use our site to improve speed, design, and usability.
                </li>
                <li>
                  <strong>Marketing & Personalization</strong> – Show you
                  content and services tailored to your interests.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Types of Cookies We Use
              </h2>
              <div className="grid gap-6 mb-8">
                <div className="bg-cyan-50 dark:bg-cyan-950/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mandatory for site performance, login, and navigation.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Store language, region, and user preferences.
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Analytical Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Help us understand visitor behavior using tools like Google
                    Analytics.
                  </p>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-950/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Advertising Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Used to deliver relevant ads and measure campaign success.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Managing Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                You can control or delete cookies from your browser settings at
                any time. Please note, disabling essential cookies may limit
                site functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                We may update this Cookie Policy from time to time. The latest
                version will always be available on this page.
              </p>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-white text-center">
                <p className="text-lg">
                  📩 For questions, contact us at{" "}
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
