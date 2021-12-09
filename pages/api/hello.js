// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Server env NODE.js

export default function handler(req, res) {
  // api services
  res.status(200).json({ name: 'John Doe' })
}
