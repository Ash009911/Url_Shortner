# 🚀 Affordmed URL Shortener

A full-stack URL shortening app built with the MERN stack (without DB, using in-memory store).  
Includes analytics, expiry system, and logging.

---

## 📁 Project Structure

- `backend/` – Express.js server with ES Modules  
- `frontend/` – React (Vite) + Tailwind CSS UI  
- `logging/` – Winston logger for API logs

---

Both backend and frontend will be run by the command "npm run dev" 

##Backend

Dependencies:
express
cors
dotenv
nanoid
winston

##Frontend

Dependencies:
react (via Vite)
axios
tailwindcss

##Api End Point

Method	Endpoint	          Purpose
POST	  /shorturls	        Create short URL
GET	    /shorturls/:code	  Get stats
GET    	/:code	            Redirect to long URL
