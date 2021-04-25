const { User, Posts } = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    User.findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User.findOne({
      where: {
        id: req.params.id,
      },
      include: [Posts],
    }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("signup body", req.body)
    User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
