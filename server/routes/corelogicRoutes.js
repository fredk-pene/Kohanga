const request = require('superagent')
const express = require('express')
const router = express.Router()

// const key = process.env.access_token
// console.log(process.env)

router.get('/', (req, res) => {
  const addressURL =
    'https://api-uat.corelogic.asia/sandbox/search/nz/matcher/address?q=52%20Nikau%20Road%2C%20Otahuhu%2C%20Auckland'
  request
    .get(addressURL)
    .set(
      'authorization',
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDUlQiLCJNQVAiLCJQVFkiLCJTR1QiLCJTVFMiLCJUVEwiXSwicm9sZXMiOltdLCJpc3MiOiJodHRwczovL2FjY2Vzcy1hcGkuY29yZWxvZ2ljLmFzaWEiLCJlbnZfYWNjZXNzX3Jlc3RyaWN0Ijp0cnVlLCJleHAiOjE2NjQwMjYzNDEsImdlb19jb2RlcyI6WyJBQ1QgLSBGdWxsIFN0YXRlIiwiTlNXIC0gTWV0cm8iLCJOU1cgLSBSZWdpb25hbCIsIk5UIC0gRnVsbCBTdGF0ZSIsIlFMRCAtIE1ldHJvIiwiUUxEIC0gUmVnaW9uYWwiLCJTQSAtIE1ldHJvIiwiU0EgLSBSZWdpb25hbCIsIlRBUyAtIEZ1bGwgU3RhdGUiLCJWSUMgLSAoQUEpIEZ1bGwgU3RhdGUiLCJWSUMgLSBGdWxsIFN0YXRlIiwiVklDIC0gTWV0cm8iLCJWSUMgLSBSZWdpb25hbCIsIldBIC0gTWV0cm8iLCJXQSAtIFJlZ2lvbmFsIiwiTm9ydGggSXNsYW5kIiwiU291dGggSXNsYW5kIl0sImNsaWVudF9pZCI6IkpQQUJaU1dhZ1ZtQ1NoWkw1dEZJcWRLUDd2c2xjWXFGIiwic291cmNlX2V4Y2x1c2lvbiI6W119.kaDae9aKTc32CKOIdDrs6sSZAiRbtdTI6YLxJxKm0MThQql3yZRR1vFo62FnswudHloZSxB-et2ePqCLFn2turtRZQB5lsd7z6SjFGk5WHys4yJguDXdyWBh0i23iFdu-DKFPFgcS-0bg_po3lrNbuxFxcIdVHOfRvtmEFNxDkw'
    )
    .then((response) => {
      console.log(response.body.matches[0].references.propertyIdList[0])
      res.json(response.body)
    })
    .catch((err) => console.error(err.message))
})

module.exports = router
