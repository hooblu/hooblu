'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Series } from '@/lib/types';

export function SeriesCard({ series }: { series: Series }) {
  return (
    <Link href={`/series/${series.slug}`}>
      <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
        <div className="relative h-64 bg-gray-700">
          {series.poster_url ? (
            <Image
              src={series.poster_url}
              alt={series.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
        <div className="bg-black/80 p-4">
          <h3 className="font-bold text-lg truncate">{series.title}</h3>
          <p className="text-sm text-gray-400">{series.episode_count} Episodes</p>
          <div className="flex gap-1 mt-2 flex-wrap">
            {series.genres?.slice(0, 2).map((genre) => (
              <span key={genre} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
