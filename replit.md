# Dartmoor Pottery - E-commerce Platform

## Overview

Dartmoor Pottery is a handcrafted ceramics e-commerce platform showcasing artisanal pottery from Devon. The application features a contemporary gallery aesthetic with a focus on typography, generous white space, and atmospheric storytelling through photography. The platform is built as a full-stack TypeScript application with React on the frontend and Express on the backend, designed to provide an elegant browsing experience for handcrafted ceramic products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Design system based on "New York" style variant from shadcn/ui
- Custom color scheme using HSL values with CSS variables for theming
- Typography system featuring Cormorant Garamond (serif) and Inter (sans-serif) from Google Fonts

**Design Philosophy**
- Reference-based contemporary gallery aesthetic inspired by high-end craft e-commerce
- Typography as primary visual element with generous negative space
- Responsive design with mobile-first approach
- Custom spacing system using Tailwind's 4/8/12/16/20/24/32 units
- Accessibility-first component architecture through Radix UI

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and routing
- TypeScript throughout the backend for type safety
- Custom middleware for JSON parsing with raw body preservation (for webhook support)
- Request/response logging middleware for API endpoints

**Development Environment**
- Hot module reloading in development via Vite
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- Separate build process for client and server code

**Build Strategy**
- Client: Vite builds React application to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js` with ESM format
- Production mode serves pre-built static assets

### Data Storage

**Database**
- Designed for PostgreSQL with Drizzle ORM
- Connection via Neon Database serverless driver for serverless-compatible PostgreSQL
- Schema defined in `shared/schema.ts` for type sharing between client and server
- Drizzle Kit for schema migrations in `migrations/` directory

**Current Implementation**
- In-memory storage implementation (`MemStorage`) for development
- User management with username/password authentication structure
- Extensible storage interface (`IStorage`) allowing easy swap to database-backed implementation

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Zod schemas via `drizzle-zod` for runtime validation
- Type inference for insert and select operations

### State Management

**Client-Side State**
- TanStack Query for server state with custom query client configuration
- Custom `apiRequest` helper for authenticated API calls with error handling
- Toast notifications via Radix UI Toast primitives
- Form state managed through React Hook Form with Zod resolvers

**Session Management**
- Cookie-based sessions prepared (connect-pg-simple for PostgreSQL session store)
- Credentials included in fetch requests for authentication

### Component Architecture

**Page Structure**
- Single-page application with section-based homepage
- Modular section components: Hero, Brand Story, Featured Collection, Craftsmanship, Location, Newsletter, Footer
- Navigation component with mobile menu support
- 404 Not Found page for unmatched routes

**UI Patterns**
- Compound component patterns for complex UI elements
- Custom hooks for responsive behavior (`use-mobile`, `use-toast`)
- Example components in `client/src/components/examples/` for development reference
- Atomic design approach with base UI components in `client/src/components/ui/`

### Asset Management

**Static Assets**
- Images stored in `attached_assets/generated_images/`
- Vite alias `@assets` for clean import paths
- Background images for hero sections and atmospheric photography
- Favicon support

**Typography**
- Google Fonts loaded via CDN (Cormorant Garamond, Inter)
- Font weights: 300, 400, 600 for Cormorant; 400, 500 for Inter
- Preconnect hints for performance optimization

## External Dependencies

**UI Component Libraries**
- @radix-ui/* - Complete suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, select, toast, etc.)
- cmdk - Command palette component
- embla-carousel-react - Touch-friendly carousel component
- lucide-react - Icon library
- class-variance-authority - CVA for component variant management
- tailwind-merge - Utility for merging Tailwind classes

**Form & Validation**
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation library
- drizzle-zod - Drizzle to Zod schema conversion

**Data Fetching & State**
- @tanstack/react-query - Server state management
- date-fns - Date manipulation library

**Database**
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- drizzle-orm - TypeScript ORM
- drizzle-kit - Schema migration toolkit
- connect-pg-simple - PostgreSQL session store for Express

**Build Tools**
- vite - Frontend build tool and dev server
- @vitejs/plugin-react - React plugin for Vite
- esbuild - Fast JavaScript bundler for server code
- typescript - Type checking
- tailwindcss - Utility-first CSS framework
- autoprefixer - PostCSS plugin for vendor prefixes

**Replit Integration**
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Development tooling
- @replit/vite-plugin-dev-banner - Development banner

**Server**
- express - Web application framework
- nanoid - Unique ID generation

**Development**
- tsx - TypeScript execution for development server
- wouter - Lightweight router for React