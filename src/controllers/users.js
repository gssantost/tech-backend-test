const { validationResult } = require('express-validator/check')
const { userService } = require('../services');

module.exports.get = async (req, res) => {
  const send = (status,body) => res.status(status).send({status,body});
  try {
    const data = await userService.getUsers();
    send (200, {
      data
    })
  } catch (err) {
    throw err;
  }
}

module.exports.post = async (req, res) => {
  const errors = validationResult(req);

  try {
    
    if (!errors.isEmpty()) {
      return res.status(422).send({
        status: 422,
        errors: errors.array()
      });
    }
    
    const data = await userService.createUser(req.body);
    
    return res.status(200).send({
      status: 200,
      data
    })
    
  } catch (err) {
    throw err;
  }
}