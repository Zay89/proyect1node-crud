const router = require('express').Router()
const httpList = require('./list.http')

router.route('/list')
    .get(httpList.getAll)
    .post(httpList.created)

router.route('/list/:id')
    .get(httpList.getById)
    .put(httpList.updated)
    .delete(httpList.deleted)


module.exports = {
    router
}