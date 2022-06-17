const TodoModel = require('../models/model.todo')

const findAll = async (request, response) => {
  try {
    const result = await TodoModel.find()
    response.status(200).json(result)
  } catch (error) {
    response.status(500).json(error)
  }
}

const search = async (request, response) => {
  const { message } = request.query
  try {
    const result = await TodoModel.find({ message: new RegExp(message, 'i') })
    if (result.length) {
      response.status(200).json({
        result,
      })
    } else {
      response.status(404).json({ message: 'Nothing found' })
    }
  } catch (error) {
    response.status(500).json(error)
  }
}

const findById = async (request, response) => {
  const { id } = request.params
  try {
    const result = await TodoModel.findById(id)
    if (result) {
      response.status(200).json({
        result,
      })
    } else {
      response.status(404).json({ message: `No todo found with id ${id}` })
    }
  } catch (error) {
    response.status(500).json(error)
  }
}

const create = async (request, response) => {
  const { message, done } = request.body

  const todo = new TodoModel({
    message,
    done,
  })
  try {
    const result = await todo.save()
    response.status(201).json({
      result,
    })
  } catch (error) {
    response.status(500).json(error)
  }
}

const deleteById = async (request, response) => {
  const { id } = request.params
  try {
    const result = await TodoModel.deleteOne({ _id: id })
    if (result.deletedCount) {
      response.sendStatus(200)
    } else {
      response.status(404).json({ message: `No todo found with id ${id}` })
    }
  } catch (error) {
    console.log(error)
    response.status(500).json(error)
  }
}

module.exports = {
  findAll,
  findById,
  search,
  create,
  deleteById,
}
