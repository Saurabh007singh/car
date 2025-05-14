import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">Your form has been successfully submitted.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}