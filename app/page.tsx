import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="mt-14 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Spend less time on email
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Inbox Assistant automatically organizes Gmail or Outlook and sends you a
          quick daily summary so you only see what matters.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/pricing" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow">
            Start Free Trial
          </Link>
          <a href="#how-it-works" className="px-6 py-3 rounded-xl border border-gray-300 font-medium">
            How it works
          </a>
        </div>
      </section>

      <section id="how-it-works" className="mt-24 grid md:grid-cols-3 gap-6">
        {[
          { title: "Smart Sorting", desc: "Newsletters, bills, promos and personal mail—auto-categorized." },
          { title: "Daily Summary", desc: "A morning digest of your important emails and action items." },
          { title: "Custom Rules", desc: "Create rules like auto-archive promos or flag invoices." },
        ].map((f) => (
          <div key={f.title} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 text-center bg-blue-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold">Simple pricing</h2>
        <p className="text-gray-600 mt-2">Start free for 7 days. Cancel anytime.</p>
        <p className="text-5xl font-extrabold mt-4">$5<span className="text-lg font-medium">/month</span></p>
        <Link href="/pricing" className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow">
          Subscribe Now
        </Link>
      </section>

      <Footer />
    </main>
  );
}
