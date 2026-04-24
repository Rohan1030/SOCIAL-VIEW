# Social View - AI Social Media Analyzer

Social View is a deep learning-powered application designed to analyze social media posts. It provides actionable insights, sentiment classification, engagement prognosis for various platforms, and AI-generated hashtag recommendations.

## 🌟 Features
- **AI Diagnostic Report**: Get a comprehensive analysis of any social media text using advanced language models.
- **Sentiment Classification**: Detect the primary sentiment (Positive, Negative, Neutral) and its intensity.
- **Engagement Prognosis**: Predict how well the post will perform across multiple platforms (Twitter, LinkedIn, Instagram, Facebook).
- **Hashtag Vectors**: Generate relevant and trending hashtags based on the post's content.
- **User Authentication**: Secure login and registration powered by Firebase.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express
- **AI/ML integration**: Google Gemini API, Groq SDK
- **Authentication**: Firebase

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rohan1030/SOCIAL-VIEW.git
   cd SOCIAL-VIEW
   ```

2. **Setup the Server:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add your API keys:
   ```env
   PORT=5000
   GEMINI_API_KEY=your_gemini_api_key_here
   GROQ_API_KEY=your_groq_api_key_here
   ```

3. **Setup the Client:**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory (or use `.env.local`) for your Firebase configuration if necessary. You might need to update the `firebase.js` configuration with your own project details.

### Running the Application

You need to run both the frontend and backend servers simultaneously.

**Run Backend (Server):**
```bash
cd server
npm start
```
The server will start on `http://localhost:5000`.

**Run Frontend (Client):**
```bash
cd client
npm run dev
```
The client will start on `http://localhost:5173`.

## 📜 License
This project is licensed under the ISC License.