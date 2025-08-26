# EcoEscuela Niños en Acción - Website

## Overview

This is a modern educational website for EcoEscuela Niños en Acción, a maternal and preschool institution in Trujillo Alto, Puerto Rico. The site focuses on promoting ecological education for children aged 2-4 years with an emphasis on environmental awareness and sustainability.

## System Architecture

The application follows a full-stack architecture with a clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom ecological color palette
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **API**: RESTful API endpoints

## Key Components

### Database Schema
- **Users**: Basic user authentication structure
- **Contact Submissions**: Form submissions from parents interested in enrollment
- **Newsletter Subscriptions**: Email subscriptions for updates and eco-tips

### Frontend Sections
- **Hero Section**: Main landing with call-to-action buttons
- **About Section**: Institution history, mission, and vision
- **Programs Section**: Educational offerings for different age groups
- **Approach Section**: Ecological methodology and teaching philosophy
- **Gallery Section**: Interactive image gallery of activities
- **Testimonials Section**: Parent reviews and feedback
- **FAQ Section**: Common questions and answers
- **Contact Section**: Contact form and institution information
- **Newsletter Section**: Email subscription for updates

### UI Components
- Comprehensive component library based on Radix UI
- Responsive design with mobile-first approach
- WhatsApp integration for direct communication
- Toast notifications for user feedback
- Form validation with Zod schemas

## Data Flow

1. **User Interaction**: Users interact with the website through various sections
2. **Form Submissions**: Contact forms and newsletter subscriptions are processed
3. **API Requests**: Frontend makes HTTP requests to backend API endpoints
4. **Database Operations**: Backend processes requests and interacts with PostgreSQL
5. **Response Handling**: Success/error responses are displayed to users via toast notifications

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI Library: Radix UI primitives
- Styling: Tailwind CSS with PostCSS
- Icons: Lucide React icons, React Icons
- Form Handling: React Hook Form with Zod validation
- HTTP Client: Native fetch API with TanStack Query

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting
- Zod for schema validation
- TypeScript for type safety

### Development Dependencies
- Vite for development server and build tool
- ESBuild for server-side bundling
- TypeScript compiler
- Various Vite plugins for Replit integration

## Deployment Strategy

The application is configured for deployment on Replit with:

### Development Mode
- Vite dev server for frontend with HMR
- Express server with TypeScript execution via tsx
- Automatic reloading and error overlay

### Production Mode
- Frontend: Vite build process generates optimized static files
- Backend: ESBuild bundles server code for Node.js execution
- Static file serving through Express
- Environment variable configuration for database connections

### Database Setup
- Drizzle configuration for PostgreSQL dialect
- Migration files generated in `/migrations` directory
- Database URL configured via environment variables
- Push-based schema updates for development

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
- August 08, 2025. Fixed nodemailer import error (createTransporter → createTransport)
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```