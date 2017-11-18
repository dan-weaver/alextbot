const knex = require('knex')(require('../knexfile').development)
const uuid = require('uuid/v1')
const moment = require('moment')
module.exports = {
  addOrUpdateContact,
}

function addOrUpdateContact (name, conversation, participant, senderId) {
  return knex
    .select('senderId')
    .from('contacts')
    .where({
      senderId,
    })
    .then(data => {
      return data.length
        ? knex('contacts')
            .update({
              firstName: name,
              conversation,
              participant,
              senderId,
              updatedAt: moment().utc(),
            })
            .where({ senderId })
        : knex('contacts').insert({
          firstName: name,
          conversation,
          participant,
          senderId,
          createdAt: moment().utc(),
          updatedAt: moment().utc(),
        })
    })
    .catch(data => {
      console.log(data)
    })
}
