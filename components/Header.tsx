'use client';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hooblu Studios
        </Link>
        <nav className="space-x-6">
          <Link href="/library" className="hover:text-primary transition-colors">
            Library
          </Link>
          <Link href="/bookmarks" className="hover:text-primary transition-colors">
            Bookmarks
          </Link>
        </nav>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
