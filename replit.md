# Firehawk Drone Project

## Overview

This is a full-stack web application showcasing the Firehawk drone project - a life-saving drone technology designed by an 8th grade student named Ron Osmani. The application serves as a portfolio and presentation platform highlighting the drone's capabilities in search & rescue, medical supply delivery, and disaster response operations. The site features sections for project information, photo galleries, demo videos, GitHub repository links, creator biography, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.
GitHub username: Roniiwww
Contact email: ronosmani29@gmail.com
Theme: Fire red and ash grey color scheme

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Firehawk theme colors and shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **Storage Interface**: Abstract storage pattern with in-memory implementation (MemStorage class)
- **Development**: Integrated Vite middleware for hot module replacement in development
- **Static Serving**: Production-ready static file serving with proper error handling

### Component Structure
- **Layout**: Single-page application with smooth scrolling navigation
- **Sections**: Modular components for Hero, About, Gallery, Demo, GitHub, AboutMe, Contact, and Footer
- **UI Library**: Comprehensive set of reusable components including buttons, cards, forms, dialogs, and navigation elements
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: User management with username/password authentication structure
- **Current Implementation**: In-memory storage for development with interface for easy database integration
- **Migration Support**: Drizzle Kit for database schema migrations and management

### Development Tools
- **Type Checking**: Strict TypeScript configuration with comprehensive type coverage
- **Code Quality**: ESLint and Prettier integration through components.json configuration
- **Build Process**: Separate client and server builds with ESBuild for server bundling
- **Development Server**: Integrated Vite development server with Express API routes

## External Dependencies

### UI Framework Dependencies
- **@radix-ui**: Complete set of accessible UI primitives for complex components
- **@tanstack/react-query**: Server state management and data fetching
- **tailwindcss**: Utility-first CSS framework with custom design system
- **lucide-react**: Modern icon library for consistent iconography
- **wouter**: Minimalist routing library for single-page navigation

### Database and Backend Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **drizzle-zod**: Schema validation integration with Zod for runtime type checking
- **express**: Web application framework for API routes and middleware

### Development and Build Dependencies
- **vite**: Modern build tool with fast HMR and optimized production builds
- **tsx**: TypeScript execution engine for development server
- **esbuild**: Fast JavaScript bundler for server-side code
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment

### Form and Validation Dependencies
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolver integration for form validation
- **zod**: Schema validation library for runtime type checking

### Styling and Animation Dependencies
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Utility for conditionally joining CSS class names
- **tailwind-merge**: Utility for merging Tailwind CSS classes intelligently