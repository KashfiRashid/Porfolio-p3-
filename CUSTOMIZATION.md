# Portfolio Customization Guide

This document provides instructions for personalizing and extending your UX Designer portfolio website.

## Table of Contents
1. [Changing Colors and Theme](#changing-colors-and-theme)
2. [Updating Content](#updating-content)
3. [Adding Projects](#adding-projects)
4. [Customizing Animations](#customizing-animations)
5. [Replacing Placeholder Images](#replacing-placeholder-images)
6. [Form Functionality](#form-functionality)
7. [Adding Analytics](#adding-analytics)
8. [Performance Optimization](#performance-optimization)

## Changing Colors and Theme

The portfolio uses CSS variables for easy theming. To change the color scheme:

1. Open `css/main.css`
2. Find the `:root` selector at the top
3. Modify the color variables:
   - `--color-primary`: Main brand color
   - `--color-primary-dark`: Darker version of primary color
   - `--color-secondary`: Secondary color for contrasting elements
   - `--color-accent`: Accent color for highlights
   - `--color-text`: Main text color
   - `--color-text-light`: Lighter text for secondary content
   - `--color-bg`: Background color
   - `--color-bg-alt`: Alternative background color
   - `--color-border`: Border color
   - `--color-highlight`: Highlight color

You can also update the gradient variables:
- `--gradient-primary`: Primary gradient
- `--gradient-secondary`: Secondary gradient

## Updating Content

### Personal Information

1. Update the `index.html` file with your personal information:
   - Change the title and meta description in the `<head>` section
   - Update the logo initials in the header
   - Modify the hero headline and tagline
   - Replace the "About Me" content
   - Update contact information

### Skills Section

The skills section is dynamically generated in `main.js`. To customize:

1. Find the `skillsHTML` variable in the JavaScript file
2. Modify, add or remove skill cards to reflect your expertise
3. You can change the emoji icons, skill names, and descriptions

## Adding Projects

To add new project cards:

1. In `index.html`, find the `.project-cards` section
2. Copy an existing `.project-card` article element
3. Update:
   - Project image and alt text
   - Project title
   - Project description
   - Link (if applicable)

## Customizing Animations

The portfolio includes several animations:

1. **Text Scramble Effect**: The hero heading has a text scramble effect. To modify:
   - Find the `TextScramble` class in `main.js`
   - Customize the characters used with the `chars` property
   - Adjust the timing by modifying the delay in the setTimeout function

2. **Scroll Animations**: Elements animate as they enter the viewport:
   - Add the `.process-stage`, `.project-card`, `.about-text`, `.skill-card`, or `.contact-info` class to any element you want to animate on scroll
   - Customize animation timing in the CSS under the respective element selectors

3. **Custom Cursor**: The custom cursor appears only on desktop. To customize:
   - Modify the `cursorFollower` and `cursorDot` styles in the CSS
   - Adjust the interaction behavior in the `custom cursor` section of `main.js`

## Replacing Placeholder Images

The portfolio uses placeholder images. To replace them:

1. Create an `images` directory if it doesn't exist already
2. Add your images to this directory
3. Update the `src` attributes in `index.html` to point to your image files
4. Maintain the specified dimensions or update both the image and attribute values
5. Consider using responsive images with `srcset` for better performance

## Form Functionality

The contact form currently has client-side validation but doesn't submit data. To enable form submission:

1. Choose a form backend service (like Formspree, Netlify Forms, or your own server)
2. Update the `<form>` element's `action` attribute with your form endpoint
3. Modify the form submission handler in `main.js` to suit your needs

## Adding Analytics

To track visitor interactions:

1. Sign up for an analytics service (like Google Analytics)
2. Add their tracking script to the `<head>` of your `index.html` file
3. Consider using a privacy-friendly analytics option like Plausible or Fathom

## Performance Optimization

The portfolio is already optimized with:
- Lazy loading for images
- Minified CSS
- Efficient animations

For further optimization:
1. Compress your images using tools like ImageOptim, TinyPNG, or Squoosh
2. Consider using WebP format for images with a JPEG/PNG fallback
3. Minify JavaScript
4. Consider using a CDN for faster content delivery 