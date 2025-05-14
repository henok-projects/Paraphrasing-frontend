# 🎨 AI Text Tools Frontend (React)

A **React app** featuring two AI-powered tools that communicate with a [Rust Actix Web backend](https://github.com/your-username/ai-text-backend). The backend uses the **DeepInfra LLaMA 2 model** and is deployed on [Render](https://render.com).

## ✨ Features
### Text Paraphraser
- ✍️ Rewrite selected text segments in real-time
- 🔍 Multiple paraphrasing suggestions
- 🖱️ Intuitive text selection interface

### Poem Generator
- 🔤 Generate AI-powered poems from any topic
- ⚡ Lightning-fast responses
- 🎭 Preserves original formatting

**Shared Features**
- 🖥️ Production-ready with deployed backend
- 🌀 Smooth loading states
- 📱 Fully responsive design

---

## ⚙️ Technologies Used

- [React](https://reactjs.org/) (TypeScript)
- [React Router](https://reactrouter.com/) for navigation
- [Axios](https://axios-http.com/) for HTTP requests
- [CSS Modules](https://github.com/css-modules/css-modules) for styling
- [Vercel](https://vercel.com/) (or alternative) for deployment

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
  git clone https://github.com/henok-projects/Paraphrasing-frontend.git
  cd Paraphrasing-frontend
```

### 2. Install Dependencies
    npm install

### 3. Run the App
    npm start
### 4. Access the App
    Development: http://localhost:3000

### Production: 

## 🗺️ Project Structure
    src/
    ├── components/
    │   ├── Paraphrase.tsx         # Text Paraphraser
    │   └── Poam.tsx               # Poem Generator 
    ├── Routes.tsx                 # Application router
    ├── styles/
    │   ├── Paraphrase.css         # Paraphraser styles
    │   └── Poam.css               # Poem Generator styles 
    └── index.tsx                  # Entry point

### 🌐 Deployment
#### Vercel (Recommended)
    npm install -g vercel 
    vercel --prod

### Alternative Build
    npm run build
