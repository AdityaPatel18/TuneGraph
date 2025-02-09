This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
# In our intermediate project we aimed to create a set of graphs indentifying key trends within our dataset as well as a gameplay that allows the user to input their choices in different attributes (ex. liveliness, energy, danceability, etc.) and the program will offer the user five songs that have matching outputs. This project not only has many implications for helping in the field of AI music, but offers some unique prospectives for the viewers. Additionally the program requires extensive use of databases to work. We were able to successfully create the set of graphs and design the website. 
To run clone the repository and in one terminal run 
  uvicorn backend.main:app --reload
Second terminal for the frontend run
  npm run dev
There might be libary issues which might need to be installed either using homebrew or pip.
Such as:
  pip install kagglehub
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
