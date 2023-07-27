



// // pages/api/cloudinary.js
// import { v2 as cloudinary } from 'cloudinary';

// const cloudinaryConfig = cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { public_id, version, signature } = req.body;

//     // verify the data
//     const expectedSignature = cloudinary.utils.api_sign_request(
//       { public_id, version },
//       cloudinaryConfig.api_secret
//     );

//     if (expectedSignature === signature) {
//       // safe to write to database
//       console.log({ public_id });
//       res.status(200).json({ status: 'success' });
//     } else {
//       res.status(400).json({ error: 'Invalid signature' });
//     }
//   } else if (req.method === 'GET') {
//     const timestamp = Math.round(new Date().getTime() / 1000);

//     const signature = cloudinary.utils.api_sign_request(
//       { timestamp, folder: 'next' },
//       cloudinaryConfig.api_secret
//     );

//     res.status(200).json({ timestamp, signature });
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }





















