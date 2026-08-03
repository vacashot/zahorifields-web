// Generates responsive AVIF/WebP/JPEG variants of the gallery source photos.
// Source images stay untouched in public/galeria/*.jpg; outputs go to
// public/galeria/optimized/{thumb,full}/. Re-run after adding/replacing photos:
//   node scripts/optimize-gallery-images.mjs
import { readdirSync, mkdirSync, statSync } from 'node:fs'
import { join, basename, extname } from 'node:path'
import sharp from 'sharp'

const SRC_DIR = join(process.cwd(), 'public/galeria')
const OUT_DIR = join(SRC_DIR, 'optimized')

const THUMB_WIDTHS = [400, 800, 1200]
const FULL_WIDTHS = [960, 1600, 2400]

const FORMATS = {
  avif: { quality: 55 },
  webp: { quality: 75 },
  jpg: { quality: 78, mozjpeg: true },
}

function targetWidths(widths, originalWidth) {
  const fitting = widths.filter((w) => w <= originalWidth)
  return fitting.length ? fitting : [originalWidth]
}

async function generateVariant(inputPath, outDir, base, width, format, opts) {
  const outPath = join(outDir, `${base}-${width}.${format}`)
  const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true })
  if (format === 'avif') pipeline.avif(opts)
  else if (format === 'webp') pipeline.webp(opts)
  else pipeline.jpeg(opts)
  await pipeline.toFile(outPath)
  return outPath
}

async function run() {
  mkdirSync(join(OUT_DIR, 'thumb'), { recursive: true })
  mkdirSync(join(OUT_DIR, 'full'), { recursive: true })

  const files = readdirSync(SRC_DIR).filter((f) => extname(f).toLowerCase() === '.jpg')

  let totalOriginal = 0
  let totalGenerated = 0

  for (const file of files) {
    const inputPath = join(SRC_DIR, file)
    const base = basename(file, extname(file))
    const originalSize = statSync(inputPath).size
    totalOriginal += originalSize

    const meta = await sharp(inputPath).metadata()

    const jobs = [
      { widths: targetWidths(THUMB_WIDTHS, meta.width), outDir: join(OUT_DIR, 'thumb') },
      { widths: targetWidths(FULL_WIDTHS, meta.width), outDir: join(OUT_DIR, 'full') },
    ]

    let generatedForFile = 0
    for (const { widths, outDir } of jobs) {
      for (const width of widths) {
        for (const [format, opts] of Object.entries(FORMATS)) {
          const outPath = await generateVariant(inputPath, outDir, base, width, format, opts)
          generatedForFile += statSync(outPath).size
        }
      }
    }
    totalGenerated += generatedForFile

    console.log(
      `${file}  ${(originalSize / 1024).toFixed(0)}KB original -> ${(generatedForFile / 1024).toFixed(0)}KB across all generated variants`
    )
  }

  console.log(
    `\nDone. ${files.length} source images -> variants total ${(totalGenerated / 1024 / 1024).toFixed(1)}MB (originals: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB, kept untouched as source assets).`
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
