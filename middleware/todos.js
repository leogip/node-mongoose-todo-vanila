async function getTodo(req, res, next) {
  try {
    todo = await Subscriber.findById(req.params.id)
    if (todo == null) {
      return res.status(404).json({ message: 'Cant find todo' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.todo = todo
  next()
}

module.exports = getTodo
