
# AngularGit – JSONPlaceholder Post Manager

This project is a complete solution for a **Technical Test: Angular + Git**, implemented using **Angular 19 with standalone components**.

It fulfills all the required functionalities from the test description, such as fetching, creating, editing, viewing, and deleting posts using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com), with a professional project structure, strong TypeScript typing, and good Git practices.

---

## 🧪 Technical Test Overview

**Duration:** 4 hours  
**Topic:** Angular Technical Test – REST API consumption + Git

**General Objective:**  
Develop an Angular application that consumes the JSONPlaceholder public API, focused on post management. The test evaluates your Angular technical skills (components, services, forms, typing, HTTP consumption) as well as your Git usage and clean development practices.

**API Used:**  
https://jsonplaceholder.typicode.com  
**Docs:** https://jsonplaceholder.typicode.com/guide  
**UI Reference:** https://post-pal-admin-panel.lovable.app/

---

## ✅ Functional Requirements Implemented

- [x] Post listing (limited to 10 posts, showing title, user name, and body)
- [x] Post detail view
- [x] Post creation form (with user selection and validations)
- [x] Post editing (prefilled form with validations)
- [x] Post deletion (with confirmation and simulated success)
- [x] User name display instead of userId
- [x] Reactive Forms with validations
- [x] Fully typed TypeScript interfaces
- [x] Clean architecture and Git commit history

---

## 🎁 Bonus Features Implemented

- ✅ Toast notifications (success/error)
- ✅ HttpInterceptor for centralized error handling
- ✅ Lazy loaded routes (posts module)
- ✅ Strict TypeScript typing
- ✅ Feature folders and standalone components

---

## 🚀 Development Server

To start the app locally:

```bash
ng serve
```

Then open your browser at [http://localhost:4200](http://localhost:4200)

---

## 📦 Tech Stack

- Angular 19 (standalone API)
- RxJS
- Angular Router
- TypeScript (strict mode)
- JSONPlaceholder API
- HttpClient
- Toasts via custom service
- Interceptors
- SCSS styling

---

## 🏗️ Folder Structure

src/
|
├── app/
│   ├── core/                 # Interfaces & models (Post, User, etc.)
│   ├── shared/               # Reusable services (toast, interceptors)
│   ├── features/
│   │   ├── posts/            # Post listing, create, edit, view
│   │   └── users/            # UsersService
│   └── app.routes.ts         # Lazy-loaded routes
|
├── main.ts                   # Bootstrap entry
├── app.config.ts             # Angular providers (http, interceptors)
└── styles.scss               # Global styles

---

## 🧱 Building the App

```bash
ng build
```

Artifacts are generated in the `/dist` folder.

---

## ✅ Running Unit Tests

```bash
ng test
```

Uses Karma test runner.

---

## 🔍 Running E2E Tests

```bash
ng e2e
```

> Note: You may need to configure your preferred e2e framework.

---

## 📚 Angular CLI Help

To scaffold components or services:

```bash
ng generate component component-name
ng generate service service-name
```

More options:

```bash
ng generate --help
```

---

## 📌 Evaluation Criteria (All Met)

- [x] Type-safe code in TypeScript
- [x] Full CRUD using HttpClient (GET, POST, PUT, DELETE)
- [x] Reactive Forms with validation
- [x] Angular best practices (services, modular structure)
- [x] Clean Git history with meaningful commits
- [x] UX basics (validation errors, feedback)

---

## 📝 License

This project is for technical evaluation, learning, and demonstration purposes.
