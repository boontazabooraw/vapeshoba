# Vape Shops in Bataan API

This is a small Express.js + Supabase API I built for practice and fun.  
It lists vape shops in Bataan and supports simple query filtering (like by municipality).  
Deployed on Render (free tier), so expect occasional cold starts.

---

## Features
- Express.js backend
- Supabase integration
- CORS enabled (works with React/Vite frontend)
- Deployed on Render free tier

---

## Setup

Clone the repo and install dependencies:

```
git clone https://github.com/yourusername/vape-shops-api.git
cd vape-shops-api
npm install
```

Create a `.env` file for local development:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=port_of_your_choice
```

On Render, set these variables in the **Dashboard → Environment** section.

---

## ▶️ Running Locally

```
npm run dev
```

Visit:

```
http://localhost:[port_of_your_choice]
Note that it is 3000 by default.
```

---

## 🌐 Deployment

Live API:  
https://veepsh.onrender.com/

---

## Example Usage

### Fetch all shops
```
GET https://veepsh.onrender.com
```

The root endpoint supports several query parameters for filtering and sorting results:

- **municipality**  
  Filter shops by municipality name.  
  Example:  
  ```
  GET https://veepsh.onrender.com?municipality=balanga_city  
  ```

- **minRating**  
  Return only shops with a rating greater than or equal to the given value.  
  Example:  
  ```
  GET https://veepsh.onrender.com?minRating=4  
  ```

- **sortby**  
  Field to sort results by (e.g., `name`, `rating`).  
  Example:  
  ```
  GET https://veepsh.onrender.com?sortby=rating  
  ```

- **order**  
  Sort direction: `asc` or `desc`.  
  Example:  
  ```
  GET https://veepsh.onrender.com?sortby=rating&order=desc  
  ```

- **page**  
  Specify which page of results to return (for pagination).  
  Example:  
  ```
  GET https://veepsh.onrender.com?page=2  
  ```

- **limit**  
  Limit the number of results per page.  
  Example:  
  ```
  GET https://veepsh.onrender.com?limit=10  
  ```


---

## ⚠️ Notes
- Free Render tier may sleep after inactivity (cold start delay).
- You can use cron-jobs.org to ping the API and keep it awake.
- This project is for practice only. It doesn’t collect personal data, so no privacy policy is needed.

---

## Tech Stack
- Node.js
- Express.js
- Supabase
- Render
- Vite + React (frontend testing)

---

## 📋 Disclaimer
This project was built for practice and fun.
The shop data was gathered by scouring the internet, mainly Google Maps and Waze.
Because of that, the listings may not include every vape shop in Bataan and might not always be up to date.
Treat this as a demo dataset rather than an official directory.