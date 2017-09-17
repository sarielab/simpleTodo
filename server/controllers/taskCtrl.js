let Task = require('../models/task')

const getAll = (req, res) => {
  Task.find({}, (err, tasks)=> {
    res.send(err?{err:err}:tasks)
  })
}

const insert = (req, res) => {
  if (typeof req.body.title === 'undefined') res.send({err:'Title must be filled'})
  else if (typeof req.body.descr === 'undefined') res.send({err:'Descr must be filled'})
  else if (typeof req.body.poin === 'undefined') res.send({err:'Poin must be filled'})
  else if (typeof req.body.PIC === 'undefined') res.send({err:'PIC must be filled'})
  else {
    let task = new Task({
      title: req.body.title,
      descr: req.body.descr,
      poin: req.body.poin,
      PIC: req.body.PIC
    })
    task.save((err, newTask) => {
      if (err) {
        let errs = Object.values(err.errors).map( merr => merr.message)
        res.send({err:errs})
      } else res.send(newTask)
    })
  }

}

const edit = (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) res.send({err:err})
    else {
      for (let key in req.body) task[key] = req.body[key]
      task.save((err, edTask) => {
        if (err) {
          let errs = Object.values(err.errors)
          res.send(errs)
        } else res.send(edTask)
      })
    }
  })
}

const remove = (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) res.send({err:err})
    else
      task.remove((err, delTask) => {
        res.send(err? err : delTask)
      })
  })
}

module.exports = {
  getAll,
  insert,
  edit,
  remove
}