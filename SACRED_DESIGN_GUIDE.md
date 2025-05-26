# Divine Guide - Sacred Design System

## 🎨 Color Palette

### Primary Sacred Colors
- **Deep Indigo (Primary)**: `#2D4A6B` - HSL(210, 45%, 29%)
- **Soft Teal (Sacred Teal)**: `#4A90A4` - HSL(195, 37%, 47%)
- **Warm Gold (Accent)**: `#D4AF37` - HSL(45, 85%, 52%)

### Neutral Base
- **Pure Off-White**: `#FEFEFE` - HSL(0, 0%, 99.6%)
- **Soft Gray Background**: `#F8F9FA` - HSL(0, 0%, 97.3%)
- **Light Indigo (Cards)**: `#E8EDF5` - HSL(210, 25%, 93%)

### Text Hierarchy
- **Primary Text**: `#1A1A1A` - HSL(0, 0%, 10.2%)
- **Secondary Text**: `#4A5568` - HSL(215, 16%, 47%)
- **Tertiary Text**: `#718096` - HSL(215, 16%, 47%)

## 📝 Typography

### Heading Font: Crimson Text
```css
font-family: 'Crimson Text', serif;
font-weight: 400 | 600;
letter-spacing: -0.02em;
```

### Body Font: Inter
```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

### Usage Classes
- `.font-crimson` - Regular Crimson Text
- `.font-crimson-bold` - Bold Crimson Text (600 weight)
- `.font-sans` - Inter font

## 🎯 Sacred Design Elements

### Button Styles
```css
/* Primary Sacred Button */
.sacred-button {
  background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--sacred-teal)) 100%);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sacred-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(45, 74, 107, 0.3);
}
```

### Card Styles
```css
.sacred-card {
  background: hsl(var(--sacred-light));
  border-radius: 16px;
  border: 1px solid hsl(var(--border));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sacred-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(45, 74, 107, 0.12);
}
```

### Sacred Glow Effect
```css
.sacred-glow {
  box-shadow: 0 4px 20px rgba(45, 74, 107, 0.15), 0 1px 3px rgba(45, 74, 107, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sacred-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(45, 74, 107, 0.25), 0 4px 6px rgba(45, 74, 107, 0.15);
}
```

## 🏛️ Sacred Patterns & Backgrounds

### Arch Pattern (Subtle Religious Motif)
```css
.sacred-arch-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30h60C60 13.4 46.6 0 30 0z' fill='%232D4A6B' fill-opacity='0.02'/%3E%3C/svg%3E");
  background-size: 120px 120px;
}
```

### Sacred Light Pattern
```css
.sacred-pattern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(45, 74, 107, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
}
```

## 📐 Spacing & Layout Guidelines

### Section Spacing
- Hero: `py-24 md:py-40`
- Features: `py-24 md:py-32`
- CTA: `py-24`

### Card Spacing
- Grid gap: `gap-12`
- Card padding: `p-10`
- Icon container: `w-16 h-16 mb-8`

### Content Widths
- Hero content: `max-w-4xl`
- Section content: `max-w-6xl`
- CTA content: `max-w-4xl`

## 🎨 Implementation Examples

### Hero Section
```tsx
<section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-background via-sacred-light/30 to-background sacred-pattern">
  <div className="absolute inset-0 sacred-arch-pattern opacity-[0.08]"></div>
  <h1 className="text-5xl md:text-7xl font-crimson-bold tracking-tight text-foreground mb-8 leading-tight">
    <span className="text-primary">Divine</span> Guide
  </h1>
</section>
```

### Feature Card
```tsx
<div className="sacred-card p-10 sacred-glow">
  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-8">
    <Icon className="h-8 w-8 text-primary" />
  </div>
  <h3 className="text-2xl font-crimson-bold mb-4 text-foreground">Title</h3>
  <p className="text-muted-foreground leading-relaxed mb-6">Description</p>
</div>
```

### Sacred Button
```tsx
<Button className="sacred-button text-lg px-10 py-4 h-auto">
  Get Started
</Button>
```

## 🌙 Dark Mode Considerations

The design system automatically adapts to dark mode with:
- Deep sacred blue-black backgrounds
- Lighter sacred indigo for primary elements
- Brighter gold accents for better contrast
- Maintained sacred atmosphere with adjusted opacity levels

## ✨ Key Design Principles

1. **Reverent Minimalism**: Clean layouts with purposeful whitespace
2. **Sacred Symbolism**: Subtle arch patterns and light motifs
3. **Warm Accessibility**: High contrast with gentle, welcoming colors
4. **Spiritual Elevation**: Hover effects that lift elements upward
5. **Timeless Typography**: Classical serif for headings, modern sans for body
