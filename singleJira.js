'use strict';

require('dotenv').config()

const chalk = require('chalk');
const inquirer = require("inquirer");
const axios = require('axios');
const file = require('file-system');
const fs = require('fs');

var GetHD = function() {

    this.jiraID = () => {
        inquirer
            .prompt({
                name: "idkey",
                type: "input",
                message: "Enter a Jira Key:",
            })
            .then(function (answer) {
                console.log(answer.idkey);
                let newKey = answer.idkey;
                getJiraRequest(newKey);
            });
    };

    /*WORKS
    TODO: baseURL -> move to the env file?
    */
    const getJiraRequest = async function jenk_diff(jiraKey) {
        let baseURL = process.env.JIRA_HOST;
        let issueURL = 'issue/';
        //baseURL.concat(issueURL);
        baseURL += issueURL;
        console.log("baseURL")
        console.log(baseURL)

        let searchURL = jiraKey;
        let queryURL = baseURL + searchURL;
        try {
            const response = await axios
                .get(queryURL, {
                    auth: {
                        username: process.env.JIRA_USER,
                        password: process.env.JIRA_PASS
                    }
                })
            console.log(response.data);
            const singleJiraResponse = JSON.stringify(response.data);
            try {
                fs.writeFile('jiraSingleSearch.txt', singleJiraResponse, 'utf8', function (err) {
                    console.log('\x1b[36m%s\x1b[0m', '\nFILE SAVED!');
                });
            }
            catch (err) {
                console.error(err)
            }

        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = GetHD;



