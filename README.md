# 🎬 VKMFlix - Movie Streaming Website

VKMFlix is a modern and fully responsive movie streaming platform built using **React.js, Vite, Tailwind CSS, Redux Toolkit, and TMDB API**. This website allows users to browse trending movies, top-rated movies, popular TV series, and more. It also provides a trailer preview and theme switching functionality.

---

## 🚀 Features
- **Home Page with Hero Section**: Displays the most popular movies with autoplay slides.
- **Movie Cards**: Beautiful cards for movies and TV series with hover effects.
- **Video Modal**: Watch trailers of movies and series.
- **Theme Switcher**: Switch between Light, Dark, and System themes.
- **Sidebar Menu**: Navigation menu for Movies, TV Series, and Home.
- **Search Functionality**: Allows searching for movies and TV series.
- **Responsive Design**: Fully responsive across all devices.
- **Lazy Loading**: Images load only when in the viewport.
- **Error Handling**: Displays error message if API fails.

---

## 📁 Folder Structure
```
me-safwan-07-vkmflix/
│
├── public/                # Public assets
├── src/                   # Source Code
│   ├── assets/            # Static assets like SVGs
│   ├── components/        # Reusable components
│   │   ├── Header/        # Header with navigation
│   │   ├── SideBar/       # Sidebar for navigation and theme change
│   │   ├── Section/       # Sections to display movies and series
│   │   ├── VideoModal/    # Modal to display trailers
│   ├── context/           # React Context API for global and theme context
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Pages like Home
│   ├── services/          # API call services using Redux Toolkit
│   ├── style/             # Tailwind classes and styles
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App Component
│   ├── main.jsx           # Entry point of the application
├── .env                   # Environment variables for API keys
├── package.json           # Project dependencies
├── vite.config.js         # Vite Configuration
```

---

## 🛠 Built With
- **React.js** - Frontend JavaScript Library
- **Vite** - Fast build tool for React
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **TMDB API** - Movie database API
- **Framer Motion** - Animation and modal transitions
- **React Icons** - Icons used in the website
- **React Lazy Load** - Lazy loading images

---

## 📜 Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```
VITE_TMDB_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_KEY=YOUR_TMDB_API_KEY
```

You can obtain your TMDB API Key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api).

---

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/me-safwan-07-vkmflix.git
cd me-safwan-07-vkmflix
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the application**:
```bash
npm run dev
```

4. **Build the application** (for deployment):
```bash
npm run build
```

5. **Preview the build**:
```bash
npm run preview
```

---

## 🎥 API Used
This project uses the **TMDB (The Movie Database) API** to fetch:
- Trending Movies
- Top Rated Movies
- TV Series
- Movie Trailers

Refer to the official TMDB documentation for more information:  
🔗 [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

---

## 🎨 Theme Mode
The website supports **three theme modes**:
1. 🌞 **Light Mode**
2. 🌙 **Dark Mode**
3. 💻 **System Mode** (Automatically detects system theme)

You can change the theme from the sidebar or the header.

---

## ✅ Features Overview
### Home Page
- Displays trending and popular movies in a beautiful carousel.
- Sections for **Top Rated Movies**, **Popular Series**, etc.
- "Watch Trailer" button to preview the movie's official trailer.

### Movie Card
- Hover effect to highlight the movie.
- Click to navigate to the movie details page.
- Trailer modal for instant preview.

### Sidebar Menu
- Toggleable sidebar for navigation.
- Option to switch themes.

### Search Functionality (Coming Soon 🚧)
- Future feature to search for movies and TV series.

---

## 💻 Deployment
You can easily deploy this project to platforms like **Vercel, Netlify, or Coolify**.  
Here’s a Vercel deployment command:
```bash
npm run build
vercel deploy
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🧑‍💻 Author
Developed by:  
- **Vignish**  
- **Kirthan**  
- **Manish**   

---

## 💌 Support
If you have any queries or face any issues, feel free to contact us.  

📩 **Email:** support@vkmflix.com  
🌐 **Website:** [www.vkmflix.com](http://www.vkmflix.com)
