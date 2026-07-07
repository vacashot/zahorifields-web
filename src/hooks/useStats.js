import { useState, useEffect } from 'react'

const GITHUB_OWNER = 'vacashot'
const GITHUB_REPO  = 'zahorifields-web'
const COUNTER_NS   = 'zahorifields'
const COUNTER_KEY  = 'web-visits'

export function useDownloadCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('zf_downloads')
    if (cached) { setCount(Number(cached)); return }

    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`)
      .then(r => r.json())
      .then(releases => {
        if (!Array.isArray(releases)) return
        const total = releases.reduce((sum, release) =>
          sum + (release.assets || []).reduce((s, a) => s + (a.download_count || 0), 0), 0)
        setCount(total)
        sessionStorage.setItem('zf_downloads', total)
      })
      .catch(() => {})
  }, [])

  return count
}

export function useVisitCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem('zf_visit_counted')

    if (alreadyCounted) {
      // Only fetch, don't increment again this session
      fetch(`https://api.counterapi.dev/v1/${COUNTER_NS}/${COUNTER_KEY}/get`)
        .then(r => r.json())
        .then(d => { if (d?.count != null) setCount(d.count) })
        .catch(() => {})
    } else {
      // Increment once per session
      fetch(`https://api.counterapi.dev/v1/${COUNTER_NS}/${COUNTER_KEY}/up`)
        .then(r => r.json())
        .then(d => {
          if (d?.count != null) {
            setCount(d.count)
            sessionStorage.setItem('zf_visit_counted', '1')
          }
        })
        .catch(() => {})
    }
  }, [])

  return count
}

export function formatCount(n) {
  if (n == null) return '—'
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}k`
  return String(n)
}
