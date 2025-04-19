# Supabase-TailAdmin Next.js Boilerplate

## Project Overview

This project is a modern, production-ready boilerplate for rapidly building SaaS applications and web software. It combines the power of Next.js for frontend development, Supabase for backend services, and TailAdmin for a beautiful dashboard interface styled with Tailwind CSS.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (Latest version)
- **Authentication & Backend**: [Supabase](https://supabase.com/)
- **UI Components**: TailAdmin Dashboard
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Libraries**:
  - Radix UI (for accessible UI primitives)
  - Lucide React (for icons)
  - Next Themes (for dark/light mode toggle)
- **TypeScript**: Full TypeScript support throughout the codebase

## Project Structure

```
/app                   # Next.js app directory (App Router)
  /(auth-pages)        # Authentication pages (sign-in, sign-up, forgot-password)
  /(protected)         # Protected routes requiring authentication
  /auth                # Auth callback route handlers
/components            # Reusable UI components
/context               # React contexts (SidebarContext, ThemeContext)
/hooks                 # Custom React hooks
/lib                   # Utility libraries and shared code
/public                # Static assets
/utils                 # Helper utilities (including Supabase client)
```

## Key Features

- **Authentication**: Full authentication flow with sign-up, sign-in, password reset, and protected routes powered by Supabase Auth
- **Modern UI**: Clean, responsive dashboard interface using TailAdmin components
- **Theme Support**: Light and dark mode with automatic detection
- **TypeScript**: Type-safe development environment
- **Edge-ready**: Built with Next.js App Router for edge deployment capabilities
- **Mobile Responsive**: Fully responsive design that works on all device sizes

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and add your Supabase project credentials
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Visit `http://localhost:3000` to view the application

## Supabase Configuration

You'll need to create a Supabase project and configure the following:

1. Authentication providers (email/password is enabled by default)
2. Database tables for your application data
3. Add your Supabase URL and anon key to the `.env.local` file

## Customization

This boilerplate is designed to be easily customizable:

- Modify the dashboard components in `/components`
- Add new pages in the `/app` directory
- Customize the theme in `tailwind.config.ts`
- Add additional Supabase functionality in the `/utils/supabase` directory

## Development Notes

- The project uses the latest Next.js App Router architecture
- Authentication is handled server-side using Supabase's SSR package
- The TailAdmin dashboard has been integrated with Supabase authentication
- The codebase emphasizes clean, maintainable code with consistent styling

## For AI Agents

When working with this codebase:

- Authentication logic is primarily in `/app/auth` and protected routes use server-side auth checks
- The dashboard UI components follow the TailAdmin structure and styling
- The project has been cleaned to focus exclusively on TailAdmin dashboard implementation
- Theme handling is managed through a custom ThemeContext
- Supabase client initialization is in `/utils/supabase`
