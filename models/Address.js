const {  DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {

  street: {
    type:DataTypes.STRING,
    required:true,
  },
  number: {
    type:DataTypes.STRING,
    required: true
  },
  city: {
      type:DataTypes.STRING,
      required: true
    }

})

//um usuario pode ter varios endereços, mas so endereço tem apenas um usuário
User.hasMany(Address)
Address.belongsTo(User)//Address pertence a User

module.exports = Address