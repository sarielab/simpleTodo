'use strict'
const express = require('express')
let router = express.Router()

const taskCtrl = require('../controllers/taskCtrl')

router.get('/', taskCtrl.getAll)
router.post('/', taskCtrl.insert)
router.put('/:id', taskCtrl.edit)
router.delete('/:id', taskCtrl.remove)

module.exports = router