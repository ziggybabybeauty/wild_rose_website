# Wild Rose Corp Landing Page

A modern, responsive landing page for Wild Rose Corp - showcasing investment opportunities in Western Canada.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped styling
- **Google Fonts** (Playfair Display + Inter)

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build

```bash
npm run build
```

Output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Automatic (GitHub Actions)

1. Create a new GitHub repository
2. Push your code to the `main` branch
3. Go to Repository Settings → Pages
4. Set Source to "GitHub Actions"
5. The site will auto-deploy on each push to `main`

**Important:** Update the `base` path in `vite.config.ts` to match your repository name:

```ts
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## Form Setup (Formspree)

The contact form is configured to use Formspree. To enable it:

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Update `src/components/Contact.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

## Project Structure

```
site/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and logos
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── UniqueAssets.tsx
│   │   ├── Methodology.tsx
│   │   ├── Team.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & design tokens
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Design Tokens

CSS custom properties are defined in `src/index.css`:

- Colors (burgundy, gold, cream)
- Typography (Playfair Display, Inter)
- Spacing system
- Container widths

## Customization

- **Colors:** Update CSS variables in `src/index.css`
- **Content:** Edit text in individual component files
- **Images:** Replace files in `src/assets/images/`
- **Form:** Configure in `src/components/Contact.tsx`

## License

© 2025 Wild Rose Corp. All rights reserved.
