import Navbar from '@/components/Navbar';

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col md:my-10">
      <Navbar />
      <h1 className="my-8 mb-8 text-2xl font-bold text-slate-300 md:text-5xl">Privacy Policy</h1>
      <section className="space-y-6 text-neutral-400">
        <p>
          This Privacy Policy applies to the website operating under the URL: <strong>quelldata.com</strong>.
        </p>
        <p>
          The operator of the website and the Data Controller is:
          <br />
          <strong>Quelldata</strong>
          <br />
          Location: Warsaw, Poland
          <br />
          Email:{' '}
          <a href="mailto:quelldata@gmail.com" className="underline">
            quelldata@gmail.com
          </a>
        </p>
        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">1. Purpose of Data Collection</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>Newsletter distribution</li>
            <li>Displaying user advertisements</li>
            <li>Handling inquiries via the contact form</li>
            <li>Service fulfillment</li>
            <li>Debt collection</li>
            <li>Presentation of offers or information</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">2. Data Collection Methods</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>Voluntarily entered by users in forms, stored in the operator&apos;s system</li>
            <li>Cookies (small data files) saved on the user`&apos;s devices</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">3. Data Protection Methods</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>SSL encryption for login/data entry</li>
            <li>Encrypted database with access via private key</li>
            <li>Passwords stored as one-way hashes</li>
            <li>Two-factor authentication (2FA)</li>
            <li>Regular backups and software updates</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">4. Hosting Information</h2>
          <p>The website is hosted by a third-party provider. The server logs may include:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Requested URLs and timestamps</li>
            <li>Client info, errors, referrers</li>
            <li>Browser, IP, diagnostics</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">5. Data Sharing and Retention</h2>
          <p>Data may be shared with:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Hosting providers</li>
            <li>Legal/debt collection services</li>
            <li>Marketing firms (anonymized)</li>
          </ul>
          <p>Marketing data is not stored longer than 3 years.</p>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">6. Your Rights</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>Access, rectify, delete, or limit processing</li>
            <li>Data portability</li>
            <li>Object to profiling or automated processing</li>
            <li>File complaints with UODO (Poland)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">7. Analytics and Marketing</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>Google Analytics (anonymized)</li>
            <li>Remarketing (anonymous behavior)</li>
            <li>Heatmaps/session recording (no passwords/personal data)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">8. Cookies Policy</h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>Session vs persistent cookies</li>
            <li>Used for logins, stats, ads</li>
            <li>User control via browser settings</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">9. Automated Profiling</h2>
          <p>Some automated decisions may be made based on user interactions.</p>
        </div>

        <div className="space-y-2">
          <h2 className="mt-10 text-2xl font-semibold text-slate-300">10. Changes and Contact</h2>
          <p>
            We reserve the right to update this policy. For inquiries, contact:{' '}
            <a href="mailto:quelldata@gmail.com" className="underline">
              quelldata@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
