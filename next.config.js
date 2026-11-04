/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Note images live in /public/notes, so they are "local images":
    // no remotePatterns or domains are needed.
    formats: ["image/webp"],
    // Qualities the <Image> component is allowed to request.
    // 90 is used by the notes reader so handwriting stays crisp.
    qualities: [75, 90],
  },
};

module.exports = nextConfig;
