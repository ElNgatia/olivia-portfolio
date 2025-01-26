# Olivia Portfolio

[![🚀 Deploy to cPanel](https://github.com/ElNgatia/olivia-portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/ElNgatia/olivia-portfolio/actions/workflows/main.yml)

A professional portfolio built with React, featuring automated deployment via GitHub Actions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) (v6+)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository:
     git clone https://github.com/ElNgatia/olivia-portfolio.git
     cd olivia-portfolio
   
### 2. Install dependencies:
    
    npm install
    
### 3. Scripts
 #### Launch development server: 
    npm start
    
 #### Run test suite:
     npm test

#### Create production build:
 
    npm run build


### 4. Deployment
Production build is automatically deployed to cPanel via GitHub Actions on push to main. The workflow:

 - Installs dependencies

  - Creates optimized production build

- Deploys to cPanel hosting

## Learning Resources
To deepen your understanding of React and deployment automation, check out these resources:
- [React Docs](https://react.dev/learn)

- [Create React App](https://create-react-app.dev/docs/getting-started/)

- [GitHub Actions](https://docs.github.com/en/actions)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
MIT Licensed - see LICENSE file for details.
