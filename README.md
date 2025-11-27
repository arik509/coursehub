# CourseHub

A modern course management platform built with Next.js 15 (App Router), NextAuth.js, and Express.js. CourseHub allows users to browse courses, manage their own course offerings, and authenticate via Google or credentials.

## 🚀 Features

- **Public Pages**: Landing page with hero, features sections, course catalog, and course details
- **Authentication**: Login/Register with Google OAuth and credentials using NextAuth.js
- **Protected Routes**: Add and manage courses (authenticated users only)
- **Responsive Design**: Mobile-first UI built with Tailwind CSS and daisyUI
- **Backend API**: Express.js server for CRUD operations on courses
- **Modern Stack**: Next.js App Router, server/client components, middleware protection

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **Tailwind CSS** + **daisyUI** for styling
- **React 19**

### Backend
- **Express.js** for REST API
- **CORS** for cross-origin requests
- In-memory data store (demo purposes)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google OAuth credentials (for social login)

### 1. Clone the repository

git clone https://github.com/yourusername/coursehub.git
cd coursehub


### 2. Install dependencies

#### Frontend (Next.js)
npm install


#### Backend (Express)

cd server
npm install


### 3. Environment Variables

Create a `.env.local` file in the **root** directory:

NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_strong_random_secret_here

Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


**To get Google OAuth credentials:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### 4. Run the application

#### Start the Express backend (Terminal 1)


cd server
node index.js

Server runs at `http://localhost:5000`

#### Start the Next.js frontend (Terminal 2)

npm run dev

App runs at `http://localhost:3000`

## 📁 Project Structure


coursehub/
├── app/
│ ├── (auth)/
│ │ ├── login/
│ │ │ └── page.jsx # Login page
│ │ └── register/
│ │ └── page.jsx # Register page
│ ├── api/
│ │ ├── auth/
│ │ │ └── [...nextauth]/
│ │ │ └── route.js # NextAuth config
│ │ └── register/
│ │ └── route.js # User registration API
│ ├── about/
│ │ └── page.jsx # About page
│ ├── add-course/
│ │ └── page.jsx # Add course (protected)
│ ├── contact/
│ │ └── page.jsx # Contact page
│ ├── courses/
│ │ ├── [id]/
│ │ │ └── page.jsx # Course details
│ │ └── page.jsx # Courses list
│ ├── manage-courses/
│ │ └── page.jsx # Manage courses (protected)
│ ├── layout.jsx # Root layout
│ ├── page.jsx # Landing page
│ └── globals.css # Global styles
├── components/
│ ├── BannerSection.jsx # Hero section
│ ├── FeaturesSection.jsx # Features section
│ ├── HeroSection.jsx # Alternative hero
│ ├── Navbar.jsx # Navigation bar
│ ├── Footer.jsx # Footer
│ └── Providers.jsx # SessionProvider wrapper
├── server/
│ └── index.js # Express API server
├── middleware.js # Route protection middleware
├── .env.local # Environment variables
├── package.json
└── README.md


## 🗺️ Routes Summary

### Public Routes
| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, and CTA sections |
| `/courses` | Browse all courses with search/filter UI |
| `/courses/[id]` | Individual course details page |
| `/about` | About page |
| `/contact` | Contact page |
| `/auth/login` | Login page (Google OAuth + credentials) |
| `/auth/register` | Registration page |

### Protected Routes (Login Required)
| Route | Description |
|-------|-------------|
| `/add-course` | Form to add a new course |
| `/manage-courses` | View and manage your courses (edit/delete) |

### API Routes
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js authentication endpoints |
| `/api/register` | POST | User registration (credentials) |

### Backend API (Express - Port 5000)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/courses` | GET | Fetch all courses |
| `/courses/:id` | GET | Fetch single course |
| `/courses` | POST | Add a new course |
| `/courses/:id` | DELETE | Delete a course |

## 🔐 Authentication

- **NextAuth.js** handles session management
- **Google OAuth** for social login
- **Credentials provider** for email/password (demo mode with in-memory storage)
- **Middleware** protects `/add-course` and `/manage-courses` routes
- Unauthenticated users are redirected to `/auth/login`

## 🎨 UI/UX

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: daisyUI for pre-styled components
- **Dark Mode Ready**: Supports theme switching (via daisyUI themes)
- **Animations**: Smooth transitions and hover states
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Update `NEXTAUTH_URL` to production domain
5. Update Google OAuth redirect URIs to include production callback

### Backend (Render / Railway)
1. Deploy Express app to [Render](https://render.com) or [Railway](https://railway.app)
2. Update frontend fetch URLs from `http://localhost:5000` to production API URL
3. Enable CORS for production domain

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**  
- GitHub: [@arik509](https://github.com/arik509)
- Email: sabirhossainarik34@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for simplified authentication
- daisyUI for beautiful Tailwind components


