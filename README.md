# The Herald - Modern News Website

A high-performance, responsive news website built with Next.js, featuring modern React patterns, optimized performance, and dark mode support.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Performance Optimized**: Implemented React.memo, useMemo, and useCallback for optimal rendering
- **Image Optimization**: Uses Next.js Image component with proper sizing and loading strategies
- **Modern React Patterns**: Built with React 18+ features and best practices

### Content Management
- **Article System**: Complete article management with categories, authors, and metadata
- **Category Filtering**: Dynamic category filtering with URL-based navigation  
- **Editor's Picks**: Curated content section with special styling
- **Latest News Ticker**: Real-time scrolling headlines banner
- **Article Cards**: Multiple card variants (featured, story, mobile) for different layouts

### User Experience
- **Fast Loading**: Optimized images with proper lazy loading and priority settings
- **Skeleton Loading**: Smooth loading states with animated skeletons
- **Smooth Animations**: CSS transitions and hover effects for better interactivity
- **Accessibility**: WCAG-compliant color contrasts and semantic HTML structure

## 🛠 Technical Stack

### Frontend Framework
- **Next.js 15+**: Latest version with App Router and React Server Components
- **React 18+**: Modern React with hooks, memo, and performance optimizations
- **TypeScript**: Full type safety throughout the application

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **CSS Custom Properties**: Dynamic theming with CSS variables
- **Google Fonts**: Inter (sans-serif) and Playfair Display (serif) fonts
- **Responsive Grid**: CSS Grid and Flexbox layouts

### Performance Optimizations
- **React.memo**: Memoized components to prevent unnecessary re-renders
- **useMemo/useCallback**: Optimized expensive calculations and function references
- **Image Optimization**: Next.js Image with responsive sizing and proper formats
- **Code Splitting**: Automatic code splitting with dynamic imports

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── article/[slug]/          # Dynamic article pages
│   ├── globals.css              # Global styles and theme variables
│   ├── layout.tsx               # Root layout with theme provider
│   └── page.tsx                 # Homepage with optimized performance
├── components/                   # Reusable UI components
│   ├── ArticleCard.tsx          # Memoized article card with variants
│   ├── ArticleGrid.tsx          # Optimized grid layout component
│   ├── CategoryFilter.tsx       # Mobile category navigation
│   ├── EditorsPicks.tsx         # Curated content section
│   ├── Footer.tsx               # Site footer
│   ├── Header.tsx               # Site header with navigation
│   ├── LatestTicker.tsx         # Scrolling news ticker
│   ├── MobileNav.tsx            # Mobile navigation menu
│   ├── SkeletonLoader.tsx       # Loading state components
│   └── ThemeToggle.tsx          # Dark/light mode switcher
├── lib/                         # Utility functions and data
│   ├── mock-data.ts             # Sample articles and content
│   ├── theme-provider.tsx       # Theme context and logic
│   └── types.ts                 # TypeScript type definitions
└── public/                      # Static assets
    └── *.svg                    # Icon files
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Dynamic based on theme (dark/light)
- **Accent Color**: Herald Red (#d31d44) for branding
- **Surface Colors**: Layered backgrounds for depth
- **Text Colors**: High contrast for accessibility

### Typography
- **Headlines**: Playfair Display (serif) for elegance
- **Body Text**: Inter (sans-serif) for readability
- **Font Weights**: 400-900 range for hierarchy

### Layout System
- **Breakpoints**: Mobile-first responsive design
- **Grid System**: CSS Grid for complex layouts
- **Spacing**: Consistent spacing scale using Tailwind

## 🚀 Performance Features

### Image Optimization
- **Next.js Image Component**: Automatic optimization and responsive images
- **Proper Sizing**: Configured sizes prop for different viewports
- **Priority Loading**: Strategic use of priority loading for above-the-fold content
- **Lazy Loading**: Default lazy loading for improved initial page load

### React Optimizations
- **Memoized Components**: All major components use React.memo
- **Optimized Hooks**: useMemo and useCallback prevent unnecessary recalculations
- **Reduced Re-renders**: Proper dependency arrays and state management
- **Code Splitting**: Automatic optimization with Next.js

### Loading Performance
- **Skeleton States**: Smooth loading transitions
- **Reduced Bundle Size**: Tree shaking and dead code elimination
- **Optimized Images**: WebP format with fallbacks
- **Fast Navigation**: Client-side routing with preloading

## 🌙 Theme System

### Implementation
- **CSS Variables**: Dynamic theme switching without page reload
- **System Preference**: Automatic detection of user's preferred color scheme
- **Persistent State**: Theme preference saved to localStorage
- **Smooth Transitions**: Animated theme changes

### Color Modes
- **Light Mode**: Clean, bright interface for day use
- **Dark Mode**: Comfortable, low-light interface for night use
- **Auto Mode**: Follows system preference automatically

## 🔧 Development

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Single column layout with mobile navigation
- **Tablet**: 768px - 1024px - Two column layouts with adapted spacing
- **Desktop**: > 1024px - Full grid layouts with sidebar content

### Mobile Features
- **Touch-Friendly**: Large tap targets and swipe gestures
- **Mobile Navigation**: Collapsible navigation menu
- **Optimized Images**: Properly sized for mobile screens
- **Fast Loading**: Prioritized mobile performance

## 🏗 Architecture Decisions

### Component Strategy
- **Atomic Design**: Small, reusable components
- **Container/Presentation**: Clear separation of logic and UI
- **Performance First**: Memoization and optimization patterns

### State Management
- **Context API**: Theme state management
- **URL State**: Category filtering via search parameters
- **Local State**: Component-level state with hooks

### Type Safety
- **Strict TypeScript**: Full type coverage
- **Interface Definitions**: Clear contract definitions
- **Type Guards**: Runtime type checking where needed

## 🔍 SEO & Accessibility

### SEO Features
- **Meta Tags**: Proper Open Graph and Twitter Card support
- **Semantic HTML**: Screen reader friendly structure
- **Performance**: Fast loading for better search rankings
- **URL Structure**: Clean, SEO-friendly URLs

### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant color ratios
- **Screen Readers**: Semantic HTML structure

## 🚦 Performance Metrics

### Optimizations Implemented
- **First Contentful Paint**: Optimized with priority loading
- **Largest Contentful Paint**: Image optimization and lazy loading
- **Cumulative Layout Shift**: Proper aspect ratios and sizing
- **Time to Interactive**: Code splitting and memoization

### Bundle Size
- **Tree Shaking**: Remove unused code
- **Dynamic Imports**: Lazy load components when needed
- **Image Optimization**: WebP format with compression
- **Font Loading**: Optimized Google Fonts loading

## 🔄 Recent Improvements

### Bug Fixes
- ✅ **Fixed Dark Mode Title Visibility**: Article titles now properly display in dark mode
- ✅ **Image Loading Issues**: Replaced img tags with Next.js Image components
- ✅ **Performance Optimization**: Added React.memo to all components
- ✅ **Mobile Image Loading**: Fixed 404 errors with proper Unsplash URLs

### Performance Enhancements
- ✅ **Memoized Components**: Reduced unnecessary re-renders
- ✅ **Optimized Hooks**: Better useMemo and useCallback usage
- ✅ **Image Optimization**: Proper sizing and loading strategies
- ✅ **Loading States**: Improved skeleton loading animations

## 🎯 Future Enhancements

- [ ] Add search functionality
- [ ] Implement article bookmarking
- [ ] Add social sharing features
- [ ] Integrate with CMS
- [ ] Add PWA capabilities
- [ ] Implement infinite scroll
- [ ] Add comment system
- [ ] Create admin dashboard

## 📄 License

License - feel free to use this project for your own news website or as a learning resource.

---

Built with ❤️ using Next.js 15, React 18, and modern web technologies.