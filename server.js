const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()
const dotenv = require('dotenv')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

dotenv.config({path: './config.env'})

const MC_URL = 'https://api.meaningcloud.com/sentiment-2.1';

app.use(express.static('dist'))

app.get('/', (req,res) => {
    res.sendFile('dist/index.html')
})

const PORT = process.env.PORT || 8080

server = app.listen(PORT, console.log(`app listening on port ${PORT}`))

// after recieving data from front end, 
// make fetch request to Meaning Cloud and send response back to front end
app.post('/getSentiment', async (req, res) => {
    
    const { urlUser } = req.body
    console.log(urlUser)
    const resp = await fetch(`${MC_URL}?key=${process.env.MC_KEY}&lang=auto&url=${urlUser}`)
    
    try {
        const response = await resp.json()
        res.send(response)
    }catch(error){
        console.log(`error:${error}`);
    }
})