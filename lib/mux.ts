import axios from 'axios';

const MUX_API_URL = 'https://api.mux.com/video/v1';
const MUX_TOKEN_ID = process.env.NEXT_PUBLIC_MUX_TOKEN_ID;
const MUX_TOKEN_SECRET = process.env.MUX_TOKEN_SECRET;

if (!MUX_TOKEN_ID || !MUX_TOKEN_SECRET) {
  throw new Error('Missing Mux environment variables');
}

const basicAuth = Buffer.from(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`).toString('base64');

export const muxClient = axios.create({
  baseURL: MUX_API_URL,
  headers: {
    Authorization: `Basic ${basicAuth}`,
    'Content-Type': 'application/json',
  },
});

/**
 * Create a new video asset in Mux
 * @param url - Direct URL to video file (must be publicly accessible)
 * @param title - Video title
 */
export async function createMuxAsset(url: string, title: string) {
  try {
    const response = await muxClient.post('/assets', {
      input: url,
      playback_policy: 'public',
      mp4_support: 'standard',
      metadata: {
        video_title: title,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating Mux asset:', error);
    throw error;
  }
}

/**
 * Get video playback info from Mux
 */
export async function getMuxPlaybackInfo(assetId: string) {
  try {
    const response = await muxClient.get(`/assets/${assetId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Mux asset:', error);
    throw error;
  }
}
