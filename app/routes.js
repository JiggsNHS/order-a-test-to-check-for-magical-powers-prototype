// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/magical-powers-answer', function (req, res) {
  const data = req.session.data
  const hasMagicalPowers = data.hasMagicalPowers

  if (hasMagicalPowers === "Yes") {

    res.redirect('/details')

  } else if (hasMagicalPowers === "No") {

    res.redirect('/ineligible-page')

  

  } else {

    // No answer selected, return to question
    res.redirect('/magical-powers')

  }
})

module.exports = router
