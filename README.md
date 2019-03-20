# TwilioPhoneCallApp v1.0.0

This is a Web Application for making outgoing phone calls using Node.js framework and Twilio helper library from NPM based on [Twilio Docs](https://www.twilio.com/docs/voice/quickstart/node) and [Twilio library](https://www.npmjs.com/package/twilio)

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## System dependencies

This application runs on Node.js v8.12.0.

For reviewing dependencies, please check [Package JSON](package.json)

## Configuration

This application runs on development environment from a localhost server using the command: node make_call.js

This application has Dotenv module installed for managing environment configuration variables. Please check [Dotenv documentation](https://www.npmjs.com/package/dotenv)

For environment configuration instructions, please check this documentation on [Twilio's Blog](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)

## Deployment instructions

Before running this project, check if you are on project root directory and run on your console or CLI next command for installing dependencies:
npm install

After that, check if you are on project root directory and run on your console or CLI next command:
node make_call.js

Check on your console or CLI if your localhost server is running.

## Next improvements and changes

* Receive and respond to inbound voice calls with Node.js and Express
* Another integrations with Twilio API