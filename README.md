# App Builder Landing Page

A beautiful, animated landing page for an app builder platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ **Framer Motion Animations** - Smooth, professional animations throughout
- 🌓 **Dark Mode Support** - Automatic dark mode based on system preferences
- 📱 **Fully Responsive** - Perfect on all devices
- 🎨 **Beautiful UI** - Modern design with custom Tailwind configuration
- 🎬 **Interactive Demo** - Drag-and-drop builder demonstration
- 💰 **Pricing Section** - Ready-to-customize pricing tiers
- 🎥 **Video Modal** - Embedded video player for demos
- ⚡ **Fast Performance** - Optimized with Next.js 15

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 12.4.3
- **Icons:** Lucide React & React Icons
- **React:** 19.0.0

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/filiksyos/app-builder-landing.git
cd app-builder-landing
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#A78BFA', // Your brand color
    light: '#C4B5FD',
    dark: '#8B5CF6',
  },
  // ... more colors
}
```

### Content

- **Hero Section:** Edit `app/page.tsx` - Update titles, descriptions, and CTAs
- **Features:** Modify the `features` array in `app/page.tsx`
- **Pricing:** Update the `plans` array in `components/PricingSection.tsx`
- **Video:** Change the `videoId` prop in the VideoModal component

### Components

- `TypewriterEffect` - Animated typewriter text effect
- `VideoModal` - YouTube video embed modal
- `FeatureCard` - Animated feature cards
- `PricingSection` - Pricing tiers display
- `DemoBuilder` - Interactive drag-and-drop demo

## 📁 Project Structure

```
app-builder-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   ├── DemoBuilder.tsx
│   ├── FeatureCard.tsx
│   ├── PricingSection.tsx
│   ├── TypewriterEffect.tsx
│   └── VideoModal.tsx
├── contexts/
│   └── AuthContext.tsx  # Auth context (demo)
├── hooks/
│   └── useTrialStatus.ts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/filiksyos/app-builder-landing)

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 License

MIT License - feel free to use this template for your projects!

## 🙏 Credits

Based on [ShenSeanChen/launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase)

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ for app builders everywhere