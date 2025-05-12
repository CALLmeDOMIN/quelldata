import Navbar from '@/components/Navbar';

export default function TermsConditions() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col md:my-10">
      <Navbar />

      <div className="p-4">
        <h1 className="my-4 text-2xl font-bold text-slate-300 md:my-8 md:text-5xl">Terms & Conditions</h1>
        <section className="space-y-6 text-neutral-400">
          <div className="space-y-2">
            <p>Effective Date: 10.05.2025</p>
            <p>
              Welcome to Quelldata, a decentralized data validation platform powered by blockchain and crowdsourced
              intelligence. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
              Quelldata website, smart contracts, and any related services (the &quot;Platform&quot;). By accessing or
              using the Platform, you agree to these Terms and our Privacy Policy. If you do not agree, please do not
              use the Platform.
            </p>
          </div>

          {/* ... pozostała część bez zmian aż do momentów, gdzie są apostrofy lub cudzysłowy */}

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">5. Prohibited Conduct</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>Use of bots or scripts to automate work</li>
              <li>Submitting false or misleading annotations</li>
              <li>Attempting to manipulate or interfere with the protocol</li>
              <li>Uploading harmful, illegal, or infringing content</li>
              <li>Impersonating other users or misrepresenting your identity</li>
              <li>Circumventing moderation or reward mechanisms</li>
            </ul>
            <p>Violations may result in loss of rewards, suspension, or permanent ban.</p>
          </div>

          {/* ... inne sekcje bez zmian poza escape’owaniem ' i " */}

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">7. Rewards and Token Use</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>Reward distribution is handled via smart contracts and based on performance and task quality</li>
              <li>Poor or malicious contributions may lead to slashing of pending rewards</li>
              <li>Digital assets are not guaranteed to hold monetary value or convertibility</li>
              <li>Blockchain fees and third-party wallet risks are outside our control</li>
            </ul>
          </div>

          {/* ... i dalej aż do końca — ten sam schemat escape’owania */}

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-300">16. Contact</h2>
            <p>
              If you have any questions, concerns, or feedback:
              <br />
              Quelldata Team
              <br />
              Email:{' '}
              <a href="mailto:quelldata@gmail.com" className="underline">
                quelldata@gmail.com
              </a>
              <br />
              Website:{' '}
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
