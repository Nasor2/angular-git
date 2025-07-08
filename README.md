# 📘 Angular Posts Manager – Technical Test

A single-page Angular 19+ application built to interact with the public [JSONPlaceholder](https://jsonplaceholder.typicode.com) API. It allows users to **list**, **view**, **create**, **edit**, and **delete** posts in a clean and reactive UI. The project emphasizes strict TypeScript typing, modular architecture, and UX best practices.

---

## 🚀 Features

- ✅ Display a paginated list of posts (max 10 visible)
- 👁️ View post details including author name
- ➕ Create new posts via reactive form with validation
- ✏️ Edit existing posts (preloaded form values)
- 🗑️ Delete posts (with confirmation and simulated feedback)
- 💬 Show author's name using `userId` relation
- 🔥 Toast notifications on actions (success/error)
- ⏳ Clean service layer and modular standalone components
- 💡 Built using Angular 19 with strict typing, standalone components and modern patterns

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## 🧪 Running Locally

Start the development server:

```bash
ng serve
# or
npm start
```

Open your browser and go to:

```
http://localhost:4200
```

The app will reload automatically on code changes.

---

## 🔎 Notes About the API

> ℹ️ The API used in this project is **mocked** and **does not persist data**.
>
> - Created, updated, or deleted posts will not be reflected after reload.
> - However, HTTP responses are real — check the browser dev tools or network tab to verify successful operations.
