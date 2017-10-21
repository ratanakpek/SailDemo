/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      require: true,
      size:50
    },

    title:{
      type: 'string',
      size:100
    },

    email:{
      type: 'string',
      email: true,
      unique: true,
      size: 50
    },

    encryptedPassword: {
      type: 'string',
      size: 50
    }
  }
};

