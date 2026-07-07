import { useState, useEffect } from 'react'

const GITHUB_OWNER = 'vacashot'
const GITHUB_REPO  = 'zahorifields-web'

export function useDownloadCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`)
      .then(r => r.json())
      .then(releases => {
        if (!Array.isArray(releases)) return
        const total = releases.reduce((sum, release) =>
          sum + (release.assets || []).reduce((s, a) => s + (a.download_count || 0), 0), 0)
        setCount(total)
      })
      .catch(() => {})
  }, [])

  return count
}

export function useVisitCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem('zf_visit_counted')
    const action = alreadyCounted ? 'get' : 'hit'

    fetch(`/api/visits?action=${action}`)
      .then(r => r.json())
      .then(d => {
        if (d?.value != null) {
          setCount(d.value)
          if (action === 'hit') sessionStorage.setItem('zf_visit_counted', '1')
        }
      })
      .catch(() => {})
  }, [])

  return count
}

export function formatCount(n) {
  if (n == null) return '—'
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}k`
  return String(n)
}
