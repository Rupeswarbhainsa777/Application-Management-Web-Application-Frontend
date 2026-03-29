# 💼 Job Application Management — Frontend

A modern **React.js** web application for tracking and managing job applications. View your entire application pipeline at a glance — add new jobs, monitor statuses, update details, and get an analytical overview through the dashboard.

> **Note:** This is the **frontend-only** repository. The backend REST API runs separately on `http://localhost:8089`.

---

## 🚀 Features

| Feature | Description |
|---|---|
| ➕ Add Job Applications | Submit new job records with company name, job type, company type, status, and date |
| 📋 View All Applications | Browse all stored applications in a responsive card grid layout |
| 🔍 Search & Filter | Real-time search across company name, job type, company type, and status |
| ✏️ Edit Applications | Update job details via an inline modal form |
| 🗑️ Delete Applications | Remove job records with a confirmation prompt |
| 📊 Dashboard Analytics | Overview stats: Total Applications, Interviews, Offers, Closed/Rejected |
| 🌙 Dark Mode | Global dark/light mode toggle synced across all pages via React Context |
| 🤖 AI Support | Dedicated AI assistance page for application help |
| 🔐 Login & Registration | Authentication pages (UI ready, integration-ready) |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.1.0 | UI library |
| **React Router DOM** | ^7.6.3 | Client-side routing |
| **Bootstrap** | ^5.3.7 | Responsive layout & components |
| **React Bootstrap** | ^2.10.10 | Bootstrap React wrappers |
| **Axios** | ^1.11.0 | HTTP requests to backend API |
| **Vite** | ^7.0.4 | Build tool & dev server |
| **Sass** | ^1.89.2 | CSS preprocessing |

### Backend (External — not in this repo)
- **Java Spring Boot** REST API running at `http://localhost:8089`
- Endpoints used: `/job/add`, `/job/allJobs`, `/job/update/:id`, `/job/delete/:id`

---

## 📂 Project Structure

```
job_appliction_mangement_web_fronend/
├── public/                         # Static assets
├── src/
│   ├── Pages/
│   │   ├── Home/                   # Landing / home page
│   │   ├── About/                  # About page
│   │   ├── Addjobs/                # Add a new job application
│   │   ├── Alljobs/                # View, search, edit & delete all jobs
│   │   ├── AllDetails/             # Detailed job view
│   │   ├── Dashboard/              # Analytics dashboard (stats + table)
│   │   ├── Ai Support/             # AI-powered assistance page
│   │   ├── Login/                  # Login page
│   │   └── Reg/                    # Registration page
│   ├── componenet/
│   │   └── Menuebar/               # Navigation bar (Menuebar.jsx + Menubar.css)
│   ├── context/
│   │   ├── AppContext.jsx           # React Context definition
│   │   └── AppProvider.jsx          # Context provider (dark mode state)
│   ├── service/
│   │   └── Addjob.js               # Axios service for adding jobs
│   ├── App.jsx                     # Root component with Router & routes
│   ├── App.css                     # Global app styles
│   ├── index.css                   # Base CSS reset & variables
│   └── main.jsx                    # React DOM entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── package.json
└── README.md
```

---

## 🗺️ Application Routes

| Route | Page | Description |
|---|---|---|
| `/` or `/home` | Home | Landing page |
| `/about` | About | About the application |
| `/add-job` | Add Jobs | Form to submit a new job application |
| `/all-jobs` | All Jobs | List all applications with search & CRUD |
| `/dashboard` | Dashboard | Analytics overview with stats & table |
| `/aisupport` | AI Support | AI-powered job application assistant |
| `/login` | Login | User login form |
| `/reg` | Registration | New user registration form |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js `v18+`
- npm `v9+`
- Backend API running at `http://localhost:8089` (Java Spring Boot)

### 1. Clone the repository
```bash
git clone https://github.com/Rupeswarbhainsa777/Application-Management-Web-Application-Frontend.git
cd Application-Management-Web-Application-Frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The app will be available at: **`http://localhost:5173`**

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Vite dev server with hot-reload |
| Build | `npm run build` | Create optimized production bundle |
| Preview | `npm run preview` | Preview the production build locally |
| Lint | `npm run lint` | Run ESLint across the project |

---

## 🔗 Backend API Endpoints

The frontend communicates with a Java Spring Boot backend running on port `8089`:

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/job/add` | Add a new job application |
| `GET` | `/job/allJobs` | Fetch all job applications |
| `PUT` | `/job/update/:id` | Update an existing job application |
| `DELETE` | `/job/delete/:id` | Delete a job application by ID |

---

## 🌙 Dark Mode

Dark mode is managed globally using **React Context API** (`AppContext` + `AppProvider`).  
Toggling it applies a `dark-mode` class to `document.body`, which CSS variables pick up across all components.

---

## 📊 Dashboard Stats Explained

The Dashboard page calculates stats dynamically from fetched job data:

- **Total Applications** — Count of all submitted jobs
- **Interviews** — Jobs whose status contains `"interview"`
- **Offers** — Jobs whose status contains `"offer"`
- **Closed / Rejected** — Jobs whose status contains `"closed"` or `"rejected"`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using <strong>React + Vite + Bootstrap</strong>
</p>
