# 🔗 URL Shortener

A simple and minimal URL shortener built with **Node.js**, **Express**, **MongoDB**, and **EJS**.

## 🚀 Features

- 🔧 Generate short URLs from long links
- 📊 Track how many times each shortened URL was clicked
- 🖼️ EJS-based frontend to display URLs
- 🔗 Dynamic redirection via short path

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Templating**: EJS
- **Others**: dotenv, shortid

---

## 🛠️ Setup & Installation

### 1. Install dependencies

```
npm install
```

---

### 2. Create a `.env` file

Create a `.env` file in the root directory and add the following:

```
PORT=3000
DATABASE_URL="your-mongodb-connection-string"
```

> 🔒 Replace `"your-mongodb-connection-string"` with your actual MongoDB connection URI.

---

### 3. Run the server

```
npm run devStart
```

---

### 4. Open your browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure

```
.
├── server.js                 # Main server entry point
├── package.json             # Project metadata and scripts
├── .env                     # Environment variables (not committed)
├── /models
│   └── shortUrls.js         # Mongoose schema for short URLs
├── /views
│   └── index.ejs            # Frontend template for home
├── /public                  # Static assets (CSS, JS, etc.)
```

---

## 🧠 Notes

- The app uses `shortid` to generate unique short URLs.
- URL clicks are tracked and stored in MongoDB.
- Uncomment `ShortUrl.deleteMany()` inside `server.js` if you want to clear existing data on startup (for development only).

---

## 📝 License

This project is licensed under the ISC License.
