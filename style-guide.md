# Style Guide Landing Page Maintenance TOSERBA WS PEDAK

## Color Palette

### Primary Colors
- **Biru Toserba**: #1E4DB7
  - RGB: 30, 77, 183
  - CMYK: 84, 58, 0, 28
  - Usage: Header, footer, primary buttons, headings

- **Kuning Toserba**: #FFC107
  - RGB: 255, 193, 7
  - CMYK: 0, 24, 97, 0
  - Usage: Accent, highlights, secondary buttons

### Secondary Colors
- **Biru Muda**: #E3F2FD
  - RGB: 227, 242, 253
  - CMYK: 11, 5, 0, 1
  - Usage: Background sections, subtle highlights

- **Kuning Muda**: #FFF9C4
  - RGB: 255, 249, 196
  - CMYK: 0, 2, 23, 0
  - Usage: Subtle highlights, notification backgrounds

- **Abu-abu Gelap**: #424242
  - RGB: 66, 66, 66
  - CMYK: 0, 0, 0, 74
  - Usage: Body text, secondary information

- **Abu-abu Medium**: #757575
  - RGB: 117, 117, 117
  - CMYK: 0, 0, 0, 54
  - Usage: Secondary text, captions

- **Abu-abu Light**: #E0E0E0
  - RGB: 224, 224, 224
  - CMYK: 0, 0, 0, 12
  - Usage: Borders, dividers

- **Putih**: #FFFFFF
  - RGB: 255, 255, 255
  - CMYK: 0, 0, 0, 0
  - Usage: Main background

### Social Media Colors
- **WhatsApp**: #25D366
  - RGB: 37, 211, 102
  - Usage: WhatsApp button background

- **Instagram Gradient**: 
  - Start: #833AB4
  - Middle: #FD1D1D
  - End: #FCB045
  - Usage: Instagram button background

## Typography

### Font Families
- **Primary Font**: Poppins
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
  - Usage: All headings, buttons, accent text

- **Secondary Font**: Open Sans
  - Weights: 400 (Regular), 600 (Semi-Bold)
  - Usage: Body text, paragraphs

- **Tertiary Font**: Roboto
  - Weights: 400 (Regular), 500 (Medium)
  - Usage: UI elements, forms

### Typography Scale

#### Headings
- **H1**: 
  - Font: Poppins
  - Size: 36px (Desktop), 28px (Tablet), 24px (Mobile)
  - Weight: 700 (Bold)
  - Line Height: 1.2
  - Color: #1E4DB7
  - Margin Bottom: 16px

- **H2**: 
  - Font: Poppins
  - Size: 24px (Desktop), 20px (Tablet), 18px (Mobile)
  - Weight: 600 (Semi-Bold)
  - Line Height: 1.3
  - Color: #1E4DB7
  - Margin Bottom: 12px

- **H3**: 
  - Font: Poppins
  - Size: 20px (Desktop), 18px (Tablet), 16px (Mobile)
  - Weight: 500 (Medium)
  - Line Height: 1.4
  - Color: #424242
  - Margin Bottom: 8px

#### Body Text
- **Paragraph**: 
  - Font: Open Sans
  - Size: 16px (Desktop), 15px (Tablet), 14px (Mobile)
  - Weight: 400 (Regular)
  - Line Height: 1.6
  - Color: #424242
  - Margin Bottom: 16px

- **Small Text**: 
  - Font: Open Sans
  - Size: 14px (Desktop), 13px (Tablet), 12px (Mobile)
  - Weight: 400 (Regular)
  - Line Height: 1.5
  - Color: #757575
  - Margin Bottom: 8px

#### Button Text
- **Primary Button**: 
  - Font: Poppins
  - Size: 16px (Desktop), 15px (Tablet), 14px (Mobile)
  - Weight: 500 (Medium)
  - Text Transform: Uppercase
  - Letter Spacing: 0.5px

- **Secondary Button**: 
  - Font: Poppins
  - Size: 16px (Desktop), 15px (Tablet), 14px (Mobile)
  - Weight: 500 (Medium)
  - Text Transform: Uppercase
  - Letter Spacing: 0.5px

## Spacing System

### Base Unit: 8px
- **XS**: 4px (0.5x base)
- **SM**: 8px (1x base)
- **MD**: 16px (2x base)
- **LG**: 24px (3x base)
- **XL**: 32px (4x base)
- **XXL**: 48px (6x base)
- **XXXL**: 64px (8x base)

### Component Spacing
- **Button Padding**: 16px 24px
- **Card Padding**: 24px
- **Section Padding**: 80px (Desktop), 60px (Tablet), 40px (Mobile)
- **Container Padding**: 24px (Desktop), 20px (Tablet), 16px (Mobile)

## Layout System

### Container
- **Max Width**: 1200px
- **Centered**: Yes
- **Padding**: 0 24px (Desktop), 0 20px (Tablet), 0 16px (Mobile)

### Grid System
- **Desktop**: 12-column grid
- **Tablet**: 8-column grid
- **Mobile**: 4-column grid

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Components

### Buttons

#### Primary Button (WhatsApp)
```css
.whatsapp-button {
  background-color: #25D366;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.whatsapp-button:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}
```

#### Secondary Button (Instagram)
```css
.instagram-button {
  background: linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045);
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.instagram-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(131, 58, 180, 0.3);
}
```

### Cards

#### Info Card
```css
.info-card {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}
```

### Header

#### Desktop Header
```css
.header {
  background-color: #1E4DB7;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.logo {
  height: 60px;
  width: auto;
}
```

### Footer

#### Footer Styles
```css
.footer {
  background-color: #1E4DB7;
  color: white;
  padding: 40px 0 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-family: Open Sans;
  font-size: 14px;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}
```

## Iconography

### Icon Sizes
- **Small**: 16px
- **Medium**: 24px
- **Large**: 32px
- **XLarge**: 48px

### Icon Style
- **Style**: Line icons (outline)
- **Weight**: 2px stroke
- **Color**: Inherit from parent text color

### Required Icons
- WhatsApp icon
- Instagram icon
- Phone icon
- Clock icon
- Location icon
- Maintenance/tool icon

## Animation & Transitions

### Standard Transitions
```css
.standard-transition {
  transition: all 0.3s ease;
}
```

### Hover Effects
```css
.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-shadow:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Loading Animation
```css
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.loading {
  animation: pulse 1.5s infinite;
}
```

## Responsive Design

### Mobile First Approach
- Base styles for mobile (320px+)
- Progressive enhancement for tablet (768px+)
- Further enhancement for desktop (1024px+)

### Responsive Typography
- Use clamp() for fluid typography between breakpoints
- Example: `font-size: clamp(1rem, 2.5vw, 1.5rem);`

### Responsive Spacing
- Reduce spacing on smaller screens
- Maintain visual hierarchy with appropriate proportions

## Accessibility

### Color Contrast
- All text meets WCAG AA contrast ratio (4.5:1)
- Large text meets WCAG AA contrast ratio (3:1)

### Focus States
```css
.focus-visible:focus {
  outline: 2px solid #1E4DB7;
  outline-offset: 2px;
}
```

### Touch Targets
- Minimum touch target size: 44px × 44px
- Adequate spacing between interactive elements

### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels where needed
- Alt text for all images
- Logical heading structure

## Performance Considerations

### Image Optimization
- WebP format with fallbacks
- Responsive images with srcset
- Lazy loading for non-critical images

### CSS Optimization
- Minified CSS
- Critical CSS inline
- Non-critical CSS loaded asynchronously

### Font Loading
- Font display: swap
- Preload critical fonts
- System font fallbacks