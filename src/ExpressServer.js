const express = require('express')
const app = express()
const querystring = require('querystring')
const port = 3000
var access_token =""

/*let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:51129/Account/callback'

app.get('/login', function(req, res) {
  res.redirect('https://test.careerhub.com.au/Events-ICT1/oauth/auth?' +
    querystring.stringify({
      response_type: 'code',
      client_id: 'LocalEventsApp',
      scope: 'JobSeeker.Personal.Details  JobSeeker.Events',
      redirect_uri
    }))
})

*/
let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:3001/api/callback'
//----------------------Admin  Login-------
app.get('/Admin', function(req, res) {
  res.redirect('https://test.careerhub.com.au/Events-ICT1/oauth/auth?' +
    querystring.stringify({
      response_type: 'code',
      client_id: 'LocalEventsApp',
	  scope : 'Admin.Personal.Details JobSeeker.Personal.Details  JobSeeker.Events',
      //scope: 'JobSeeker.Personal.Details  JobSeeker.Events',
      redirect_uri
    }))
})

//-------------------Student Login ----------------
app.get('/Student', function(req, res) {
  res.redirect('https://test.careerhub.com.au/Events-ICT1/oauth/auth?' +
    querystring.stringify({
      response_type: 'code',
      client_id: 'LocalEventsApp',
	 //scope : 'Admin.Personal.Details JobSeeker.Personal.Details  JobSeeker.Events',
      scope: 'JobSeeker.Personal.Details  JobSeeker.Events',
      redirect_uri
    }))
})




app.get('/api/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://test.careerhub.com.au/Events-ICT1/oauth/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        'LocalEventsApp' + ':' + 'g48RbRufBLjuukB89bPV//UgXDAeWZUzLMuy3aUhH4k='
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    access_token = body.access_token
    let uri = process.env.FRONTEND_URI || ' http://localhost/51129'
	console.log(access_token);
    alert(access_token);
    console.log(`Example app listening on port ${access_token}!`)
	access_token=access_token.substring(1, 10);
	
    res.redirect(uri + '?access_token=' + access_token)
  })
})



//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${access_token}!`))
