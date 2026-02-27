# KitaHack-sadd

📚 Belajarku

BelajarKu is a Progressive Web App (PWA) designed to provide interactive digital education for rural primary school students in Malaysia who lack reliable internet and updated resources. The project addresses the problem of educational inequality caused by intermittent connectivity and limited access to qualified tutoring. Its purpose is to deliver structured learning materials, quizzes, and an AI tutor named "Cikgu Leo" that remains functional even in low-bandwidth or offline situations.

The app is hosted on Netlify (No AI chatbot functionality yet. To use the AI Chatbot, please follow developer setup below⬇️):  

👉 https://saddbelajarku.netlify.app/

Project description PDF:

👉 https://drive.google.com/file/d/1W_wQAPvkfmVcT5n-nun8HAhU1jRS8qoI/view?usp=drive_link

---

🤔 Problem Statement:
Rural students lack reliable internet, access to qualified teachers, and updated learning resources. Educators lack tools and digital training.

🧒 Main users: 
Primary school students

📚 Purpose:
To provide digital education for students in rural areas by providing a PWA that provides learning materials, quizzes and an interactive AI tutor that functions even in low-bandwidth situations.

⚙️ Alignment with AI:
The app uses the Gemini 2.5 Flash API for real-time tutoring. To ensure resilience, it features a Local Chat Fallback using keyword matching in data.js to provide offline AI-powered assistance when a cloud connection is unavailable.

😃 Alignment with SDG: 
SDG 4 (Quality Education): BelajarKu supports Target 4.1 and 4.a by providing free, equitable access to lessons parsed into "scrollable cards," making high-quality content digestible and data-efficient for students.

SDG 10 (Reduced Inequalities): By utilizing a lightweight Vanilla JS/CSS frontend and an offline-first architecture with Firestore LocalCache, the solution ensures that a student’s geography or lack of high-end hardware does not dictate their intellectual potential.

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
   - Go to line 837 
   - Replace the placeholder with your Gemini API key:
     `javascript
     const GEMINIAPIKEY = "your-api-key-here";
     `

4. Run the app  
   Refresh your browser. The app will now load with Gemini-powered features enabled.
