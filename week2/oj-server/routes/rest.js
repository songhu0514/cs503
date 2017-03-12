var express = require('express');
var router = express.Router();
var problemService = require("../services/problemService");

router.get('/problems', function (req, res) {
  problemService.getProblems()
    .then(problems => res.json(problems));
});

module.exports = router;
