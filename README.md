# Style Baazar — E-Commerce Fashion Store

<div align="center">

![Style Baazar](https://img.shields.io/badge/Style-Baazar-red?style=for-the-badge&logoColor=white)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-Vite-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Wear What Speaks — Curated fashion collections for every story you want to tell.**

[Live Demo](#) &nbsp;·&nbsp; [GitHub Profile](https://github.com/Sujit843) &nbsp;·&nbsp; [Report Bug](https://github.com/Sujit843/Style-Baazar/issues)

</div>

---

## Screenshots

| Login Page | Home Hero |
|-----------|-----------|
| ![Login](https://github.com/Sujit843/Style-Baazar/blob/main/screenshots/login.png?raw=true) | ![Home](https://github.com/Sujit843/Style-Baazar/blob/main/screenshots/home.png?raw=true) |

| Collections Page | Cart Page |
|-----------------|-----------|
| ![Collections](https://github.com/Sujit843/Style-Baazar/blob/main/screenshots/collections.png?raw=true) | ![Cart](https://github.com/Sujit843/Style-Baazar/blob/main/screenshots/cart.png?raw=true) |

---

## Features

- **Authentication** — Sign In / Register with Email-Password and Google OAuth
- **Hero Section** — Dynamic banner with rotating offers (30% OFF, New Collection) and Shop Now CTA
- **Latest Collection** — Trending new arrivals curated for the season
- **Best Sellers** — Top picks with pricing displayed in INR (₹)
- **All Collections** — 16+ products with sidebar filters by Category (Men, Women, Kids) and Sub-Category (Topwear, Bottomwear, Winterwear)
- **Quick View** — Instant product preview on hover
- **Wishlist** — Save favourite products with heart icon and badge count
- **Cart** — Add items with size selection, quantity control (+/-), and order summary with shipping fee
- **Subscribe Section** — Get 20% OFF on first order via email subscription
- **AI Chatbot** — Built-in assistant floating on every page
- **Responsive Design** — Fully mobile-friendly UI

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, Google OAuth |
| Styling | CSS3 |
| State Management | Context API |
| HTTP Client | Axios |

---

## Project Structure

```
Style-Baazar/
├── client/                   # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/       # Navbar, ProductCard, Cart, Chatbot etc.
│   │   ├── pages/            # Home, Collection, About, Contact, Login
│   │   ├── context/          # Auth & Cart Context
│   │   └── App.jsx
│   └── package.json
│
├── server/                   # Express Backend
│   ├── controllers/
│   ├── models/               # User, Product, Order schemas
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Sujit843/Style-Baazar.git
cd Style-Baazar
```

**2. Install backend dependencies**
```bash
cd server
npm install
```

**3. Install frontend dependencies**
```bash
cd ../client
npm install
```

**4. Create `.env` file in `server/` directory**
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
PORT=5000
```

**5. Run the application**
```bash
# Terminal 1 — Start backend
cd server
npm run dev

# Terminal 2 — Start frontend
cd client
npm run dev
```

**6. Open browser at** `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/google` | Google OAuth login |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/cart` | Add item to cart |
| GET | `/api/cart` | Get user cart |
| PUT | `/api/cart/:id` | Update cart item quantity |
| DELETE | `/api/cart/:id` | Remove item from cart |
| POST | `/api/wishlist` | Add to wishlist |
| GET | `/api/wishlist` | Get user wishlist |

---

## Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch — `git checkout -b feature/AmazingFeature`
3. Commit your changes — `git commit -m 'Add some AmazingFeature'`
4. Push to the branch — `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Author

**Sujit** — [@Sujit843](https://github.com/Sujit843)

---

<div align="center">
  Made with ❤️ by Sujit &nbsp;|&nbsp; Style Baazar © 2025
</div>
