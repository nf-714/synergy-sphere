# Next.js Authentication with Supabase Tutorial

This repository contains the code for implementing authentication in Next.js 15 using Supabase. Follow along with the tutorial to learn how to add secure authentication to your Next.js applications.

## 🎥 Video Tutorial

Watch the step-by-step tutorial on YouTube: [Build a Modern Auth System in 20 Minutes with NextJS 15 and Supabase](https://www.youtube.com/watch?v=gAMYk-ls1sQ)

## 🚀 Getting Started

### Prerequisites

1. Create a [Supabase](https://supabase.com) project

   - Sign up for a Supabase account
   - Create a new project
   - Go to Project Settings -> API to find your credentials

2. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kirsanow/nextjs15-auth-tutorial.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Supabase](https://supabase.com) for authentication and database
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📚 What You'll Learn

- Setting up Supabase in a Next.js project
- Implementing authentication flows
- Protected routes and middleware
- Managing user sessions
- TypeScript integration
- Best practices for auth in Next.js

## 🔑 Key Features

- Email/Password authentication
- OAuth providers (Google, GitHub)
- Protected routes
- Middleware implementation
- Type-safe authentication
- Server and client components integration

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Authentication Patterns](https://nextjs.org/docs/authentication)

## 💡 Support

If you found this tutorial helpful, please consider:

- Subscribing to my [YouTube channel](https://www.youtube.com/@kirsnv?sub_confirmation=1)
- Following me on [X(Twitter)](https://x.com/kirsnvartem)
- Starring this repository

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
