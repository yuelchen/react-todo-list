# react-todo-list
An introductory project for trying out react by creating a simple to-do list application. 

💛 Hosted on Github Pages: https://yuelchen.github.io/react-todo-list/
## Preview:
![ToDo List Preview](https://github.com/yuelchen/react-todo-list/blob/main/public/preview.png)

---
## Command Line Reference
#### Create the project using npm.  
```: 
npm create-react-app react-todo-list
```

#### Change into project directory.  
```:
cd react-todo-list/
```

#### Start the application.
```:
npm start
```

#### Build the application. 
```:
npm run build
```

#### Deploying the application to Github pages. 
1. Under the project directory, install gh-pages module (first-time-only). 
```:
npm install gh-pages --save-dev
```

2. Modify package.json by adding the GitHub pages URL as homepage (first-time-only). 
```json:
{
  "homepage": "https://username.github.io/repository-name/",
  "name": "repository-name",
  "version": "0.0.1",
  ...
}
```

3. Under the scripts section, add the predeploy and deploy fields (first-time-only).
```json:
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    ...
  },
```

4. Deploy the application. 
```:
npm run deploy
```

---
🚩 Disclaimer:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
