const User = require('../models/user');

module.exports.createUser = async (data) => {
  const user = new User();
  try {
    const userCreated = await user.createUser(data);
    if (userCreated === null) {
      return {
        message: 'El correo suministrado ya se encuentra registrado'
      }
    }
    return {
      message: 'Usuario registrado con éxito'
    }
  } catch (err) {
    throw err || err.message;
  }
}

module.exports.getUsers = async () => {
  const user = new User();
  try {
    return await user.getUsers()
  } catch (err) {
    console.log(err || err.message);
    throw err || err.message;
  }
}