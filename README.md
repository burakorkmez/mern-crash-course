<h1 align="center">MERN Crash Course 🚀</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

[Video Tutorial on Youtube](https://youtu.be/Dukz-3mS3Us)

About This Course:

-   ⚛️ Tech Stack: React.js, Node.js, Express.js, MongoDB, Chakra UI
-   🔥 Build an API
-   📱 Responsive UI With React.js and ChakraUI
-   🐞 Error Handling
-   🌐 Deployment
-   🚀 And Many More Cool Features
-   ✅ This is a lot of work. Support my work by subscribing to the [Channel](https://www.youtube.com/@asaprogrammer_)

### Setup .env file

```shell
MONGO_URI=your_mongo_uri
PORT=5000
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```
### Windows Setup for script

- To fix the issue with the NODE_ENV command on Windows, follow these steps:
1. **Install cross-env: Run the following command to install the cross-env package:**
```
npm install cross-env --save-dev
```
2. **Update the start and dev scripts in package.json:**
```
"scripts": {
    "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "cross-env NODE_ENV=production node backend/server.js"
},
```

### I'll see you in the next one! 🚀
