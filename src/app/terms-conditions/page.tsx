import Navbar from "@/components/Navbar";

export default function TermsConditions() {
  return (
    <main className="mx-auto md:my-10 flex max-w-7xl flex-col">
      <Navbar />

      <div className="p-4">
        <h1 className="my-4 md:my-8  text-2xl md:text-5xl font-bold text-slate-300">
          Terms & Conditions
        </h1>
        <section className="space-y-6 text-neutral-400">
          <div className="space-y-2">
            <p>Effective Date: 10.05.2025</p>
            <p>
              Welcome to Quelldata, a decentralized data validation platform
              powered by blockchain and crowdsourced intelligence. These Terms
              and Conditions ("Terms") govern your access to and use of the
              Quelldata website, smart contracts, and any related services (the
              "Platform"). By accessing or using the Platform, you agree to
              these Terms and our Privacy Policy. If you do not agree, please do
              not use the Platform.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              1. Definitions
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Quelldata / We / Us / Our</strong> – the team or legal
                entity managing the Platform and smart contracts
              </li>
              <li>
                <strong>User / You</strong> – any individual or entity using the
                Platform
              </li>
              <li>
                <strong>Validator</strong> – a user who reviews data and earns
                rewards based on accuracy and reputation
              </li>
              <li>
                <strong>Smart Contract</strong> – self-executing code deployed
                on a blockchain, used for validation and rewards
              </li>
              <li>
                <strong>Digital Asset</strong> – any token or cryptocurrency
                used within the Platform
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              2. Platform Overview
            </h2>
            <p>
              Quelldata is a decentralized protocol for data validation and
              annotation. It is designed to reward users for contributing human
              judgment to machine learning processes in a transparent and
              reputation-based system.
            </p>
            <p>
              It is not an investment platform, employment service, or financial
              product. Participation is voluntary and reward-based.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              3. Eligibility
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Be at least 18 years old</li>
              <li>
                Not reside in a restricted jurisdiction or be on any sanctions
                list (including OFAC)
              </li>
              <li>Access the Platform using your own credentials and wallet</li>
              <li>Act in compliance with applicable laws</li>
            </ul>
            <p>
              We may restrict access in accordance with legal and operational
              requirements.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              4. Your Responsibilities
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Use the Platform in good faith and for its intended purpose
              </li>
              <li>Maintain control over your wallet and private keys</li>
              <li>Submit honest, high-quality validation work</li>
              <li>Follow posted guidelines and task instructions</li>
              <li>
                Avoid exploiting any bugs, vulnerabilities, or system weaknesses
              </li>
            </ul>
            <p>
              Your activity affects your reputation score, which impacts future
              rewards and access.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              5. Prohibited Conduct
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use of bots or scripts to automate work</li>
              <li>Submitting false or misleading annotations</li>
              <li>Attempting to manipulate or interfere with the protocol</li>
              <li>Uploading harmful, illegal, or infringing content</li>
              <li>
                Impersonating other users or misrepresenting your identity
              </li>
              <li>Circumventing moderation or reward mechanisms</li>
            </ul>
            <p>
              Violations may result in loss of rewards, suspension, or permanent
              ban.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              6. Intellectual Property
            </h2>
            <p>
              All intellectual property related to Quelldata—including branding,
              code, and UI—is owned by us or our partners.
            </p>
            <p>
              When you submit content, you grant us a non-exclusive, global,
              royalty-free license to use, adapt, and display it in connection
              with the Platform.
            </p>
            <p>
              You retain rights to your original contributions, subject to this
              license.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              7. Rewards and Token Use
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Reward distribution is handled via smart contracts and based on
                performance and task quality
              </li>
              <li>
                Poor or malicious contributions may lead to slashing of pending
                rewards
              </li>
              <li>
                Digital assets are not guaranteed to hold monetary value or
                convertibility
              </li>
              <li>
                Blockchain fees and third-party wallet risks are outside our
                control
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              8. Reputation System
            </h2>
            <p>
              Your reputation reflects your contribution history, accuracy, and
              behavior on the Platform. High reputation grants access to
              higher-value tasks and increased rewards.
            </p>
            <p>
              Attempts to game the system or coordinate dishonest behavior will
              negatively impact your score and access.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              9. Third-Party Services
            </h2>
            <p>
              We may integrate with services including blockchain networks,
              wallet providers, data storage (e.g. IPFS), and analytics. Use of
              such services is at your own risk and subject to their terms and
              privacy practices.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              10. Privacy and Transparency
            </h2>
            <p>
              Your data is handled according to our Privacy Policy. Quelldata
              minimizes personal data collection. However, you acknowledge that
              blockchain interactions are public, permanent, and pseudonymous.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              11. Disclaimers
            </h2>
            <p>
              The Platform is offered as-is with no warranty of availability,
              performance, or outcome. We do not promise any financial return or
              guaranteed access. Use of the Platform is entirely at your own
              risk.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              12. Limitation of Liability
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Any loss of rewards or digital assets</li>
              <li>Bugs or smart contract issues</li>
              <li>Decisions based on inaccurate task results</li>
              <li>Regulatory changes or disruptions</li>
            </ul>
            <p>Our liability is limited even in cases of negligence.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              13. Account Suspension or Termination
            </h2>
            <p>
              We may suspend or ban accounts for violating these Terms or
              undermining platform integrity. You can stop using the Platform at
              any time, but your public on-chain activity remains recorded.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              14. Jurisdiction and Dispute Resolution
            </h2>
            <p>
              These Terms are governed by the laws of Poland. Disputes will be
              handled via confidential arbitration unless otherwise required by
              law. Legal claims must be filed within one year of the issue
              arising.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              15. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms periodically. Changes take effect upon
              posting. Continued use of the Platform means you accept the
              updated version.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">
              16. Contact
            </h2>
            <p>
              If you have any questions, concerns, or feedback:
              <br />
              Quelldata Team
              <br />
              Email:{" "}
              <a href="mailto:quelldata@gmail.com" className="underline">
                quelldata@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href="https://quelldata.xyz" className="underline">
                quelldata.xyz
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
