# 📰 NewApp - Personalized News at Your Fingertips

---
  **NewApp** is a modern, user-friendly, and responsive web application that delivers news tailored to your interests and region. Instead of browsing multiple websites, users can access the latest news — filtered by keywords, category, country, and more  in one place. Each user uses their own **NewsAPI key** for a personalized and secure experience.

> ⚠️ This app is currently under development. New features and backend integrations are in progress.

---

## ✨ Features

- 🔐 **User Authentication**
  - Secure Signup and Login with Email and Password
  - Each user enters their own NewsAPI key

- 🌍 **News Filtering**
  - Search by **keywords**
  - Filter by **country** and/or **category** (country has priority if both selected)
  - Select **from date** and **to date**
  - Sort by **latest**, **popularity**, or **relevancy**
  - Select **language** (default is English)
  - One-click access to **breaking news worldwide**

- 🧭 **Navigation**
  - Filter section for quick search
  - "Breaking News" and "Get News" buttons

- 📱 **Responsive UI**
  - Dark theme interface
  - Mobile and desktop friendly
  - Instruction popups with blur background and smooth animations

---

## 🚀 How It Works

1. Run the local server using `server.js`.
2. Open the app in your browser (usually at [http://localhost:3000](http://localhost:3000)).
3. Use the login page to enter:
   - Email
   - Password
   - NewsAPI Key (see below to generate one)
4. You will be redirected to the Home Page, where you can:
   - View breaking news by clicking **Breaking News**  button
   - Filter news using category, country, date, language, etc.
   - Click **Get News** to fetch results.

---

## 🧪 How to Get a NewsAPI Key

To fetch live news, you'll need a free API key from [NewsAPI.org](https://newsapi.org/):

### 📝 Steps to Get Your Key:

1. Visit [https://newsapi.org/register](https://newsapi.org/register)
2. Fill the form:
   - Name
   - Email
   - Password
3. After signing up, log in to your dashboard.
4. Go to the **API Keys** section.
5. Copy the generated API key.
6. Paste it in the "API Key" field on the login page of this app.

> ⚠️ **Important**: On the NewsAPI Developer plan, browser requests are only allowed from `localhost`. This is why this app must run on your local machine during development.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js (for local server only)
- **Database**: MySQL (planned)
- **Authentication**: Local storage (planned expansion)
- **API**: [NewsAPI.org](https://newsapi.org/)

---

## 🖥️ Local Setup

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) installed

### 📦 Installation & Running

```bash
# Clone the repository
git clone https://github.com/yourusername/newsapp.git
cd newsapp

# Install dependencies
npm install

# Start the local server
node server.js

```

## ✅ Final Notes
- check out - [Live Demo](https://abhisheksinghchauhan192.github.io/NewsAppProject/)
### Note: ⚠️ It will not Show the News If you Have a Developer Plan of NewApi   Purchase key or run on your localMachine.

---
## 👨‍💻 Contributing

#### Contributions are welcome!

    - Fork the repo

    - Create a new branch

    - Submit a pull request with your changes or improvements
---
## 🔗 Links
- [Linkdin](https://www.linkedin.com/in/abhisheksinghchauhan786/)
- [Email](mailto:chauhanavi667@gmail.com)
