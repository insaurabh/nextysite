This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# What you can learn

1. app router
    1. Create folder for each route
    2. Create folder with [folder-name] for dynamic route
    3. Create folder with (group-name) to group routes related, e.g auth routes. Group name will be part of routes
    4. Layouts
        1. loading.jsx|tsx It will be used to show the loading state in slow network. We can define per route level as well. Just declare in each route folder.
        2. error.jsx|tsx It will be used to show errors.We will handle errors here as well.
        3. not-found.jsx|tsx To show your own custom 404 page.
    5. Styling
        1. We can create modular css. Convert css file as navbar.module.css and import in files. Next will provide dynamic  names to each classes.


https://youtu.be/vCOSTG10Y4o?si=Ht9OkPM0IHsYa1Gk