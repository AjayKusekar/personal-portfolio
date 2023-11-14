# personal-portfolio
made a portfolio usinh javascript-html-css

Creating a portfolio using HTML, CSS, and JavaScript and uploading it to GitHub involves several steps. Below is a step-by-step guide along with a description for each step:

### Step 1: Set Up Your Development Environment

Before you start coding, make sure you have a code editor installed on your computer. Popular choices include Visual Studio Code, Atom, or Sublime Text.

### Step 2: Plan Your Portfolio

Decide on the structure and content of your portfolio. Consider including sections like:

- **Home**: Introduction and a brief overview.
- **About Me**: Personal information, skills, and interests.
- **Projects**: Showcase your work with descriptions and links.
- **Resume**: A downloadable version of your resume.
- **Contact**: How people can reach you.

### Step 3: Create HTML Structure

Write the HTML code to structure your portfolio. Use semantic HTML tags to improve accessibility and SEO.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Your Name - Portfolio</title>
</head>
<body>
    <!-- Your content goes here -->
    <script src="script.js"></script>
</body>
</html>
```

### Step 4: Style with CSS

Create a separate CSS file to style your portfolio.

```css
/* styles.css */

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1em;
}

section {
    max-width: 800px;
    margin: 2em auto;
    padding: 1em;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Add more styles as needed for your specific content */

```

### Step 5: Add Interactivity with JavaScript

Enhance your portfolio with JavaScript for interactivity. You might use it for form validation, image sliders, or other dynamic features.

```javascript
// script.js

// Your JavaScript code goes here
// Example: Add a simple console log
console.log("Portfolio loaded!");

```

### Step 6: Test Locally

Open your HTML file in a web browser to make sure everything looks and works as expected.

### Step 7: Create a GitHub Repository

Create a new repository on GitHub to store your portfolio project.

### Step 8: Upload to GitHub

Follow the instructions on GitHub to add a remote repository to your local project and push your code.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repository-url>
git push -u origin master
```

### Step 9: Set Up GitHub Pages

In your GitHub repository settings, enable GitHub Pages to host your portfolio online.

### Step 10: Share Your Portfolio

Once GitHub Pages is set up, share the link to your portfolio with friends, potential employers, or the wider community.

Congratulations! You've now created a portfolio using HTML, CSS, and JavaScript and uploaded it to GitHub.
