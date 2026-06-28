export default function DroneIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 38 C44 32 32 32 26 38 C20 44 20 56 26 62 C32 68 44 68 50 62 C56 68 68 68 74 62 C80 56 80 44 74 38 C68 32 56 32 50 38Z M50 44 C46 40 36 40 32 44 C28 48 28 52 32 56 C36 60 44 60 50 56 C56 60 64 60 68 56 C72 52 72 48 68 44 C64 40 54 40 50 44Z M50 48 C48 46 44 46 42 48 C40 50 40 50 42 52 C44 54 48 54 50 52 C52 54 56 54 58 52 C60 50 60 50 58 48 C56 46 52 46 50 48Z" />
      <rect x="46" y="20" width="8" height="12" rx="2" />
      <rect x="46" y="68" width="8" height="12" rx="2" />
      <rect x="20" y="46" width="12" height="8" rx="2" />
      <rect x="68" y="46" width="12" height="8" rx="2" />
    </svg>
  )
}
