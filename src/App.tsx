import * as React from 'react'
import {
  createRouter,
  RouterProvider,
  createRootRoute,
  createRoute as createTanStackRoute,
  Outlet,
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import SnakePage from "./pages/SnakePage"; // Import the new SnakePage
import About from "./pages/About"; // Import the new About page
import Contact from "./pages/Contact"; // Import the new Contact page
import NotFound from "./pages/NotFound"; // Import the NotFound page

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout> {/* Wrap Outlet with Layout */}
          <Outlet />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound, // Register the NotFound component on the root route
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create Snake game route
const snakeRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/snake',
  component: SnakePage,
})

// Create About route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create Contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  snakeRoute,
  aboutRoute,
  contactRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;