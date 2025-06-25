
# 🛍️ Shopping Spree - E-commerce Product Showcase

A responsive React + Tailwind CSS based e-commerce web app that fetches products from [FakeStoreAPI](https://fakestoreapi.com), with features like product filtering, sorting, pagination, cart management, dark mode, neumorphic UI, and smooth transitions.

---

## 🚀 Features

- ✅ Product listing with filtering & sorting
- ✅ Pagination for large datasets
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Neumorphic + soft UI styling
- ✅ Dark/Light mode toggle with theme persistence
- ✅ Shimmer loader while fetching
- ✅ Product detail page with quantity selector
- ✅ Add to Cart + Accordion-style cart display
- ✅ Proceed to Payment button

---

## 🧰 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **React Router DOM**
- **React Icons**
- **Context API** (for Cart & Theme)
- **FakeStoreAPI** (for products)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shopping-spree.git
cd shopping-spree
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev
```

The app will run at: `http://localhost:5173/`

---

## 🌓 Theme Handling

- Dark mode is stored in `localStorage` as `theme = "dark"` or `"light"`.
- Toggle available in the top right corner of the header.

---

## 🗃 Folder Structure

```
📦 src/
 ┣ 📂components/        → UI components (Header, Cards, Filters, etc.)
 ┣ 📂context/           → CartContext & ThemeContext
 ┣ 📂pages/             → Home, ProductDetail, Cart
 ┣ 📜App.jsx            → Routes & Theme logic
 ┣ 📜main.jsx           → Vite root
 ┗ 📜index.css          → Tailwind styles
```

---

## 🔗 API

- All product data comes from: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---

## 📄 License

MIT License — free for personal or commercial use.

---

## 🙌 Acknowledgements

- [Fake Store API](https://fakestoreapi.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
