import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inbox Assistant",
  description: "Spend less time on email—automatically organize and summarize your inbox.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900">
        <div className="max-w-6xl mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
