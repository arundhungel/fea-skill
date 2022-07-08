# FEA Skill Test
## _Task for Frontend UI position_

Author: Arun Dhungel

## Demo

The project is hosted in vercel `[https://fea-skill.vercel.app/]`

## Overview

> The goal is to create structural and sementic HTML using morden CSS and JS.
> Project includes a src/ folder used during the development, with single index.html file and multiple CSS files broken down based on utility and sections of the landing page.
> Provided font was converted to web font inorder to implement the typography.
> Bootstrap 5 was used for the front-end toolkit. Customization was done such that only necessary components are included and also to match the design system of the project prehand.

## Tech

FEA Skill test uses a number of open source projects and scripting langauge to work properly:

- [SCSS] - CSS preprocessor
- [Bootstrap 5.2] - As front-end toolkit
- [Webpack 5] - As Module Bundler
- [jquery] - duh
- [GSAP] - Animation and page tranisition
- [Node.js]

## Installation

FEA Skill Test requires [Node.js](https://nodejs.org/) v12+ to run.

Clone the project to required location.
Install the dependencies and devDependencies and start the server.

```sh
cd fea-skill
npm install
npm run dev
```

For production environments...

```sh
npm install
npm run build
```

## Development

Project will automatically run on port 8000.

Folder Structure

    ├── dist                    # Folder created after build
    ├── src                     # Source files  used for development
        |--- fonts                  # Webfonts used in the project
        |--- images                 # Images including logo and svg sprite
        |--- js                     # JS files
        |--- scss                   # SCSS files
            |-- components              # SCSS files broken down into sections of the landing page
            |-- global                  # SCSS files made for reusalbe components and global declaration, overwrites for bootstrap
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── package.lock.json       
    ├── package.json
    ├── README.md
    ├── webpack.config.js       # Webpack config file for creating bundle

## Production
A /dist folder is created for production after "npm run build".
This folder contains
```sh
    |--- images folder
    |--- bundle.css
    |--- bundle.js
    |--- index.html
```

### What is done using webpack

- `js and css` are marked with [contenthash] inorder to assist broswer caching
- `clean-webpack-plugin` is used to clean the /dist folder first after every build pattern is run.
- `purgecss-webpack-plugin` is used to purge the css that are not in used for the production
 
**Note**

- Svg sprite may be blocked by broswer while directly running dist/index.html. This issue doesn't exist in development and while on a server.


[//]: # 
   [SCSS]: <https://sass-lang.com/>
   [Webpack 5]: <https://webpack.js.org/>
   [GSAP]: <https://greensock.com/gsap/>
   [node.js]: <http://nodejs.org>
   [Bootstrap 5.2]: <https://getbootstrap.com/>
   [jQuery]: <http://jquery.com>
