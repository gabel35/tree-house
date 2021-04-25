const { User, Posts } = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    Posts.findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User.findOne({
      where: {
        id: req.params.id,
      },
      include: [User],
    }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Posts.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Posts.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Posts.findById({ _id: req.params.id })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
