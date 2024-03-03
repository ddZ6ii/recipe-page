# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Getting started](#getting-started)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Deployed with](#deployed-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshots

- Phone:
  ![](./screenshots/phone.png)

- Laptop/Desktop:
  ![](./screenshots/desktop.png)

### Links

- Solution URL: [frontend-mentor-solution](https://www.frontendmentor.io/solutions/responsive-recipe-page-with-semantic-html-_F0BGyruOD)
- Live Site URL: [recipe-page](https://recipe-page-nine-beta.vercel.app/)

## Getting started

Clone the project and run the following command:

```console
yarn install
```

This will initialize the project by installing all the required dependencies.

## My process

### Built with

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Parcel bundler
- Mobile-first workflow

### Deployed with

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### What I learned

Image optimization 🚀

The following piece of code provides a pool of image candidates (`srcset` attribute) for the browser to automatically pick from, based on screen characteristics (width, DPR, orientation and zoom level) and provided hints (`sizes` attribute):

```html
<img
  sizes="(min-width: 640px) 640px, 100vw"
  srcset="
    assets/images/omelette-recipe-320.jpg   320w,
    assets/images/omelette-recipe-640.jpg   640w,
    assets/images/omelette-recipe-960.jpg   960w,
    assets/images/omelette-recipe-1280.jpg 1280w
  "
  src="assets/images/omelette-recipe-1280.jpg"
  alt="omelette dish"
  width="1280"
  height="585"
  class="sm:rounded-xl"
/>
```

The following piece of code provides a pool of image candidates with modern alternative format (`.webp`) for the browser to use in priority, or to fallback to the `.jpg` format if not supported:

```html
<picture>
  <source
    type="image/webp"
    sizes="(min-width: 640px) 640px, 100vw"
    srcset="
      assets/images/omelette-recipe-320.webp   320w,
      assets/images/omelette-recipe-640.webp   640w,
      assets/images/omelette-recipe-960.webp   960w,
      assets/images/omelette-recipe-1280.webp 1280w
    "
  />
  <img
    sizes="..."
    srcset="..."
    src="assets/images/omelette-recipe-1280.jpg"
    alt="omelette dish"
    width="1280"
    height="585"
    class="sm:rounded-xl"
  />
</picture>
```

### Useful resources

- [Image performace](https://web.dev/learn/performance/image-performance) - Thorough article about image optimization
- [How to speed up page load with responsive images](https://blog.webdevsimplified.com/2023-05/responsive-images) - Great tutorial by Web Dev Simplified on how to implement truly responsive images
- [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - The official MDN documentation with great example

## Author

- Github - [@ddZ6ii](https://github.com/ddZ6ii)
- Frontend Mentor - [@ddZ6ii](https://www.frontendmentor.io/profile/ddZ6ii)
- Linkedin - [@denis-dezest](https://www.linkedin.com/in/denis-dezest/)
