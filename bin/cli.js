#!/usr/bin/env node
/* eslint-disable no-console */

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }

  return true;
};

const repoName = process.argv[2];

if (!repoName) {
  console.error('Please provide a name for the repository');
  process.exit(-1);
}

const gitCheckoutCommand = `git clone --depth 1 https://github.com/nraufu/create-react-project ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the reposistory with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Congratulations! you are ready. Follow the following commands to start');

console.log(`cd ${repoName} && npm start`);
