# React Project Starter Kit

> ### A starter kit and installation guide for front-end projects using React, Bootstrap, and more.

<br>
<br>

## Things to install before starting a project:

### 1. Download and install [Node.js](https://nodejs.org/en/download/ "Node.js dowload link")
  
- In the terminal, to check which version, or if Node.js is installed:
    ```cmd
    node -v
    ```
      
### 2. Install [Gulp](https://www.npmjs.com/package/gulp "Gulp installation guide")
  
- Install Gulp globally (Only needs to be installed *once* on your machine):
    ```cmd
    npm install gulp-cli -g
    ```
      
### 3. Install [Sass](https://sass-lang.com/install "Sass installation guide")

- Install Sass globally (Only needs to be installed *once* on your machine):
    ```cmd
    npm install -g sass
    ```

- Remember to install a Sass extentions in your text editor. With Gulp, you won't need to "watch sass" or create a live server. Gulp will do that for you.
      
### 4. Download and install [GitHub Desktop](https://desktop.github.com/ "GitHub Desktop download link")
   
- Clone or create a new repository, commit to master, and push origin!

<br>
<br>

## Creating the project:

### 1. Open the terminal and type in the following commands:

**Getting started on creating a completely new file.**

- Change the directory to wherever the new folder will be created (the `desktop` in this case) and make a directory with the name of the project (`MyApplication`):

    ```cmd
    cd desktop

    mkdir MyApplication
    ``` 
**Using a file already created.**

- From here, change the directory to the new folder you've just made (drag and drop folder into command line) and install necessary files, or type in `cmd` into the folder's directory:

    ```cmd
    cd /users/Name/Desktop/MyApplication
    ```

### 2. Install [NPM](https://www.npmjs.com/get-npm "NPM installation guide") 

- To check which version, or if NPM is installed:
    ```cmd
    npm -v
    ``` 
    
- To fresh intall globally (Only needs to be installed *once* on your machine):
    ```cmd
    npm install npm@latest -g
    ```
    
- To install NPM to this project directory: 
    ```cmd
    npm install
    ```
      
    > This will read the package.json file and collect all dependencies needed for this project, and a node_modules folder will be created. 

### 3. Install [React](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app "React install documentation link")



1. To install React globally (this only need to be installed on your machine once):
    ```cmd
    npm install -g create-react-app
    ```

2. After React has been installed on your machine, launch your app:

    ```cmd
    npx create-react-app my-app

    cd my-app

    npm start
    ```

    `my-app` should be the actual name of the the application being created; all lower case and dashes as whitespace.

    > ### Note
    > npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+. [Read more in the React documentation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app "React install documentation link").

    This will create a base application with default settings and files.

3. Install `styled-components` and `react-router-dom`
    ```cmd
    npm install styled-components react-router-dom
    ```

<br>
<br>

## Project setup

### 1. File clean-up

**Once the app has been created, there will be default files that aren't necessary.**

1. In the app's folder, locate the `src` folder and delete these files: `App.css`, `index.css`, and `logo.svg`. 

2. Now, in the code editor, you'll need to also delete any code pointing to the files you just got rid of. 

    - Open the `App.js` file.
    
    - Delete the 'imports' shown below and the code in the `<div className="App">` tag:
        ```javascript
        import logo from './logo.svg'; // Delete this code
        import './App.css'; // Delete this code

        <div className="App">
            // Delete this code
        </div>
        ```

    - Save file.

3. Open the `index.js` file.
    - Delete the 'import' shown below:
        ```javascript
        import './index.css';
        ```

    - Save file.

    - At this point, the App should be completely blank with no errors in the console.

### 2. (If using SASS) Setting up Gulp and base files

1. Open the root folder in the terminal, and iitialize your app:
    ```cmd
    npm init
    ```

2. Install the following:
    ```cmd
    npm install --save-dev gulp gulp-sass gulp-clean-css gulp-rename browser-sync
    ```

3. Locate the `src` folder.
- In this folder, create 4 new folders: `elements`, `img`, `scripts`, and `scss`.
- Also in the `src` folder, create a file named `main.scss` and paste the folowing code:

    ```scss
    @import '0-Plugins/plugins-dir';
    @import '1-Tools/tools-dir';
    @import '2-Layouts/layouts-dir';
    @import '3-Elements/elements-dir';
    ```

- In the `scss` folder, create 4 new folders: 

    1. `0-Plugins`
    - In this folder, make a file named `_plugins-dir` and `@import` any other file in the folder to it.

    2. `1-Tools`
    - In this folder, make a file named `_tools-dir` and `@import` any other file in the folder to it.
    
    3. `2-Layouts`
    - In this folder, make a file named `_layouts-dir` and `@import` any other file in the folder to it.
    
    4. `3-Elements`
    - In this folder, make a file named `_elements-dir` and `@import` any other file in the folder to it.
    
    

4. In the root folder, create a file named `gulpfile.js`, and paste in the collowing code:
    ```javascript
    // Gulp plugins
    const gulp = require('gulp');
    const sass = require('gulp-sass');
    const minify = require('gulp-clean-css');
    const rename = require('gulp-rename');
    const browserSync = require('browser-sync').create();

    // Sources
    const SCSS_SOURCE = './src/scss/**/*.scss';
    const JS_SOURCE = './src/js/**/*.js';
    const HTML_SOURCE = './public/*.html';

    const SCSS_DEST = './public/css';
    const ROOT = './public'

    // Compile SCSS into CSS
    function style() {
        // 1. Find scss file
        return gulp.src(SCSS_SOURCE) 
        // 2. Pass file through a SCSS compiler
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        // 3. Save compiled CSS to destination
        .pipe(gulp.dest(SCSS_DEST))
        // 4. Stream changes to all browsers
        .pipe(browserSync.stream());
    }

    function watch() {
        browserSync.init({
            server: {
                baseDir: ROOT
            }
        });
        gulp.watch(SCSS_SOURCE, style);
        gulp.watch(HTML_SOURCE).on('change', browserSync.reload);
        gulp.watch(JS_SOURCE).on('change', browserSync.reload);
    }

    exports.style = style;
    exports.watch = watch;
    
    ```

### 4. Install or download [Bootstrap](https://getbootstrap.com/ "Bootstrap CDN and download link")

**Install only a minified version off CSS or JS by pasting these tags into the `index.html`**

- BootstrapCDN CSS
    ```html
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    ```

- BootstrapCDN JavaScript
    ```html
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    ```

**Download Bootstrap**
- Use this [link](https://getbootstrap.com/docs/4.3/getting-started/download/ "Bootsrtap download link"); remember to include a `link` tag in your `index.html`.

### 5. Create a .gitignore file!
  
- Visit [GitIgnore.io](https://www.gitignore.io/ "GitIgnore.io link") type in your machine's OS (`Mac`, `Windows`, or `Linux`), `Node.js`, `Gulp`, and `Sass`.

- Copy all text on the page, go to text editor and create a new file, paste text into the new file, and save the file as `.gitignore` only.

- This makes it so there are fewer changes being commited and uploaded to GitHub.

- Place this file into your app's main directory

### Now you're all set! Happy coding!