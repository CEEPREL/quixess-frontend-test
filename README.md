# Onboarding Modal App

A lightweight, fast, and modern onboarding experience built using React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Redux Toolkit. The app features a login screen, animated error handling, and a 3-step onboarding modal with clean architecture and reusable components.

## Preview

<!-- Add a screenshot or GIF of the modal flow below -->

![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.30.29.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.30.52.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.31.08.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.31.25.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.31.39.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.31.57.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.32.19.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.32.35.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.32.42.png)
![Screenshots](https://github.com/CEEPREL/quixess-frontend-test/blob/onboardinh/public/ss/Screenshot%202025-08-01%20at%2023.32.49.png)

## Features

- Vite-powered development with TypeScript support
- Global modal control using Redux Toolkit
- Tailwind CSS for consistent and responsive UI design
- Framer Motion for smooth modal and transition animations
- Error shake animation on failed validation
- Reusable modal and form components
- Strict input validation per onboarding step
- Clean and scalable architecture

## Directory Structure

```
src/
├── assets/                   # Static assets and images
├── components/               # Reusable UI components
│   ├──
│   ├──
│   └──
├── pages/                    # Route-level views
│   │
│   ├── WelcomePage.tsx
│   └── HomePage.tsx
├── redux/                    # Redux Toolkit setup
│   └── features/
│       └── modal/
│           └── modal-slice.ts
├── App.tsx                   # Main app layout and routing
└── main.tsx                  # Entry point
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/onboarding-modal-app.git
cd onboarding-modal-app
```

### Install dependencies

```bash
yarn install
# or
npm install
```

### Start development server

```bash
yarn dev
# or
npm run dev
```

### Build for production

```bash
yarn build
# or
npm run build
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- React Router DOM

## Customization

- Update `OnboardingModal.tsx` to modify onboarding steps or validation logic
- Change theme colors in `tailwind.config.js`
- Add persistent storage or authentication as needed

## License

This project is licensed under the MIT License.

---

For questions, contributions, or suggestions, feel free to open an issue or pull request.
