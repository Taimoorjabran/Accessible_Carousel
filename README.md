# Accessible Carousel - React Slick Implementation

An accessible image carousel following W3C ARIA Authoring Practices.

## Running Locally

1. Install dependencies:
```bash
   npm install
```

2. Start development server:
```bash
   npm run dev
```

3. Open browser at `http://localhost:5173`

## Accessibility Testing with NVDA

### Testing Steps:
1. Installed NVDA from https://www.nvaccess.org/download/
2. Started NVDA and opened the carousel
3. Used Tab key to navigate through controls
4. Verified announcements match W3C example
5. Tested auto-rotation pause on focus

### NVDA Behavior:
- Announces "carousel" landmark when entering
- Reads slide position ("1 of 6")
- Announces rotation status changes
- Reads button labels clearly
- Pauses rotation during interaction

## Features

- Auto-rotating slides (3 second interval)
- Pause on hover/focus
- Keyboard accessible
- Screen reader optimized
- Previous/Next navigation
- Play/Pause controls

## Deployed Link

[https://jovial-cocada-8308c6.netlify.app/]