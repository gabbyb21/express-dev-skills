var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// all actual paths start with "/skills"

var skillsCtrl = require('../controllers/skills');

//get /skills
router.get('/', skillsCtrl.index);
//get /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
