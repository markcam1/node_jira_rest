#!/usr/bin/env node
'use strict';

const Helpdesk = require("./singleJira");
const inquirer = require("inquirer");
const request = require("request");
const axios = require('axios');
const chalk = require('chalk');
const file = require('file-system');
const fs = require('fs');
const figlet = require('figlet');

var printError = function(error, explicit) {
    console.log(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}

start();

function start() {
  
  inquirer
    .prompt({
      name: "manager",
      type: "rawlist",
      message: "Please choose an option:",
      choices: ["singleSearch", "tbd", "Exit"]
    })
    .then(function (answer) {
      if (answer.manager == "singleSearch") {
        jiraSingle();
      }
      if (answer.manager == "tbd") {
        tbd();
      }
      if (answer.manager == "Exit") {
        process.exit();
      }
    });
}

const jiraSingle = () => {
  try{
    var startHDQuiz = new Helpdesk();
    startHDQuiz.jiraID();
    
  } catch(e){
    if (e instanceof TypeError){
      printError(e, true);
    } else{
      printError(e, false)
    }
  } 
}

const tbd = () => {
  try{
    console.log(chalk.blue("Nothing here - work in progress"));
    
  } catch(e){
    if (e instanceof TypeError){
      printError(e, true);
    } else{
      printError(e, false)
    }
  } 
}