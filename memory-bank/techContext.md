# Technical Context - Syntellite Website

## Technologies Used

### Core Framework Stack
- **React**: 18.2.0 - Modern React with hooks and concurrent features
- **TypeScript**: 5.0+ - Full type safety and enhanced developer experience
- **Vite**: 4.4+ - Fast build tool with HMR and optimized production builds
- **Node.js**: 18+ - Runtime environment for development tools

### Routing & Navigation
- **React Router**: 6.15+ - Client-side routing with modern API
- **React Router DOM**: Browser-specific routing components
- **History API**: Browser navigation state management

### Styling & UI
- **Tailwind CSS**: 3.3+ - Utility-first CSS framework
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefix handling
- **Framer Motion**: 10.16+ - Animation library for smooth transitions

### Development Tools
- **ESLint**: Code linting and quality enforcement
- **TypeScript Compiler**: Type checking and compilation
- **Vite Dev Server**: Hot module replacement and fast development
- **React DevTools**: Browser extension for debugging

### Build & Deployment
- **Vite Build**: Production optimization and bundling
- **Rollup**: Module bundler (used by Vite)
- **Terser**: JavaScript minification
- **CSS Minification**: Automatic CSS optimization

## Development Setup

### Prerequisites
```bash
Node.js 18+ 
npm or yarn package manager
Modern browser with ES2020+ support
```

### Installation & Setup
```bash
# Clone repository
git clone https://github.com/Madhup73488/Syntellite.git
cd Syntellite

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts
```json
{
  "dev": "vite --host",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}
```

## Technical Constraints

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **ES2020+ Features**: Required for optimal performance
- **No IE Support**: Modern JavaScript features used throughout

### Performance Requirements
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3 seconds

### Device Support
- **Desktop**: 1024px+ (primary target)
- **Tablet**: 768px - 1024px (responsive)
- **Mobile**: 320px - 768px (touch-optimized)
- **Very Small**: 320px - 375px (special handling)

### Network Considerations
- **3G Network**: Optimized for slower connections
- **Video Preloading**: Balanced approach for different connection speeds
- **Asset Optimization**: Compressed images and videos
- **CDN Ready**: Assets prepared for content delivery network

## Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.15.0",
  "framer-motion": "^10.16.0",
  "lucide-react": "^0.263.1",
  "react-icons": "^4.10.1"
}
```

### Development Dependencies
```json
{
  "@types/react": "^18.2.15",
  "@types/react-dom": "^18.2.7",
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0",
  "@vitejs/plugin-react": "^4.0.3",
  "autoprefixer": "^10.4.14",
  "eslint": "^8.45.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  "postcss": "^8.4.27",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.0.2",
  "vite": "^4.4.5"
}
```

### Icon Libraries
- **Lucide React**: Primary icon library for UI elements
- **React Icons**: Additional icons for specific use cases
- **Material Design Icons**: Phone and communication icons

## Tool Usage Patterns

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable network access
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // V2 cosmic color palette
        cosmic: {
          pink: '#FF81D1',
          purple: '#D632FF',
          deep: '#A42EFF',
          blue: '#796EFF',
          bright: '#2E39FF'
        }
      }
    }
  },
  plugins: []
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### ESLint Configuration
```javascript
// eslint.config.js
export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
]
```

## Asset Management

### Video Assets
- **Format**: MP4 with H.264 encoding
- **Resolution**: 1920x1080 for desktop hero video
- **Compression**: Balanced quality/size ratio
- **Preloading**: Auto preload for critical videos

### Image Assets
- **Formats**: PNG for logos, JPG for photos, SVG for icons
- **Optimization**: Compressed for web delivery
- **Responsive**: Multiple sizes for different screen densities
- **Lazy Loading**: Non-critical images loaded on demand

### Font Assets
- **System Fonts**: Fallback to system fonts for performance
- **Web Fonts**: Minimal custom fonts if needed
- **Loading Strategy**: Font-display: swap for better performance

## Build Process

### Development Build
1. **TypeScript Compilation**: Type checking and transpilation
2. **Hot Module Replacement**: Instant updates during development
3. **CSS Processing**: Tailwind compilation with PostCSS
4. **Asset Serving**: Static asset serving with Vite dev server

### Production Build
1. **TypeScript Compilation**: Full type checking
2. **Code Bundling**: Rollup-based bundling with tree shaking
3. **Minification**: JavaScript and CSS minification
4. **Asset Optimization**: Image and video compression
5. **Chunk Splitting**: Optimal bundle splitting for caching

### Deployment Process
1. **Build Generation**: `npm run build` creates dist folder
2. **Asset Upload**: Upload entire dist folder contents
3. **Server Configuration**: Ensure .htaccess is properly configured
4. **Cache Headers**: Set appropriate cache headers for static assets

## Environment Configuration

### Development Environment
- **Hot Reload**: Instant updates on file changes
- **Network Access**: Available on local network for device testing
- **Source Maps**: Full source map support for debugging
- **Error Overlay**: Detailed error information in browser

### Production Environment
- **Minified Code**: Optimized and compressed JavaScript/CSS
- **Asset Hashing**: Cache-busting with file hashes
- **Gzip Compression**: Server-side compression recommended
- **CDN Ready**: Assets optimized for CDN delivery

### Environment Variables
```bash
# Development
NODE_ENV=development
VITE_DEV_MODE=true

# Production
NODE_ENV=production
VITE_DEV_MODE=false
```

## Performance Monitoring

### Core Web Vitals
- **LCP**: Largest Contentful Paint monitoring
- **FID**: First Input Delay tracking
- **CLS**: Cumulative Layout Shift measurement
- **FCP**: First Contentful Paint optimization

### Custom Metrics
- **Resource Loading**: Video and image load times
- **Navigation Performance**: Route change timing
- **Touch Response**: Mobile interaction responsiveness
- **Animation Performance**: Frame rate monitoring

### Optimization Strategies
- **Code Splitting**: Route-based splitting (future enhancement)
- **Lazy Loading**: Component and asset lazy loading
- **Preloading**: Critical resource preloading
- **Caching**: Browser and CDN caching strategies

## Security Configuration

### Content Security Policy
```html
<!-- Future enhancement for production -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

### HTTPS Configuration
- **SSL/TLS**: HTTPS required for production
- **Mixed Content**: All resources served over HTTPS
- **Secure Cookies**: Secure flag for any cookies used

### Input Sanitization
- **React Protection**: Built-in XSS protection
- **TypeScript Validation**: Compile-time type checking
- **Event Handling**: Proper event sanitization
