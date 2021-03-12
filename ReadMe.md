# SENTIMENT ANALYSIS APP

## This is Udacity project #4

### The functionality is to have the user enter a url, have the sentiment of the page analyzed by Meaning Cloud API, and to update the UI with the analysis

### The requirements are as follows

- create a front end UI form where users can enter a url to be analyzed

- check to make sure the url entered is a valid url

- provide error messages in case url was entered incorrectly

- set up express server in order to make fetch requests to Meaning Cloud to analyze sentiment of url site

- display sentiment score on UI of page

- setup webpack dev server and production build configurations and create npm run scripts to run those environments

- use appropriate loaders and plugins in webpack configurations

- use SASS styling

- include config.env file to hide api keys and other sensitive information

- perform testing using jest

- setup service worker using workbox

[The following code snippet was copied and pasted from stackoverflow to check for valid urls](https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)

```javascript
export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}
```

[Go here to learn more about webpack!!](https://webpack.js.org/)

### Project hosted on [https://eval-news-article-nlp-udacity.herokuapp.com/](https://eval-news-article-nlp-udacity.herokuapp.com/)
- in order to make calls to the backend, I deleted the prefix of http://localhost:8080 before deploying to heroku
