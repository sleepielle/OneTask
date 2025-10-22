# 🖤 OneTask — SaaS Dark Landing Page

> A **Figma-to-code recreation** of a SaaS landing page built entirely with **Next.js** and **TailwindCSS**, featuring handcrafted animations, border masks, and smooth visual transitions — all without external animation libraries.

🌐 **Live Preview:** [OneTask](https://one-task-tau.vercel.app/)  


---

## 🧭 Overview

**OneTask** is a modern SaaS-style landing page designed to practice **high-fidelity implementation from Figma** — translating a complex dark UI into responsive, maintainable, and beautifully animated code.

Unlike typical approaches that rely on animation libraries, this project uses **pure TailwindCSS animations** and **CSS utilities** to bring subtle movement and interactivity to life.

> 🧠 The goal: demonstrate mastery over layout systems, CSS effects, and microinteractions using just Tailwind.

---

## 🧰 Tech Stack

| Category | Technology | Purpose |
|-----------|-------------|----------|
| ⚙️ Framework | [Next.js 14](https://nextjs.org/) | File-based routing, image optimization, performance |
| 🎨 Styling | [TailwindCSS 3.4](https://tailwindcss.com/) | Utility-first responsive design system |
| 🧩 Class Management | [clsx](https://github.com/lukeed/clsx) | Conditional class composition |
| 💻 Language | TypeScript | Type safety and maintainable components |
| 🖼️ SVG Loader | @svgr/webpack | Import and manipulate SVGs as React components |

---

## ✨ Key Highlights

| Focus | Description |
|--------|--------------|
| 🎨 **Figma-to-Code Fidelity** | Achieved near-perfect replication of a Figma dark UI template |
| 🪄 **Tailwind-Only Animations** | Implemented hover, fade, and reveal effects using CSS transitions and Tailwind utilities |
| 🧩 **Reusable Components** | Modular UI built with composable sections and clean props |
| 🌗 **Dark Theme Mastery** | Leveraged gradients, shadows, and opacity for depth and modern appeal |
| ♿ **Accessibility Considerations** | Semantic markup, contrast balance, and keyboard-focus support |

---

## 🧱 Project Structure

Structured for clarity, scalability, and visual separation between UI building blocks.

```bash
onetask/
├── public/ # Static assets (images, icons, etc.)
├── src/
│ ├── app/ # Next.js 14 app directory
│ ├── components/ # Reusable UI components (Buttons, Cards, Logos, etc.)
│ └── sections/ # Main sections of the page (Hero, Features, CTA, Footer)
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```


> Each section represents a visual block from the original Figma layout — implemented with Tailwind utilities and custom CSS variables for subtle animations.

---

## 🖼️ UI Showcase

| Hero Section | Features | Footer |
|---------------|-----------|---------|
| ![Hero](./public/screenshots/hero.png) | ![Features](./public/screenshots/features.png) | ![Footer](./public/screenshots/footer.png) |

🎥 **Live Demo:** [Explore the website](https://onetask.vercel.app/)

> Fully responsive — hover effects, gradient reveals, and smooth border masks all done with Tailwind classes.

---

## 🧪 Implementation Process

1. **Design Extraction** — Imported layout details (spacing, fonts, gradients) directly from the Figma community file.  
2. **Component Breakdown** — Translated sections (Hero, CTA, Features, Footer) into reusable, isolated React components.  
3. **Tailwind Animation Layer** — Built microinteractions using Tailwind’s transition, transform, and animation utilities.  
4. **Custom Effects** — Created border masks and fade reveals using CSS pseudo-elements and gradients.  
5. **Visual Tweaks** — Adjusted padding, typography, and contrast for aesthetic consistency.  

> ✍️ Everything from glow effects to section reveals was hand-crafted using Tailwind — no motion library required.

---

## 🪄 What I Learned

> “This project deepened my understanding of **CSS-driven motion**, **dark theme design**, and how to create an engaging UI experience without relying on animation libraries.  
> It also improved my precision when implementing from Figma and taught me to translate static design intent into smooth, real-time visual behavior.”

---

## 🧭 Future Enhancements

- [ ] Add light mode toggle ☀️  
- [ ] Implement Tailwind keyframes for looping subtle animations  
- [ ] Add section scroll reveals using intersection observers  
- [ ] Improve accessibility for keyboard navigation  

---

## 🚀 Getting Started

Run it locally in minutes:

```bash
# Clone the repository
git clone https://github.com/yourusername/onetask.git

# Navigate into it
cd onetask

# Install dependencies
npm install

# Run development server
npm run dev
Now open 👉 http://localhost:3000

```


## 🌸 Let's Connect!


Let’s connect on [LinkedIn](https://linkedin.com/in/mercedesgpaz) or drop a ⭐ if you liked this project!


