import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="max-w-xl mx-auto text-center py-24">
      <h1 className="text-4xl font-extrabold">You're in 🎉</h1>
      <p className="text-gray-600 mt-2">
        Thanks for subscribing. You'll receive an email with next steps shortly.
      </p>
      <Link href="/" className="inline-block mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow">
        Back to Home
      </Link>
    </div>
  );
}
