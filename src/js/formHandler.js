
// rank sentiment based on score
export const rankScore = (score) => {
    switch(score) {
      case 'P+':
        return 'STRONG POSITIVE'
        break;
      case 'P':
        return 'POSITIVE'
        break;
      case 'NEU':
        return 'NEUTRAL'
        break;
      case 'N':
        return 'NEGATIVE'
        break;
      case 'N+':
        return 'STRONG NEGATIVE'
        break;
      case 'NONE':
        return 'WITHOUT SENTIMENT'
        break;
      default:
        return 'UNABLE TO RANK SCORE'
        break;
    }
}

// make post request to back end express server
// once data has been recieved, update UI
// hide/show appropriate sections
export const fetchInfo = async (url='', data={}) => {
  const resp = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })

  try {
    const {agreement, confidence, irony, score_tag, subjectivity, status} = await resp.json()
    console.log(agreement, confidence, irony, score_tag, subjectivity, status)
    const {code, msg} = status

    const errorMsg = document.querySelector('.error')

    if(code == 0 && msg == "OK") {
      const uiDataEls = document.querySelectorAll('.ui-data')
      uiDataEls.forEach(uiDataEl => {
        uiDataEl.classList.remove('hide')
      })

      if(!errorMsg.classList.contains('hide')) {
        errorMsg.classList.add('hide')
      }
      
      let newScore_tag = Client.rankScore(score_tag)

      document.querySelector('.agreement').innerHTML = `AGREEABILITY: ${agreement}`
      document.querySelector('.confidence').innerHTML = `CONFIDENCE: ${confidence}%`
      document.querySelector('.irony').innerHTML = `IRONY: ${irony}`
      document.querySelector('.score_tag').innerHTML = `POLARITY: ${newScore_tag}`
      document.querySelector('.subjectivity').innerHTML = `SUBJECTIVITY: ${subjectivity}`
    } else {
      errorMsg.classList.remove('hide')
      errorMsg.innerHTML = 
      '<i class="fas fa-exclamation-triangle"></i>unable to analyze sentiment something went wrong :('
    }
    
  }catch(error){
    console.log(`error:${error}`);
  }
}
  
// after submit button has been clicked, validate url entered and make post request to back end express server 
export const analyzePage = () => {
  const urlUser = document.querySelector('#url-entered').value
  if(Client.validURL(urlUser)) {
    Client.fetchInfo('http://localhost:8080/getSentiment', {urlUser})
  }else {
    const errorMsg = document.querySelector('.error')
    errorMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i>  invalid url please try again'
    errorMsg.classList.remove('hide')
  }
}