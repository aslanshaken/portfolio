require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const items = require('../data/items.json')

function server() {
  const app = express()
  const port = process.env.SERVER_PORT

  app.use(morgan('dev'))
  app.use(bodyParser.json())

  const comments = {}

  items.forEach(item => {
    comments[item.id] = []
  })

  app.get('/api/items', (req, res) => {
    res.send(items.filter(item => item.userId === req.query.userId))
  })

  app.get('/api/items/:itemId/comments', (req, res) => {
    const { itemId } = req.params
    res.send(comments[itemId] || [])
  })

  app.post('/api/items/:itemId/comments', (req, res) => {
    const { itemId } = req.params
    const { text, user } = req.body
    const newComment = {
      id: Date.now().toString(),
      user,
      text,
      timestamp: new Date().toISOString(),
      replies: []
    }

    if (!comments[itemId]) {
      comments[itemId] = []
    }

    comments[itemId].push(newComment)
    res.status(201).send(newComment)
  })

  app.post('/api/items/:itemId/comments/:commentId/replies', (req, res) => {
    const { itemId, commentId} = req.params
    const { text, user } = req.body
    const newReply = {
      id: Date.now().toString(),
      user,
      text,
      timestamp: new Date().toISOString()
    }

    if (!comments[itemId]) {
      res.status(404).send({ message: "Not found" })
    }

    const comment = comments[itemId].find(c=> c.id === commentId)


    if (!comment.replies) {
      comment.replies = []
    }

    if(comment){
      console.log(newReply)
      comment.replies.push(newReply)
      res.status(201).send(newReply)
    }else{
      res.status(404).send({message: "Not found"})
    }
  })

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server
