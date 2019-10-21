# Formik Fieldset Validation

A slack-like implementation of a verification code entry using Formik & React.

It checks to see if any fields in the fieldset have an error, highlights each field with an error, and shows a single error message as long as one of those fields has an error.

Other Features
* Only allows numbers to be typed
* Auto-focus change after a number is typed
* Consolidates the field values into a single string after submission
* Reset-able
* A possilbe mildly condescending success message

## Getting started

`$ npm i`

**Dev**

`$ npm start`

**Prod**

`$ npm build`

`$ git commit -am "Updates"`

`$ git push heroku master`

## Git

Remotes are set up for github (the public repo) and heroku (hosting). [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).