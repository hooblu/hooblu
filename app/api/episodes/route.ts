import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const seriesId = searchParams.get('seriesId');

  try {
    let query = supabase.from('episodes').select('*');

    if (seriesId) {
      query = query.eq('series_id', seriesId);
    }

    const { data, error } = await query.order('season_number').order('episode_number');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
