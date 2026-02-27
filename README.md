# KitaHack-sadd

📚 Belajarku

Belajarku is a Progressive Web App (PWA) designed for interactive learning. It combines a clean UI, offline support, quizzes, and AI-powered features via the Gemini API. The app is hosted on Netlify (No AI chatbot functionality):  
👉 https://saddbelajarku.netlify.app/



---

✨ Features & Functionalities

- Progressive Web App (PWA)  
  - Works offline using sw.js (service worker).  
  - Installable on desktop and mobile via manifest.json.

- Interactive Learning Modules  
  - Content served from data.js.  
  - Structured lessons and exercises.

- Quizzes for Learners  
  - Multiple-choice and interactive quizzes to reinforce knowledge.  
  - Immediate feedback to help track progress.  
  - Designed to simulate exam-style practice.

- Gemini AI Integration  
  - Provides AI-powered responses and assistance.  
  - Requires developer to insert their own Gemini API key.

- Responsive Design  
  - Built with HTML & CSS for smooth experience across devices.

---

🛠️ Developer Setup

Follow these steps to run Belajarku locally:

1. Clone the repository
   `bash
   git clone https://github.com/your-username/belajarku.git
   cd belajarku
   `

2. Start a local server  
   Service workers require HTTPS or localhost. Run a simple server:
   `bash
   python -m http.server 8080
   `
   Then open http://localhost:8080 in your browser.

3. Insert your Gemini API key  
   - Open index.html  
   - Go to line 835  
   - Replace the placeholder with your Gemini API key:
     `javascript
     const GEMINIAPIKEY = "your-api-key-here";
     `

4. Run the app  
   Refresh your browser. The app will now load with Gemini-powered features enabled.
