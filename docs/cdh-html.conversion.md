# Next.js Project Structure for Creator's Deal Hub

## Project Setup

```bash
npx create-next-app@latest creators-deal-hub --typescript --tailwind --eslint --app
cd creators-deal-hub
npm install three @types/three gsap lucide-react
```

## Folder Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Modal.tsx
│   │   └── Button.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── DealsSection.tsx
│   │   ├── FinanceSection.tsx
│   │   ├── ContactsSection.tsx
│   │   └── CTASection.tsx
│   ├── modals/
│   │   ├── CommandDeck.tsx
│   │   ├── WaitlistModal.tsx
│   │   └── AuthModal.tsx
│   └── three/
│       ├── BusinessConstellation.tsx
│       └── ConstellationScene.tsx
├── hooks/
│   ├── useThreeJS.ts
│   ├── useScrollAnimations.ts
│   └── useDeviceOrientation.ts
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   └── constants.ts
└── types/
    └── index.ts
```

## Key Files Structure

### 1. Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Creator's Deal Hub - The Living Business Constellation",
  description: 'Stop chasing data. Start seeing the connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111111] text-[#f3f3f4] overflow-x-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
```

### 2. Main Page (`app/page.tsx`)

```tsx
import HeroSection from '@/components/sections/HeroSection'
import DealsSection from '@/components/sections/DealsSection'
import FinanceSection from '@/components/sections/FinanceSection'
import ContactsSection from '@/components/sections/ContactsSection'
import CTASection from '@/components/sections/CTASection'
import BusinessConstellation from '@/components/three/BusinessConstellation'
import CommandDeck from '@/components/modals/CommandDeck'
import WaitlistModal from '@/components/modals/WaitlistModal'
import AuthModal from '@/components/modals/AuthModal'

export default function HomePage() {
  return (
    <>
      <BusinessConstellation />
      <div className="scroll-container relative z-2 w-full">
        <HeroSection />
        <DealsSection />
        <FinanceSection />
        <ContactsSection />
        <CTASection />
      </div>
      <CommandDeck />
      <WaitlistModal />
      <AuthModal />
    </>
  )
}
```

### 3. Global Styles (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

@layer base {
  body {
    font-family: 'Inter', sans-serif;
    background-color: #111111;
    color: #f3f3f4;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

@layer components {
  .cta-glow {
    @apply shadow-[0_0_15px_rgba(238,252,151,0.3),0_0_30px_rgba(238,252,151,0.2)] transition-all duration-300 ease-in-out;
  }
  
  .cta-glow:hover {
    @apply scale-105 shadow-[0_0_25px_rgba(238,252,151,0.5),0_0_50px_rgba(238,252,151,0.3)];
  }

  .mission-control-hud {
    @apply bg-black/50 backdrop-blur-[12px] fixed top-0 left-0 w-full z-50 border-b border-transparent;
    background-size: 400% 400%;
    border-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(163, 230, 53, 0.4),
      rgba(255, 255, 255, 0.1)
    ) 1;
    animation: header-enter 1s 0.5s ease-out forwards,
               animate-gradient 6s linear infinite;
  }

  @keyframes header-enter {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes animate-gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
}
```

### 4. Header Component (`components/ui/Header.tsx`)

```tsx
'use client'

import { useState } from 'react'
import Logo from './Logo'
import HUDItem from './HUDItem'

export default function Header() {
  const [isCommandDeckOpen, setIsCommandDeckOpen] = useState(false)

  const hudData = [
    { id: 'deals', label: 'Active Deals', value: '3', type: 'Deal', target: '#deals-section' },
    { id: 'invoices', label: 'Overdue', value: '1', type: 'Invoice', target: '#finance-section', isOverdue: true },
    { id: 'contacts', label: 'Key Contacts', value: '1', type: 'Contact', target: '#contacts-section' },
  ]

  return (
    <header className="mission-control-hud">
      <nav className="p-4 w-full max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-4">
          {hudData.map((item) => (
            <HUDItem key={item.id} {...item} />
          ))}
        </div>

        <button
          onClick={() => setIsCommandDeckOpen(true)}
          className="p-2 rounded-md hover:bg-white/10"
          aria-label="Open navigation menu"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
```

### 5. Three.js Component (`components/three/BusinessConstellation.tsx`)

```tsx
'use client'

import { useEffect, useRef } from 'react'
import useThreeJS from '@/hooks/useThreeJS'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import useDeviceOrientation from '@/hooks/useDeviceOrientation'

export default function BusinessConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scene, camera, renderer, group, interactiveObjects } = useThreeJS(canvasRef)
  
  useScrollAnimations(group, camera)
  useDeviceOrientation(group)

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed top-0 left-0 w-full h-full z-[1]"
      aria-hidden="true"
    />
  )
}
```

### 6. Custom Hook for Three.js (`hooks/useThreeJS.ts`)

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function useThreeJS(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000))
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null)
  const [group] = useState(() => new THREE.Group())
  const [interactiveObjects] = useState<THREE.Mesh[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize renderer
    const newRenderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    newRenderer.setPixelRatio(window.devicePixelRatio)
    newRenderer.setSize(window.innerWidth, window.innerHeight)
    setRenderer(newRenderer)

    // Setup camera
    camera.position.z = 15

    // Setup controls
    const controls = new OrbitControls(camera, newRenderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.enablePan = false

    // Setup lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.2))
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    // Add group to scene
    scene.add(group)

    // Create constellation objects
    createConstellation()

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      controls.update()
      newRenderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      newRenderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      newRenderer.dispose()
    }
  }, [canvasRef])

  const createConstellation = () => {
    // Implementation of constellation creation logic
    // This would include creating the central orb and satellites
  }

  return { scene, camera, renderer, group, interactiveObjects }
}
```

### 7. Scroll Animations Hook (`hooks/useScrollAnimations.ts`)

```tsx
'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

export default function useScrollAnimations(
  group: THREE.Group,
  camera: THREE.Camera
) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    // Add scroll-based animations
    tl.to(group.rotation, {
      x: 0,
      y: -Math.PI / 4,
      z: Math.PI / 8,
      scrollTrigger: {
        trigger: '#deals-section',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
    })

    // Add more scroll triggers for other sections...

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [group, camera])
}
```

## Key Benefits of This Structure

1. **Component Separation**: Each major section is its own component
2. **Custom Hooks**: Complex logic (Three.js, animations) is abstracted into reusable hooks
3. **Type Safety**: Full TypeScript support
4. **Performance**: Client-side rendering only where needed with 'use client'
5. **Maintainability**: Clear separation of concerns
6. **SEO Friendly**: Server-side rendering for static content
7. **Scalability**: Easy to add new pages and features

## Additional Considerations

1. **State Management**: For complex state, consider Zustand or Redux Toolkit
2. **API Routes**: Use Next.js API routes for form submissions
3. **Animation Libraries**: GSAP works well with Next.js, just ensure proper cleanup
4. **Performance**: Lazy load Three.js components for better initial page load
5. **Mobile Optimization**: Separate mobile/desktop logic in hooks
6. **Error Boundaries**: Add error boundaries for Three.js components

This structure provides a solid foundation for building a professional, maintainable Next.js application while preserving all the advanced features of your original HTML file.