import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Krishna Bajpai</title>
        <meta name="description" content="Privacy policy for Krishna Bajpai's AI/ML consulting services. Learn about how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://krishnabajpai.me/privacy" />
      </Helmet>

      <Layout>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: October 27, 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Krishna Bajpai's professional portfolio and consulting services website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you voluntarily provide, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Company name and position</li>
                  <li>Project requirements and business information</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the collected information for various purposes:</p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about our services</li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Professional advisers and insurers</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: krishna@krishnabajpai.me
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;