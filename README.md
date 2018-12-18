# The Jira Grabber
Jira RESTful api using Node.js. The purpose is for you to download jira data from your jira server. 
This command-line application should be simple enough for anyone to use, including project/program managers.
---
![TBD](https://github.com/markcam1/markcam1.github.io/blob/master/assets/images/vscode.png)
---
## Setup
### Prerequisites
*	You must have [Node.js](https://nodejs.org/en/) installed. It's easy.
### Installing
1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repo to your desktop. Run this command in the directory where you want to code to live.
`git clone https://github.com/markcam1/node_jira_rest.git`
2. On your machine, install [Node.js](https://nodejs.org/en/) if you do not have it installed.
3. Run install to download the dependencies
`npm install`

### Initial configuration
* You will need to create an _enviroment_ file to hold you configuration details like your username and password.
  * In the root folder (where all the files are located) create a file with the exact name = **.env**
  * In this file you will add the following environment-specific [variables](https://www.npmjs.com/package/dotenv#usage)
  * JIRA_HOST: is the server where your jira server is hosted; yourdomain is your domain :)
  * JIRA_USER & JIRA_PW: are your username and password. 
  * Save file when done
```
JIRA_HOST=https://jira.yourdomain.com/rest/api/2/issue/
JIRA_USER=your-username
JIRA_PASS=your-password
```

## Instructions
Let's start and run the Jira Grabber

Open a command-line interface in the root directory
1. Start the application
` node index.js`

Select a function
1. singleSearch
2. tbd
3. exit

## singleSearch
Will search your jira server for one jira and return the results
This will print a text file in the root directory name = **jiraSingleSearch.txt**

## tbd
_to be determined_
This is a placeholder function that is a work in progress

## exit
quits the app
---
## Built With
* [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. 
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file
* [inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [file-system](https://www.npmjs.com/package/file-system) -This module makes file operations simple 

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to me.

## Versioning
Use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/markcam1/liri-node-app/tags). 

## Authors
* **Mark Cameron** - *Initial work* - [Mark C](https://markcam1.github.io/)

See also the list of [contributors](https://github.com/markcam1/liri-node-app/graphs/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* UC Berkeley Extension
* _“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”_ **― Albert Einstein** 


