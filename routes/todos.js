const { Router } = require('express')
const getTodo = require('../middleware/todos')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean()

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()

  res.redirect('/')
})

router.post('/edit', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.compleated = !!req.body.compleated
  todo.title = req.body.title

  await todo.save()

  res.redirect('/')
})

router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id)

  res.json(todo)
})

module.exports = router
