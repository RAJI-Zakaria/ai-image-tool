## Routing in Next.js (App Directory)

Next.js provides a robust system to manage routes with different layouts using the new app routing system introduced in Next.js 13. Here are some key features and concepts:

### File-based Routing

- Automatic Route Generation: Next.js generates routes based on the folder structure in the app directory.
- Each folder represents a route segment. For example, app/about/page.js will create the route /about.

### Group Routing

- Grouping Routes: You can create route groups by using parenthesis in folder names, such as (auth) or (root). The (root) folder is the default group.
- Different Layouts: This technique allows you to apply different layouts for various sections of your application. For example:
  - Login Page: May have no navigation.
  - Home Page: May include a top navigation bar.
  - Dashboard: May feature a side navigation menu.
- Example: Placing the layout.js file in the (auth) folder will apply that layout to all routes inside (auth).

### Dynamic Routing

- Dynamic Routes: Routes like /users/[id]/edit allow you to capture URL parameters dynamically. For example, [id] in the URL can be used to fetch and display data specific to the user with that ID.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
