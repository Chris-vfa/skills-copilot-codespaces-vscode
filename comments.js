// Create web server
const express = require('express');
const app = express();
const port = 3000;

// import skills
const comments = require('./skills/comments');
const users = require('./skills/users');

// create the skill
const skill = {
  name: 'Comments',
  description: 'A skill to manage comments',
  actions: [
    {
      name: 'list',
      description: 'List all comments',
      method: comments.list
    },
    {
      name: 'get',
      description: 'Get a comment',
      method: comments.get
    },
    {
      name: 'create',
      description: 'Create a comment',
      method: comments.create
    },
    {
      name: 'update',
      description: 'Update a comment',
      method: comments.update
    },
    {
      name: 'delete',
      description: 'Delete a comment',
      method: comments.delete
    },
    {
      name: 'listUsers',
      description: 'List all users',
      method: users.list
    },
    {
      name: 'getUser',
      description: 'Get a user',
      method: users.get
    },
    {
      name: 'createUser',
      description: 'Create a user',
      method: users.create
    },
    {
      name: 'updateUser',
      description: 'Update a user',
      method: users.update
    },
    {
      name: 'deleteUser',
      description: 'Delete a user',
      method: users.delete
    }
  ]
};

// register the skill
app.post('/register', (req, res) => {
  res.send(skill);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

