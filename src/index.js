import './styles/style.scss'

import { validURL} from './js/validUrl'
import { rankScore, analyzePage, fetchInfo} from './js/formHandler'

const btnSubmit = document.querySelector('.btn-submit')

const errorMsg = document.querySelector('.error')

const btnReset = document.querySelector('.reset')

// if reset button is clicked, clear values on page
btnReset.addEventListener('click', () => {
  document.querySelector('#url-entered').value = '';
  const uiDataEls = document.querySelectorAll('.ui-data')
  uiDataEls.forEach(uiDataEl => {
    uiDataEl.classList.add('hide')
  })
  errorMsg.classList.add('hide')
})

btnSubmit.addEventListener('click', () => Client.analyzePage())

export {
  validURL,
  rankScore,
  analyzePage,
  fetchInfo,
}