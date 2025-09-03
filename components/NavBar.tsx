import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">Inbox Assistant</Link>
      <div className="space-x-4">
        <Link href="/pricing" className="text-sm font-medium hover:underline">Pricing</Link>
        <a href="mailto:hello@example.com" className="text-sm font-medium hover:underline">Contact</a>
      </div>
    </nav>
  );
}
