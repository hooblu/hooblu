import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Hooblu Studios</h1>
          <div className="space-x-4">
            <Link href="/library" className="hover:text-primary">
              Library
            </Link>
            <Link href="/account" className="hover:text-primary">
              Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black via-secondary to-secondary flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to <span className="text-primary">Hooblu Studios</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stream exclusive anime series crafted by Hooblu Studios. Your ultimate anime destination.
          </p>
          <div className="space-x-4">
            <Link
              href="/library"
              className="inline-block bg-primary text-black px-8 py-3 rounded-lg font-bold hover:bg-accent"
            >
              Start Watching
            </Link>
            <Link
              href="/auth/sign-up"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-black"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
