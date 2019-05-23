const { check } = require('express-validator/check');

module.exports = [
  check('name').exists({checkFalsy: true}), 
  check('middlename').exists({checkFalsy: true}),
  check('lastname').exists({checkFalsy: true}),
  check('email').isEmail(),
  check('phone').exists({checkFalsy: true}),
  check('address').exists({checkFalsy: true}),
  check('music').exists({checkFalsy: true}),
  check('cinema').exists({checkFalsy: true}),
  check('art').exists({checkFalsy: true}) 
];