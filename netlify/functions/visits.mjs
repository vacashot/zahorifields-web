import { getStore } from '@netlify/blobs'

export default async (req) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  }

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers })
  }

  try {
    const store = getStore('counters')
    const action = new URL(req.url).searchParams.get('action') || 'hit'

    const stored = await store.get('visits')
    let count = stored ? parseInt(stored, 10) : 0

    if (action === 'hit') {
      count++
      await store.set('visits', String(count))
    }

    return new Response(JSON.stringify({ value: count }), { status: 200, headers })
  } catch (err) {
    return new Response(JSON.stringify({ value: null, error: err.message }), { status: 200, headers })
  }
}

export const config = { path: '/api/visits' }
