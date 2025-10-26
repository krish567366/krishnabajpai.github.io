import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Krishna Bajpai</title>
        <meta name="description" content="Terms of service for Krishna Bajpai's AI/ML consulting services. Understand our service agreements, intellectual property rights, and usage terms." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://krishnabajpai.me/terms" />
      </Helmet>

      <Layout>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: October 27, 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property Rights</h2>
                <p className="text-muted-foreground mb-4">
                  The Service and its original content, features, and functionality are owned by Krishna Bajpai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  Client deliverables and intellectual property rights are governed by individual service agreements and are not covered by these general terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Representations</h2>
                <p className="text-muted-foreground mb-4">
                  By using the Service, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>You have the legal capacity to accept these Terms</li>
                  <li>You will use the Service in accordance with these Terms</li>
                  <li>The information you provide is accurate and complete</li>
                  <li>You will maintain the security of your account information</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Professional Services</h2>
                <p className="text-muted-foreground mb-4">
                  Our consulting services are subject to separate service agreements. These Terms govern website usage and general service inquiries only.
                </p>
                <p className="text-muted-foreground mb-4">
                  Specific terms regarding:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Project scope and deliverables</li>
                  <li>Payment terms and conditions</li>
                  <li>Service level agreements</li>
                  <li>Confidentiality obligations</li>
                  <li>Intellectual property rights</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  are defined in individual service agreements.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall Krishna Bajpai be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to defend, indemnify, and hold harmless Krishna Bajpai from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of your use of the Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify or replace these Terms at any time. Material changes will be notified through the Service or via email.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms, please contact us at:
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

export default Terms;