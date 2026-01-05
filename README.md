# Grey Lab – Product Management App (React + TypeScript)

A frontend assignment project built using **React**, **TypeScript**, and **Vite**, demonstrating core frontend concepts such as state management, component design, performance optimization, and responsive UI.

🔗 **Live Demo:** https://grey-lab-ts.vercel.app/product  
🔗 **Source Code:** https://github.com/Shehbaz456/Grey_Lab_ts

---

## 📌 Features

### ✅ Product List Display
- View products in **List (Table)** view
- View products in **Card (Grid)** view
- Toggle seamlessly between views

### 🔍 Search Functionality
- Search products by **name**
- **Debounced search (500ms)** for better performance

### ➕ Add & ✏️ Edit Product
- Form fields:
  - Name (required)
  - Price (required, number)
  - Category (required)
  - Stock (number)
  - Description (optional)
- Basic **form validation**
- Products stored **in-memory** (no backend)

### 📄 Pagination
- Paginated product list for better UX
- Clean navigation between pages

### ⚡ Performance Optimizations
- `React.memo` to prevent unnecessary re-renders
- `useCallback` for stable function references
- Efficient state updates

### 📱 Responsive UI
- Fully responsive across mobile, tablet, and desktop
- Built using **Tailwind CSS**

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **ESLint**

---

## 📂 Project Structure

```bash
src/
├── components/
|   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductForm.tsx 
│   └── ProductRow.tsx
├── pages/
│    └── ProductPage.tsx
├── types/
│   └── product.ts
├── data/
│   └── products.json
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shehbaz456/Grey_Lab_ts.git
cd Grey_Lab_ts
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the App
```bash
npm run dev
```

App will run on: `http://localhost:5173`

---

## 🧠 Key Learnings

- Strong understanding of **TypeScript with React**
- Component-level performance optimization
- Controlled forms & validation
- Debouncing techniques
- Clean and scalable folder structure

---

## 👨‍💻 Author

**Shehbaz khan**
- GitHub: https://github.com/Shehbaz456
- LinkedIn: https://www.linkedin.com/in/shehbazlovedev/

---

## 📄 License

This project is created for **educational and assignment purposes**.
