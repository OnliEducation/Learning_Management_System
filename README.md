# Byway

This project is an online platform for selling courses. The primary goal of the project is to provide users with an intuitive interface for searching, purchasing, creating, and taking educational courses.

*Read this in other languages: [Русский](README.ru.md).*

**The published version of the site** <>

## Table of Contents
  - [⚙️ Functionality](#️-functionality)
    - [⭐ Features](#-features)
  - [🗺️ Roadmap](#️-roadmap)
  - [🔧 Tech Stack](#-tech-stack)
    - [🌐 Frontend](#-frontend)
    - [🖧 Backend and Database](#-backend-and-database)
  - [🏛️ Architecture](#️-architecture)
    - [📁 Project Structure](#-project-structure)
  - [💻 Installation](#-installation)
  
## ⚙️ Functionality

- Authentication and Registration: Users can create accounts, log in, and manage their sessions.
- Course Management: A course includes information about content, instructor, and reviews and ratings. Courses can be loaded using Firebase Firestore and displayed as cards on the platform's pages.
- Reviews: Users can leave reviews for completed courses. Each review is associated with a specific course and user.
- Data Storage: The project uses Firebase Firestore to store information about users, courses, and reviews. User data, including avatars, is uploaded and stored in Firebase Storage.

  ### ⭐ Features

  - Client-side data storage in LocalStorage.
    This feature allows the web application to work efficiently even after a page reload.

## 🗺️ Roadmap

- [ ] Implement course creation functionality for users
- [ ] Add the ability to edit and manage created courses
- [ ] Add course purchase functionality
- [ ] Add functionality for creating course reviews
- [ ] Add course search functionality on the main page
- [ ] Develop an admin panel for managing course content and moderating user-created courses

## 🔧 Tech Stack

 ### 🌐 Frontend

   - [React](https://react.dev/learn) + [TypeScript](https://www.typescriptlang.org/)
   - [Redux Toolkit](https://redux-toolkit.js.org/)
   - [Redux Persist](https://github.com/rt2zz/redux-persist#readme)
   - [Vite](https://vitejs.dev/)
   - [CSS Modules](https://github.com/css-modules/css-modules/blob/master/README.md)
 
 ### 🖧 Backend and Database

   - [Firebase Firestore](https://firebase.google.com/products/firestore)
   - [Firebase Storage](https://firebase.google.com/products/storage)
   - [Firebase Authentication](https://firebase.google.com/products/auth)

## 🏛️ Architecture

The project uses the architectural methodology for frontend projects [Feature-Sliced Design](https://feature-sliced.design/ru/), which ensures a clear separation of functional modules, improving code scalability and maintainability.

  ### 📁 Project Structure

  The project structure is as follows:

  ```
  └── src/
  ├── 1_app/                  # Application initialization logic                #
  |                           #
  ├── 2_pages/                # Layer: Application pages
  |   ├── {some-page}/        #     Slice: (example: Homepage page)
  |   |   └── ui/             #         Segment: UI components, component styles
  |   |   └── index.ts        #         Public API
  |   ...                     #
  |                           #
  ├── 3_widgets/              # Layer: Self-contained and complete blocks for pages
  |   ├── {some-widget}/      #     Slice: (example: Header widget)
  |   |   ├── lib/            #         Segment: Infrastructure logic (helpers/utils)
  |   |   ├── model/          #         Segment: Business logic
  |   |   └── ui/             #         Segment: UI components, component styles
  |   |   └── index.ts        #         Public API
  |   ...                     #
  ├── 4_features/             # Layer: Handled user scenarios
  |   ├── {some-feature}/     #     Slice: (example: SearchCourse feature)
  |   |   ├── lib/            #         Segment: Infrastructure logic (helpers/utils)
  |   |   ├── model/          #         Segment: Business logic
  |   |   └── ui/             #         Segment: UI components, component styles
  |   |   └── index.ts        #         Public API
  |   ...                     #
  |                           #
  ├── 5_entities/             # Layer: Business entities handled by the domain
  |   ├── {some-entity}/      #     Slice: (example: Course entity)
  |   |   ├── lib/            #         Segment: Infrastructure logic (helpers/utils)
  |   |   ├── model/          #         Segment: Business logic
  |   |   └── ui/             #         Segment: UI components, component styles
  |   |   └── index.ts        #         Public API
  |   ...                     #
  |                           #
  ├── 6_shared/               # Layer: Reusable modules not tied to business logic
  |   ├── api/                #         Segment: Backend interaction (request functions, mappers)
  |   ├── config/             #         Segment: Application configuration (configuration keys, ...)
  |   ├── lib/                #         Segment: Application infrastructure logic (utils/helpers)
  |   ├── types/              #         Segment: Global types (entity types, errors, status ...)
  │   └── ui/                 #         Segment: Reusable UI resources (UI components, UI templates, icons, images)
  |   ...                     #
  |                           #
  └── main.tsx/               # Application entry point
```

## 💻 Installation

1. Clone the repository

```bash
git clone https://github.com/OnliEducation/Learning_Management_System.git
```

2. Switch to the project directory 

```bash
cd Learning_Management_System

```

3. Install dependencies

```bash
npm install
```

4. Run the application

```bash
npm run dev
```
