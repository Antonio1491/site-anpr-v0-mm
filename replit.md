# 4.ª Jornada - ANPR México Event Landing Page

## Overview
This is a Next.js landing page for the 4th ANPR México Training Journey event in Aguascalientes. Originally built with v0.dev, this project showcases event details, speakers, and registration information for a parks and public spaces management conference.

## Event Details
- **Title**: 4.ª Jornada de Capacitación ANPR México - Aguascalientes
- **Date**: November 26, 2025
- **Time**: 9:00 a.m. – 3:00 p.m. (6 hours total)
- **Location**: Complejo Turístico Tres Centurias, Aguascalientes

## Recent Changes
- **October 16, 2025**: Updated "Promotores del Mes de los Parques" section on /mes-de-los-parques page
  - Added 2 new promoter logos: ProBosque Chapultepec and San Pedro Parques
  - Total promoters now: 5 (Zapopan, Tlalticpac, Parque Cancún, ProBosque Chapultepec, San Pedro Parques)
  - Single-row horizontal layout: flex-nowrap with 18px gap between logos
  - Uniform sizing: each logo container 18% width, 90px height with 60px max-height for images
  - Responsive: overflow-x-auto for horizontal scroll on small screens
  - All logos reduced and visually uniform with flex-shrink-0 to prevent compression
  - Maintained hover effects, animations, and white card design
- **October 15, 2025**: Added Tres Centurias logo to "Alianzas que lo Hacen Posible" section
  - Added new subsection "Con el apoyo de:" below "Organiza:" and "Presenta:"
  - Included Fideicomiso Complejo Tres Centurias logo
  - Maintained consistent typography (Montserrat Bold) and visual design
  - Added hover effects and animations with 400ms delay
  - Logo links to https://www.facebook.com/FideicomisoCTC
- **October 14, 2025**: Updated header section colors on /mes-de-los-parques page
  - Changed "Edición #8 | Octubre 2025" background to #012787 (dark blue) with black border
  - Changed "Un movimiento desde todos los rincones de Latinoamérica" background to #00dfbf (turquoise) with black border
  - Fixed transparency issue by using explicit color codes instead of CSS class
- **October 13, 2025**: Updated "Conoce a los Expertos" section
  - Reorganized layout: 3 experts on top row, 2 new experts on bottom row (centered)
  - Added 2 new experts: Dr. Carlos Hernández and Israel Ortega González
  - Updated expert images with new professional photos
  - Section now displays 5 experts total: Isabel Velázquez, Manuel Plascencia, Vitoria Martín (top), Dr. Carlos Hernández, Israel Ortega González (bottom)
- **October 7, 2025**: Updated page title (meta title) from "3° Jornada de Capacitación ANPR México - Chihuahua" to "Jornadas de Capacitación ANPR México"
- **October 6, 2025**: Updated registration buttons to link to 4th Journey event
  - "Regístrate Gratis Aquí" (hero section) now links to cuarta-jornada
  - "Inscríbete Ahora" (Forma Parte del Cambio section) now links to cuarta-jornada
  - All registration buttons now point to: https://anpr.org.mx/event/cuarta-jornada-de-capacitacion-anpr-mexico/
- **October 6, 2025**: Updated "Promotores del Mes de los Parques" section on /mes-de-los-parques page
  - Added 3 promoter logos in white card containers with soft borders
  - Implemented flexible grid layout (1 column mobile, 2 tablet, 3 desktop)
  - Cards feature hover effects (scale and shadow transitions)
  - Structured for easy addition of more logos in the future
  - Added logos: Zapopan, Tlalticpac (Regeneración Urbana), Parque Cancún
- **October 6, 2025**: Updated event schedule in "Programa del Evento" section
  - Removed "Séptima Conferencia" from schedule
  - Removed "Cóctel de Clausura" from schedule
  - Moved "Recorrido por Complejo Turístico Tres Centurias" to 15:40 (from 16:25)
  - Updated total conference count from 7 to 6 conferences
  - Updated total duration to 6 hours of specialized content
- **October 6, 2025**: Updated all titles to use Montserrat Bold font
  - Applied font-['Montserrat',sans-serif] to all h1, h2, h3, and h4 elements
  - Montserrat 700 (Bold) weight loaded via Google Fonts
  - Consistent typography across all section titles and headings
- **October 6, 2025**: Added decorative elements throughout the page
  - Created decoration assets folder with 6 optimized images (hojas and líneas)
  - Applied floating leaf animations in hero section
  - Added decorative elements to sections with blue background (#012787 and #00338d)
  - Decorated sections: Hero, Detalles del Evento, Conoce a los Expertos, Registro Final
  - Elements positioned strategically with varied rotations and opacity to avoid repetition
  - Added CSS animation for floating effect (6s ease-in-out infinite)
  - Adjusted hero section decorations: reduced opacity (20-30%) and repositioned to edges to avoid text interference
- **October 6, 2025**: Simplified "Alianzas que lo Hacen Posible" section
  - Removed "Con la colaboración de:" subsection
  - Removed collaborator logos: Parque Tres Presas, Rainbird, Foro Urbano
  - Section now only shows main alliance partners: Parques de México and Grupo BUGY
- **October 6, 2025**: Updated "Conoce a los Expertos" section
  - Changed background color to #012787 (dark blue)
  - Changed title color to white for better contrast
  - Reduced experts from 8 to 3: Isabel Velázquez, Manuel Plascencia, Vitoria Martín
  - Removed: Lorena Barrera, Tania Jaime, Verónica Herrera, Mario Lugo, Rafael Aguilar
- **October 6, 2025**: Updated and optimized ANPR logo
  - Replaced anpr-logo.png with new 4ª Jornada design for Aguascalientes
  - Optimized image from 77KB to 19KB (75% reduction) using pngquant and optipng
- **October 6, 2025**: Reorganized section layout and updated color scheme
  - Separated sections for better visual hierarchy
  - Updated section order: "¡La ANPR México llegará a Aguascalientes!" → "¿Qué Puedes Esperar?" → "Conoce Más Sobre Nuestras Jornadas"
  - Changed all #e2eced backgrounds to #f3f8ff (light blue) for consistency
  - Applied alternating color scheme: white → #f3f8ff → white pattern
- **October 3, 2025**: Updated event information for 4th Journey in Aguascalientes
  - Changed all references from Chihuahua to Aguascalientes
  - Updated event date to November 26, 2025
  - Updated time to 9:00 a.m. – 3:00 p.m.
  - Updated location to Complejo Turístico Tres Centurias
  - Replaced ANPR logo with new optimized version
- **October 3, 2025**: Fixed blue background color issue by adding custom colors to Tailwind config
- **September 15, 2025**: Project imported from GitHub and configured for Replit environment
- Configured Next.js for Replit with proper host allowance settings
- Set up development workflow on port 5000

## Project Architecture
- **Framework**: Next.js 15.2.4 with React 19
- **Styling**: Tailwind CSS with custom theme and animations
- **UI Components**: Radix UI components with custom styling
- **Build System**: Next.js with TypeScript support
- **Package Manager**: npm (using package.json and package-lock.json)

## Key Features
- Responsive landing page design
- Interactive animations and scroll effects
- YouTube video integration
- Expert speaker profiles
- Event registration integration
- Mobile-optimized layout

## Development Setup
- Development server runs on port 5000 (configured for Replit)
- Uses 0.0.0.0 as host for proper Replit preview functionality
- Hot reload enabled for development

## Dependencies
- Next.js, React, TypeScript
- Tailwind CSS for styling
- Radix UI for component library
- Lucide React for icons
- Various form and animation libraries

## User Preferences

- Focus on maintaining existing v0.dev design patterns
- Preserve Spanish language content and branding
- Keep responsive design principles

##### fix background azul
