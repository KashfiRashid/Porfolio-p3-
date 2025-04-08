# UX Designer Portfolio

A professional portfolio website showcasing UX design skills, process, and projects.

## Project Overview

This responsive portfolio website was created as part of the IAT 339 course (Web Design and Development). It highlights my experience as a UX Designer, focusing on a mobile app project from IAT 334.

The portfolio includes:
- A professional biography
- An overview of UX design skills and interests
- A detailed process analysis of a UX design project
- Contact information and form

## Technologies Used

- HTML5
- CSS3 (with Flexbox and CSS Grid for responsive layouts)
- JavaScript (vanilla JS for interactivity)
- Responsive design principles
- Accessibility features (ARIA, keyboard navigation)
- Performance optimization techniques (lazy loading)

## Features

- **Responsive Design**: Works seamlessly across devices and screen sizes
- **Semantic HTML**: Using appropriate HTML5 elements for better accessibility and SEO
- **Modern CSS**: Custom CSS using CSS variables, flexbox, and grid
- **Interactive Elements**: Smooth scrolling, form validation, and mobile-friendly navigation
- **Accessibility**: ARIA attributes, keyboard navigation, and focus management
- **Performance**: Optimized images, lazy loading, and minimal dependencies

## Project Structure

```
portfolio/
├── index.html
├── css/
│   ├── normalize.css
│   └── main.css
├── js/
│   └── main.js
└── images/
    ├── profile.jpg
    ├── project-thumb.jpg
    ├── research.jpg
    ├── ideation.jpg
    ├── wireframes.jpg
    ├── testing.jpg
    └── final-design.jpg
```

## Development Process

This portfolio was developed with a mobile-first approach, ensuring that it works well on all devices. The design process included:

1. **Content Planning**: Defining the ethos, bio, and project content
2. **Wireframing**: Creating responsive layouts for different screen sizes
3. **Development**: Implementing the design with semantic HTML, CSS, and JavaScript
4. **Testing**: Ensuring compatibility across browsers and devices
5. **Optimization**: Improving performance and accessibility

## Running the Project

Simply open the `index.html` file in a web browser to view the portfolio. No server or special setup is required.

## Credits and Attribution

- Fonts: Google Fonts (Inter and Playfair Display)
- Normalize.css: Nicolas Gallagher and Jonathan Neal
- Images: Original project work (UX design process)

## License

This project was created for educational purposes as part of IAT 339 coursework. 

<label for="menu-checkbox" class="menu-toggle">
    <span class="sr-only">Toggle navigation menu</span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</label> 

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
} 