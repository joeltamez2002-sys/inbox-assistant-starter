'use client';

import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create checkout session");
      window.location.href = data.url;
    } catch (e:any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <h1 className="text-4xl font-extrabold">Choose your plan</h1>
      <p className="text-gray-600 mt-2">Test mode ready with Stripe.</p>
      <div className="mt-8 p-8 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Inbox Assistant</h2>
        <p className="text-gray-600 mt-1">7-day free trial, then $5/month.</p>
        <p className="text-4xl font-extrabold mt-4">$5<span className="text-lg font-medium">/mo</span></p>
        <button
          onClick={checkout}
          disabled={loading}
          className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow disabled:opacity-60"
        >
          {loading ? "Redirecting..." : "Start Free Trial"}
        </button>
        {error && <p className="text-red-600 mt-3">{error}</p>}
      </div>
    </div>
  );
}
