# Groupe de mbombo_h 1066895
# Blog Manager

##  Project Description

Blog Manager is a simple blog application built with React and TypeScript. It allows users to create, view, edit, and delete articles. All data is stored locally in the browser using localStorage, so no backend or external database is required.

The goal of this project is to practice modern frontend development with React, including component structure, state management, routing, and form validation.

##  Technologies

- React
- TypeScript
- Vite
- React Router
- localStorage
- ESLint
- Prettier

##  Installation

To install the project:

```bash
npm install
```

## Run the Project

To start the development server:

```bash
npm run dev
```
Then open your browser and go to http://localhost:5173.

## Author

Honnygloire MBOMBOTO TO HOUNDA 
Group: mbombo_h 1066895 

## Project Structure
```
blog-manager/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleList.tsx
│   │   ├── Form.tsx
│   │   ├── Modal.tsx
│   │   └── SearchBar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Articles.tsx
│   │   ├── ArticleDetail.tsx
│   │   └── NewArticle.tsx
│   ├── types/
│   │   └── Article.ts
│   ├── utils/
│   │   └── storage.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Features

* Create, edit, and delete articles
* View article details
* Filter articles by title, category, or date
* Form validation with error messages
* Modal for editing articles
* Accessible navigation and form fields (ARIA)
* Fully local: no backend required

## Notes

* All articles are saved in the browser using localStorage
* The app is responsive and works on desktop and mobile
* The code is modular and easy to maintain
