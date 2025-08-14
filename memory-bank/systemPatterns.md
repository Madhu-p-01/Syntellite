# System Patterns - Syntellite Website

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router v6 for client-side navigation
- **Styling**: Tailwind CSS with utility-first approach
- **Animations**: Framer Motion for smooth transitions and effects
- **State Management**: React hooks (useState, useEffect, useRef, useContext)

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route-specific page components
├── contexts/           # React context providers
├── lib/                # Utility functions
├── assets/             # Static assets (images, videos, fonts)
└── types/              # TypeScript type definitions
```

## Key Technical Decisions

### Mobile-First Responsive Design
- **Breakpoint Strategy**: Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Touch Event Handling**: Custom scroll detection with 10px threshold
- **Viewport Units**: Careful use of vh/vw units with fallbacks
- **Component Responsiveness**: Conditional rendering based on screen size

### Performance Optimization Patterns
- **Resource Preloading**: Critical assets loaded during initial loading screen
- **Code Splitting**: Route-based code splitting with React.lazy (future enhancement)
- **Image Optimization**: WebP format with fallbacks
- **Video Optimization**: Auto preload for hero video, lazy loading for others

### Component Architecture Patterns
- **Composition over Inheritance**: Favor component composition
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Props Interface**: Strict TypeScript interfaces for all component props
- **Event Handling**: Consistent event prevention and cleanup patterns

## Design Patterns in Use

### Navigation Pattern
```typescript
// Consistent navigation with scroll-to-top
const handleNavigation = (path: string, event: React.MouseEvent) => {
  event.preventDefault();
  saveScrollPosition();
  navigate(path);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};
```

### Touch Event Pattern
```typescript
// Mobile scroll detection pattern
const [touchStartY, setTouchStartY] = useState(0);
const [isScrolling, setIsScrolling] = useState(false);

onTouchStart={(e) => {
  setTouchStartY(e.touches[0].clientY);
  setIsScrolling(false);
}}
onTouchMove={(e) => {
  const touchY = e.touches[0].clientY;
  const diff = Math.abs(touchY - touchStartY);
  if (diff > 10) setIsScrolling(true);
}}
onTouchEnd={() => {
  if (!isScrolling) {
    // Execute action
  }
  setTimeout(() => setIsScrolling(false), 100);
}}
```

### Responsive Animation Pattern
```typescript
// Responsive scroll-based animations
const isMobile = window.innerWidth < 768;
const scrollThreshold = isMobile ? 200 : 1000;
const transform = isMobile ? "translateY(-12vh)" : "translateY(10vh)";
```

### Loading State Pattern
```typescript
// Resource preloading with progress tracking
const [resourcesLoaded, setResourcesLoaded] = useState(false);
const [loadingProgress, setLoadingProgress] = useState(0);

const preloadResources = async () => {
  const resources = [
    // Video preloading
    new Promise<void>((resolve) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.oncanplaythrough = () => {
        setLoadingProgress(prev => prev + 50);
        resolve();
      };
      video.src = videoSrc;
    })
  ];
  await Promise.all(resources);
  setResourcesLoaded(true);
};
```

## Component Relationships

### Header Component
- **Dependencies**: React Router (useLocation, useNavigate)
- **State Management**: Local state for mobile menu, dropdown visibility
- **Event Handling**: Click outside detection, touch event optimization
- **Responsive Behavior**: Different layouts for mobile/desktop

### Hero Component
- **Dependencies**: Framer Motion for animations
- **State Management**: Scroll position tracking, mobile detection
- **Performance**: Video preloading, optimized transforms
- **Responsive Behavior**: Adaptive text positioning and scroll thresholds

### Services Layout
- **Dependencies**: React Router for navigation
- **State Management**: Sidebar visibility, scroll position preservation
- **Navigation Pattern**: Scroll-to-top on route changes
- **Responsive Behavior**: Sidebar toggle behavior varies by screen size

### Loading Screen
- **Dependencies**: Framer Motion for animations
- **State Management**: Resource loading progress, animation timing
- **Performance**: Parallel resource preloading
- **Session Management**: SessionStorage to prevent repeated loading

## Critical Implementation Paths

### Mobile Navigation Flow
1. **Touch Detection**: User touches service button
2. **Scroll Monitoring**: Track touch movement with threshold
3. **Action Decision**: Execute navigation only if not scrolling
4. **Event Cleanup**: Reset scroll state after action
5. **Navigation**: Smooth transition to target page

### Hero Section Scroll Flow
1. **Scroll Tracking**: Monitor window scroll position
2. **Threshold Calculation**: Different thresholds for mobile/desktop
3. **Transform Application**: Apply responsive transforms to text
4. **Video Management**: Control video background visibility
5. **Section Transition**: Smooth handoff to next content section

### Resource Loading Flow
1. **Initial Load**: Display loading screen immediately
2. **Resource Preloading**: Load video, images, and critical assets
3. **Progress Tracking**: Update loading progress indicators
4. **Completion Check**: Wait for all resources to load
5. **Transition**: Smooth exit to main website

### Services Navigation Flow
1. **Sidebar Toggle**: User opens services sidebar
2. **Scroll Preservation**: Save current sidebar scroll position
3. **Service Selection**: User clicks on service link
4. **Navigation**: Navigate to new service page
5. **Scroll Reset**: Automatically scroll to top of content
6. **State Management**: Restore sidebar scroll position

## Error Handling Patterns

### Video Loading Fallback
```typescript
onError={(e) => {
  console.error("Video failed to load:", e);
  // Continue without video
}}
```

### Touch Event Fallback
```typescript
// Fallback for browsers without touch support
const handleClick = (e: React.MouseEvent) => {
  if (!('ontouchstart' in window)) {
    // Handle as regular click
  }
};
```

### Navigation Fallback
```typescript
// Fallback navigation for failed routes
<Route path="*" element={<Navigate to="/" replace />} />
```

## State Management Architecture

### Local Component State
- **useState**: For component-specific state (visibility, loading, etc.)
- **useEffect**: For side effects (scroll listeners, cleanup)
- **useRef**: For DOM references and mutable values

### Context-Based State
- **NavigationContext**: Shared navigation state across components
- **Theme Context**: Future enhancement for V2 cosmic theme

### Session Storage
- **Loading State**: Prevent repeated loading screen display
- **Sidebar Scroll**: Preserve scroll position across navigation
- **User Preferences**: Future enhancement for user settings

## Performance Optimization Strategies

### Bundle Optimization
- **Tree Shaking**: Vite automatically removes unused code
- **Code Splitting**: Route-based splitting (future enhancement)
- **Asset Optimization**: Compressed images and videos

### Runtime Optimization
- **Event Debouncing**: Scroll event optimization
- **Memoization**: React.memo for expensive components (future enhancement)
- **Lazy Loading**: Images and non-critical components

### Network Optimization
- **Resource Preloading**: Critical assets loaded upfront
- **Caching Strategy**: Browser caching for static assets
- **CDN Ready**: Assets optimized for CDN delivery

## Security Considerations

### Input Validation
- **TypeScript**: Compile-time type checking
- **Props Validation**: Strict interface definitions
- **Event Handling**: Proper event sanitization

### XSS Prevention
- **React's Built-in Protection**: JSX automatically escapes content
- **Sanitized Inputs**: All user inputs properly handled
- **Safe Navigation**: Controlled routing with validation

### Content Security
- **Asset Integrity**: Local assets with known sources
- **External Links**: Proper rel attributes for security
- **HTTPS Ready**: All resources compatible with HTTPS
