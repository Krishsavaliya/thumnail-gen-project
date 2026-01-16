# ThumbnailGen 🎨✨

ThumbnailGen is a full-stack AI-powered web application that allows users to generate high-quality, click-worthy thumbnails using Google Gemini image models. Users can customize styles, aspect ratios, color schemes, preview results in real time, download thumbnails, and manage their generated collections.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout)
- 🤖 AI Thumbnail Generation using **Google Gemini**
- 🖼️ Real-time thumbnail preview with polling
- 🎨 Customization options:
  - Title & additional prompts
  - Thumbnail styles (Bold, Photorealistic, Minimal, etc.)
  - Aspect ratios (16:9, 1:1, 9:16)
  - Color schemes
- ☁️ Cloudinary integration for image storage
- ⬇️ One-click thumbnail download
- 📁 Thumbnail collection management
- 📱 Fully responsive modern UI

---

## 🛠️ Tech Stack

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- Google Gemini API (`@google/genai`)
- Cloudinary
- Session-based Authentication

```

---


## 📂 Project Structure

thumnail-gen-project/
│
├── client-frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── configs/
│
├── server/ # Express backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middlewares/
│ └── configs/
│
└── README.md

---

```


## ⚙️ Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

GEMINI_API_KEY=your_google_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/Krishsavaliya/thumnail-gen-project.git
cd thumnail-gen-project

2️⃣ Install dependencies
Backend
cd server
npm install

Frontend
cd client-frontend
npm install

3️⃣ Run the application
Start backend
cd server
npm run dev

Start frontend
cd client-frontend
npm run dev

```
👨‍💻 Author

Krish Savaliya

got to learn a lot from this project , thank you [GreatStackDev](https://www.youtube.com/@GreatStackDev)

⭐ Show Your Support

If you found this project useful or inspiring, please consider giving it a ⭐ on GitHub!
